import RenderCard from "../components/events/RenderCard"
import Title from "../components/Title"

interface EventsSectionProps {
    landing: string
}

export default function EventsSection({ landing }: EventsSectionProps) {
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className="w-full">
                <RenderCard
                    landing={landing}
                    type="events"
                    filter={['conferencia', 'hackatón', 'meetup']}
                    showOnlyPublished={true}
                    showOnlyFuture={true}
                    filterByLocation={true}
                />
            </div>
        </div>
    )
}