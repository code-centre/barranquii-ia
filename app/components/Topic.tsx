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
            src='/question-mark.webp' 
            alt={title} 
            height={160} 
            width={160}  
<<<<<<< HEAD
<<<<<<< HEAD
            className='mx-auto w-28 md:w-40 h-28 md:h-40 object-cover'
        />
        <p className='mx-auto w-[150px] font-medium font-mono text-center text-gray-300'>{title}</p>
=======
            className='object-cover w-28 h-28 md:w-40 md:h-40 mx-auto'
        />
        <p className='text-center text-gray-300 w-[150px] mx-auto font-medium font-mono'>{title}</p>
>>>>>>> 147cc84 (Topics)
=======
            className='mx-auto w-28 md:w-40 h-28 md:h-40 object-cover'
        />
        <p className='mx-auto w-[150px] font-medium font-mono text-center text-gray-300'>{title}</p>
>>>>>>> 11fbcb8 (Change image and title of topics)
    </div>
  )
}
