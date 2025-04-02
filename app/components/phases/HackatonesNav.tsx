import Title from "../Title"

interface Props {
    landing: string
}


export default function HackatonesNav({ landing }: Props) {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <Title
                    title="Barranqui-IA"
                    landing={landing} />

            </div>
            <div className="flex">
                <Title
                    title="Samar-IA"
                    landing={landing} />

            </div>

        </div>
    )
}