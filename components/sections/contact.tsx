"use client";

import Container from "../container";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try{
            const response = await fetch("http://localhost:4000/contacts",{
                method: "POST",
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify(formData)
            });
            await response.json;

            if(response.ok){
                setResponseMessage("Thank you for contact us!");
                setFormData({name: "", email: "", message: ""});
            }
            else{
                setResponseMessage("failed to submit contact")
            }
        }catch(error){
            console.log(error)
            setResponseMessage('An error occurred. Please try again later.');
        }finally{
            setLoading(false)
        }
    }

    return (

        <Container>
            <div className="flex gap-20 lg:gap-10 lg:pl-28 justify-center mt-12 items-center flex-col lg:flex-row 2xl:pl-1 2xl:gap-28">
                <Image
                    src="/map.png"
                    alt="map"
                    width={400}
                    height={400}
                    className="h-[55vh] 2xl:h-[65vh]"
                />
                <form 
                className="border border-gray-400 p-4 md:p-10 text-[#19213D] rounded-xl md:mx-5 lg:w-[40vw]"
                onSubmit={handleSubmit}>
                    <div className="flex gap-5 mb-4 flex-col md:flex-row lg:flex-col 2xl:flex-row">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold text-lg">Name:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name..."
                                value={formData.name}
                                onChange={handleChange}
                                className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold text-lg">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your name..."
                                value={formData.email}
                                onChange={handleChange}
                                className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-5 flex-col md:flex-row lg:flex-col 2xl:flex-row">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-semibold text-lg">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your phone number..."
                                className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="company" className="font-semibold text-lg">Company:</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Your company..."
                                className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-semibold text-lg">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="p-4 h-28 md:w-[32rem] 2xl:w-[32rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none">
                            
                        </textarea>
                    </div>

                    <button
                        className="flex items-center bg-blue-500 text-white font-semibold rounded-lg mt-6 z-10"
                        style={{ height: '48px', width: '160px', fontSize: '14px' }}
                    >
                        {loading ? <span className="text-xs ml-6">submitting...</span>
                        : 'GET STARTED'}
                        <FontAwesomeIcon icon={faArrowRight} className="text-3xl" style={{ height: '12px', width: '24px' }} />
                    </button>
                    {responseMessage && <p>{responseMessage}</p>}
                </form>
            </div>
        </Container>
    )
}