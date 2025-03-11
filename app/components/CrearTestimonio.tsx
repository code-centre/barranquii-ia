"use client"
import React, { useState } from 'react'

export default function CrearTestimonio() {
    const [isCreatingTestimonial, setIsCreatingTestimonial] = useState(false)
    const [nameUser, setNameUser] = useState("")
    const [testimonial, setTestimonial] = useState("")
   
    return (
        <>
            {
                !isCreatingTestimonial
                    ? <button onClick={() => setIsCreatingTestimonial(true)} className=" text-lg text-black block mt-10 w-fit bg-blue-400 mx-auto py-2 px-6 rounded-md">< strong > Crear Testimonio</strong ></button >
                    : <form>
                        <label >
                            <input onChange={(e) => setNameUser(e.target.value)} type="text" name="" id="" />
                        </label>
                        <label >
                            <textarea onChange={(e) => setTestimonial(e.target.value)} name="" id="" />
                        </label>
                    </form>
            }
        </>
    )
}
