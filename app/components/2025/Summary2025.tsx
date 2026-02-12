"use client";

import React from 'react'
import Title from '../../components/Title'
import Border from '../../components/Border'
import Image from 'next/image'
import { useTranslation } from '@/app/i18n/useTranslation'

interface Props {
    landing: string
}

export const TITLES: Record<string, string> = {
    'default': 'Caribe-IA',
    'barranqui-ia': 'Barranqui-IA',
    'samar-ia': 'Samar-IA',
    'cartagen-ia': 'Cartagen-IA'
}

const TEXTS: Record<string, (string | { text: string, items: string[] })[]> = {
    'default': [
        'Caribe-IA es un programa integral diseñado para fomentar la creación de startups de alto impacto, basadas  en inteligencia artificial, desde la región Caribe de Colombia. Esta iniciativa es liderada por la Fundación Código Abierto (FCA) y respaldada por una red de aliados comprometidos con convertir al Caribe en el nuevo epicentro tecnológico de Colombia.',
        {
            text: 'El programa ofrece un acompañamiento completo que abarca:',
            items: [
                'Capacitación especializada en tecnologías emergentes y desarrollo de negocio.',
                'Identificación y selección de proyectos disruptivos con alto potencial.',
                'Mentoría integral tanto en áreas técnicas como estratégicas.',
                'Una plataforma de visibilidad y conexión con inversionistas, incluyendo mecanismos de crowdfunding para acelerar el crecimiento.'
            ]
        },
        'Caribe-IA busca generar casos de éxito desde el Caribe para el mundo, demostrando que la innovación tecnológica también se construye desde nuestras costas.'
    ],
    'samar-ia': [
        'Samar-IA es el hackatón de inteligencia artificial más emocionante de Colombia. Un espacio donde personas creativas, técnicas y visionarias se reúnen para resolver retos reales usando el poder de la IA. No importa si vienes con una idea, sin equipo o con experiencia previa: aquí todos pueden construir, aprender y transformar.',
        'Durante el fin de semana del 23 y 24 de Mayo, vivirás la experiencia de crear una solución desde cero, con el apoyo de mentores expertos, aliados del ecosistema y una comunidad que cree en el poder de la tecnología para cambiar el mundo. Tu solución deberá tener como base el uso de inteligencia artificial.',
        'Al final del evento presentarás tu solución en un pitch frente a un jurado especializado para concursar por premios increibles. Este año tenemos más de $10,000,000 COP en premios.'

    ],
    'cartagen-ia': [
        'Cartagen-IA es el hackatón de inteligencia artificial más emocionante de Colombia. Un espacio donde personas creativas, técnicas y visionarias se reúnen para resolver retos reales usando el poder de la IA. No importa si vienes con una idea, sin equipo o con experiencia previa: aquí todos pueden construir, aprender y transformar.',
        'Durante el fin de semana de Junio, vivirás la experiencia de crear una solución desde cero, con el apoyo de mentores expertos, aliados del ecosistema y una comunidad que cree en el poder de la tecnología para cambiar el mundo. Tu solución deberá tener como base el uso de inteligencia artificial.',
        'Al final del evento presentarás tu solución en un pitch frente a un jurado especializado para concursar por premios increibles. Este año tenemos más de $10,000,000 COP en premios.'
    ]
}

export default function Summary({ landing }: Props) {
    const { t } = useTranslation();
    const isBarranqui = landing === 'barranqui-ia';
    const barranquiTexts: string[] = isBarranqui
        ? [t('summary2025.text1'), t('summary2025.text2'), t('summary2025.text3')]
        : [];
    const otherTexts = isBarranqui ? [] : (TEXTS[landing] ?? TEXTS['default']);
    const title = isBarranqui ? t('summary2025.title') : `¿Qué es ${TITLES[landing]}?`;

    return (
        <section className='flex flex-col gap-4 animate-fade-in-up animate-delay-400'>
            <Title title={title} landing={landing} />
            <div className='grid grid-cols-[3px_1fr] gap-3 lg:gap-10'>
                <Border landing={landing} />
                <div className='flex flex-col gap-7 md:gap-5'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch'>
                        <div className='flex flex-col gap-5 text-base lg:text-lg md:col-span-2'>
                            {isBarranqui ? (
                                barranquiTexts.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))
                            ) : (
                                (otherTexts as (string | { text: string, items: string[] })[]).map((text, index) => (
                                    <React.Fragment key={index}>
                                        {typeof text === 'string' && <p>{text}</p>}
                                        {typeof text === 'object' && (
                                            <div>
                                                <p className='mb-2'>{text.text}</p>
                                                <ul className={`list-disc list-inside flex flex-col gap-3 md:gap-1 marker:text-[#C663EA]`}>
                                                    {text.items.map((item, i) => (
                                                        <li className='pl-2 md:pl-5' key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))
                            )}
                        </div>
                        <div className='md:col-span-1'>
                            <Image
                                src="/2025/portada-hackathon.webp"
                                alt={t('summary2025.imageAlt')}
                                width={1000}
                                height={1000}
                                className="object-cover w-full h-full rounded-lg border-4 border-purple-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
