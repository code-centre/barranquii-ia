import HeroTitle from "./../hero/HeroTitle"
import Image from "next/image"
import Link from "next/link"

interface Props {
    landing: string
}


export default function HackatonesNav({ landing }: Props) {
    return (
        <div className="flex justify-between w-full items-center gap-5 lg:gap-7 flex-wrap">

            <Link href={`/cartagen-ia`} className="flex flex-col items-center justify-center mt-7">
                <div className="flex flex-col ">
                    <HeroTitle
                        title="Cartagen-IA"
                        landing="cartagen-ia"                      
                        size="xl" />
                    <div className="items-center justify-center flex pt-1">
                        <Image
                            src={"/logo_uniandes_w.png"}
                            alt="Unimag logo"
                            width={200}
                            height={50} />
                    </div>
                </div>
            </Link>

            <Link href={`/barranqui-ia`} className="flex flex-col items-center justify-center pt-5">
                <div className="flex flex-col">
                    <HeroTitle
                        title="Barranqui-IA"
                        landing="barranqui-ia"
                        size="xl" />
                    <div className="items-center justify-center flex pt-2">
                        <Image
                            src={"/uninorte.webp"}
                            alt="Universidad del Norte logo"
                            width={250}
                            height={100} />
                    </div>
                </div>
            </Link>

            <Link href={`/samar-ia`} className="flex flex-col items-center justify-center pt-5">
                <div className="flex flex-col items-center justify-center pt-5">
                    <HeroTitle
                        title="Samar-IA"
                        landing="samar-ia"
                        size="xl" />
                    <div className="items-center justify-center flex">
                        <Image
                            src={"/logo_unimag.webp"}
                            alt="Uniandes logo"
                            width={100}
                            height={60} />
                    </div>
                </div>
            </Link>

        </div>
    )
}