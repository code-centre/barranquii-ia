import RenderCard from "../components/events/RenderCard"

interface EventsSectionProps {
    landing?: string
}

export default function EventsSection({ landing }: EventsSectionProps) {
    return (
            <div className="mt-10 w-full">
                <RenderCard
                    type="events"
                    filter={['conferencia', 'hackatón', 'meetup']}
                    showOnlyPublished={true}
                    showOnlyFuture={true}
                    landing={landing}
                    filterByLocation={true} // Assuming you want to filter by location
                     />
                
            </div>
    )
}