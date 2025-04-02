import Title from "../components/Title"
import RenderCard from "../components/events/RenderCard"

export default function EventsSection() {
    return (
        <div className='max-w-6xl mx-auto px-5 w-full'>
            <Title
                title="Participa en los eventos de Caribe-IA"
            />
            <div className="mt-10 w-full">
                <RenderCard
                    type="events"
                    filter={['conferencia', 'hackatón', 'meetup']}
                    showOnlyPublished={true}
                    showOnlyFuture={true} />
            </div>
        </div>
    )
}