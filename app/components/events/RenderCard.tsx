"use client"
import { useEffect, useState } from "react"
import { db } from "../../../firebase"
import { collection, query, where, orderBy } from "firebase/firestore"
import CardEvent from "./CardEvent"
import { useCollection } from "react-firebase-hooks/firestore"
import Link from "next/link"
import { InfiniteMovingCards } from "../../components/InfiniteMovingCards"
import SkeletonCard from "./SkeletonCard"
import { THEME_LANDINGS } from "@/app/utils/theme"
import { getCityKeywords, shouldApplyCityFiltering, getCityDisplayName } from "@/app/utils/citys"

interface EventData {
    id: string
    slug: string
    type: string
    date: any
    status: string
    title: string
    subtitle: string
    heroImage: string
    cost: string
    location?: {
        mapUrl: string
        title: string
    }
    startHour: string
    [key: string]: any
}

interface TicketProps {
    type: string
    filter?: string[] | string
    excludeId?: string
    showOnlyPublished?: boolean
    showOnlyFuture?: boolean
    filterByLocation?: boolean
    location?: {
        title: string
        mapUrl: string
    }
    startHour?: string
    data?: EventData[]
    landing: string
}

export default function RenderCard({
    type,
    filter,
    excludeId,
    showOnlyPublished,
    showOnlyFuture,
    data: initialData,
    landing,
    filterByLocation = true,
}: TicketProps) {
    const [data, setData] = useState<EventData[]>(initialData || [])
    const [loading, setLoading] = useState(!initialData)

    const eventsQuery =
        type === "events"
            ? Array.isArray(filter)
                ? query(collection(db, "events"), orderBy("date"), where("type", "in", filter))
                : filter
                    ? query(collection(db, "events"), orderBy("date"), where("type", "==", filter))
                    : query(collection(db, "events"), orderBy("date"))
            : query(collection(db, "programs"))

    const [eventsSnapshot, eventsLoading, eventsError] = useCollection(eventsQuery)

    useEffect(() => {
        if (initialData) {
            setData(initialData)
            setLoading(false)
            return
        }

        if (!eventsLoading && eventsSnapshot) {
            const fetchedData = eventsSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })) as EventData[]

            let filteredData = fetchedData

            if (excludeId) {
                filteredData = filteredData.filter((item) => item.id !== excludeId)
            }

            if (showOnlyPublished) {
                filteredData = filteredData.filter((item) => item.status === "published")
            }

            if (showOnlyFuture) {
                const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }))
                filteredData = filteredData.filter((item) => {
                    const eventDate = new Date(item.date)
                    return eventDate > today
                })
            }

            if (filterByLocation && shouldApplyCityFiltering(landing)) {
                const cityKeywords = getCityKeywords(landing)

                filteredData = filteredData.filter((item) => {
                    if (!item.location) return false

                    const locationMapUrl = (item.location.mapUrl || "").toLowerCase()
                    const locationTitle = (item.location.title || "").toLowerCase()

                    return cityKeywords.some((keyword) => locationMapUrl.includes(keyword) || locationTitle.includes(keyword))
                })
            }

            setData(filteredData)
            setLoading(false)
        }
    }, [
        eventsSnapshot,
        eventsLoading,
        excludeId,
        showOnlyPublished,
        initialData,
        showOnlyFuture,
        landing,
        filterByLocation,
    ])

    return (
        <>
            {
                loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                )
            }
            <>

            </>
            {data.length >= 4 ? (
                <>
                    <InfiniteMovingCards direction="left" speed="slow" pauseOnHover={true}>
                        {type === "events" && (
                            <div className="flex justify-center px-5 gap-10 w-full">
                                {data.map((item) => (
                                    <Link key={item.id} href='https://www.codigoabierto.tech/eventos'>
                                        <CardEvent landing={landing} eventData={item} />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </InfiniteMovingCards>
                    <Link href="https://www.codigoabierto.tech/eventos">
                        <div className="flex justify-center mt-10 mb-20">
                            <button
                                className="text-white text-lg py-2 px-4 rounded-full hover:opacity-80 transition duration-300 ease-in-out hover:-translate-y-1 w-1/2 lg:w-1/5"
                                style={{ backgroundColor: THEME_LANDINGS[landing || "default"].principal + "80" }}>
                                Ver todos</button>
                        </div>
                    </Link>
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center mt-10 text-gray-500">
                        <p className="mb-4">No hay eventos disponibles en {getCityDisplayName(landing)} en este momento.</p>
                        {loading ? <p>Cargando eventos...</p> :
                            <>
                                <p className="text-gray-400">¡Pero no te desanimes!</p>
                                <p className="text-gray-400">Pronto tendremos eventos disponibles en {getCityDisplayName(landing)}.</p>
                            </>
                        }
                    </div>
                    <Link href="https://www.codigoabierto.tech/eventos">
                        <div className="flex justify-center mt-10 mb-20">
                            <button
                                className="text-white text-lg py-2 px-4 rounded-full hover:opacity-80 transition duration-300 ease-in-out hover:-translate-y-1 w-1/2 lg:w-1/5"
                                style={{ backgroundColor: THEME_LANDINGS[landing || "default"].principal + "80" }}>
                                Ver eventos en otros lugares</button>
                        </div>
                    </Link>
                </>
            )}
        </>
    )
}

