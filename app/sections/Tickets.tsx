'use client'
import React, { useEffect, useState } from "react";
import CardTicket from "../components/CardTicket";
import "../globals.css";
import Title from "../components/Title";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { THEME_LANDINGS } from "../utils/theme";
import SkeletonCard from "../components/events/SkeletonCard";

interface Props {
  landing: string;
}

interface EventData {
  id: string;
  date: string | { toDate: () => Date };
  title: string;
  details: string;
  subtitle: string;
  description?: string;
  slug: string;
  heroImage: string | null;
  type: string;
  createdAt: string;
  startHour: string;
  cost: string;
  status: string | null;
  content?: string;
  speakers?: any[];
  tickets?: any[];
}

const EVENTS_ID: Record<string, string> = {
  'barranqui-ia': '0AV0Wdoz4lj57CbZ94eT',
  'samar-ia': '0AV0Wdoz4lj57CbZ94eT',
  'cartagen-ia': '0AV0Wdoz4lj57CbZ94eT'
}

export default function Tickets({ landing }: Props) {
  const [eventData, setEventData] = useState<EventData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getEventData(): Promise<EventData | null> {
      const q = query(collection(db, "events"), where("id", "==", EVENTS_ID[landing]))
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        setEventData({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as EventData)
      }
      setLoading(false)
      return null
    }

    getEventData()
  }, [])

  return (
    <section
      id="preinscribete"
      className="relative flex flex-col gap-10 pt-10 px-5 max-w-6xl mx-auto lg:px-10 w-full"
    >
      {/* <div id='preinscribete' className='max-w-6xl mx-auto px-5 lg:px-10 w-full'> */}
        {/* <div className="gradient"></div> */}
        <Title title="Boletos" landing={landing} />

        {/* <ul className="flex flex-col gap-1 ml-10 text-gray-300 marker:text-principleViolet list-disc"></ul> */}
        {
          loading ?
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
            : <div className="gap-x-3 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                eventData?.tickets?.map((ticket: any, i: number) => (
                  <CardTicket key={ticket.id}
                    title={ticket.ticketName || ticket.type}
                    styles="col-span-1"
                    subTitle={ticket.description}
                    amount={ticket.price}
                    landing={landing}
                    idEvent={eventData?.id || ''}
                    ticketId={i}
                    disabled={ticket.price > 100000}
                  >
                    <ul className="mt-6 ml-5 marker:text-[#C663EA] list-disc text-sm">
                      {ticket.benefits.map((item: string, index: number) => (
                        <li key={index}
                          className="pl-2 md:pl-5"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardTicket>
                ))
              }
            </div>
        }
        <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -bottom-24 -z-10 -right-36 lg:w-[600px] lg:h-[600px] rounded-full w-[300px] h-[300px] blur-3xl "></div>
      {/* </div> */}
      {/* <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -bottom-24 -z-10 -right-36 lg:w-[600px] lg:h-[600px] rounded-full w-[300px] h-[300px] blur-3xl "></div> */}

    </section>
  );
}
