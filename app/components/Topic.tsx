import Image from 'next/image';
import React from 'react'

interface Props {
    img: string;
    title: string;
}

export default function Topic({ img, title }: Props) {
  return (
    <div>
        <Image 
            src={img} 
            alt={title} 
            height={160} 
            width={160}  
            className='object-cover w-28 h-28 md:w-40 md:h-40 mx-auto'
        />
        <p className='text-center text-gray-300 w-[150px] mx-auto font-medium font-mono'>{title}</p>
    </div>
  )
}
