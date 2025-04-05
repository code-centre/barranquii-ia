import HeroTitle from "./../hero/HeroTitle"
import Image from "next/image"
import Link from "next/link"
import GradientTitle from "../GradientTitle"

interface Props {
    landing: string
}


export default function HackatonesNav({ landing }: Props) {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Link href='' className="w-full flex flex-col items-center justify-start py-5 ">
                <div className="flex flex-col items-center w-full space-y-2">
                    <div className="flex flex-col items-center">
                        <GradientTitle
                            title="Próximamente"
                            landing="cartagen-ia"
                            size="sm" />
                    </div>
                    <HeroTitle
                        title="Cartagen-IA"
                        landing="cartagen-ia"
                        size="lg" />
                    <div className="flex items-center justify-center mt-2">
                        <div className="flex flex-col items-center pt-2">
                            {/* <h2 className="text-sm lg:text-4xl text-white font-medium">
                                Por confirmar
                            </h2> */}
                        </div>
                        {/* <Image
                            src={"/logo_uniandes_w.png"}
                            alt="Unimag logo"
                            width={200}
                            height={50}
                            className="object-contain"
                        /> */}
                    </div>
                </div>
            </Link>

            <Link href={`/barranqui-ia`} className="flex-1 xl:min-w-[350px] flex flex-col items-center justify-start py-5 ">
                <div className="flex flex-col items-center w-full space-y-2">
                    <div className="flex flex-col items-center">
                        <GradientTitle
                            title="3 y 4 de Mayo"
                            landing="barranqui-ia"
                            size="sm" />
                    </div>
                    <HeroTitle
                        title="Barranqui-IA"
                        landing="barranqui-ia"
                        size="lg" />
                    <div className="flex items-center justify-center mt-2">
                        <Image
                            src={"/uninorte.webp"}
                            alt="Universidad del Norte logo"
                            width={250}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                </div>
            </Link>

            <Link href='' className="flex-1 xl:min-w-[350px] flex flex-col items-center justify-start py-5 ">
                <div className="flex flex-col items-center w-full space-y-2">
                    <div className="flex flex-col items-center">
                        <GradientTitle
                            title="Próximamente"
                            landing="samar-ia"
                            size="sm" />
                    </div>
                    <HeroTitle
                        title="Samar-IA"
                        landing="samar-ia"
                        size="lg" />
                    <div className="flex items-center justify-center mt-2">
                        <Image
                            src={"/logo_unimag.webp"}
                            alt="Unimag logo"
                            width={100}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                </div>
            </Link>

        </div>
    )
}