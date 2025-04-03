import RenderCard from "../components/events/RenderCard"

interface EventsSectionProps {
    landing?: string
}

export default function EventsSection({ landing }: EventsSectionProps) {
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className="max-w-6xl mx-auto w-full px-5">
                <Title
                    title="Participa en los eventos de Caribe-IA"
                    landing={landing}
                />
            </div>
            <div className="w-full">
                <RenderCard
                    landing={landing}
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