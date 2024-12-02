import React, { useState } from "react";
import Container from "../container";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: ""
                });
            } else {
                alert("Failed to send the message.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-20 lg:gap-10 lg:pl-28 justify-center mt-12 items-center flex-col lg:flex-row 2xl:pl-1 2xl:gap-28">
                    <Image
                        src="/map.png"
                        alt="map"
                        width={400}
                        height={400}
                        className="h-[55vh] 2xl:h-[65vh]"
                    />
                    <div className="border border-gray-400 p-4 md:p-10 text-[#19213D] rounded-xl md:mx-5 lg:w-[40vw]">
                        <div className="flex gap-5 mb-4 flex-col md:flex-row lg:flex-col 2xl:flex-row">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-semibold text-lg">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name..."
                                    className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-semibold text-lg">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email..."
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
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number..."
                                    className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="company" className="font-semibold text-lg">Company:</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your company..."
                                    className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-semibold text-lg">Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="p-4 h-28 md:w-[32rem] 2xl:w-[32rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center bg-blue-500 text-white font-semibold rounded-lg mt-6 z-10"
                            style={{ height: '48px', width: '160px', fontSize: '14px' }}
                        >
                            <span className="text-xs ml-6">GET STARTED</span>
                            <FontAwesomeIcon icon={faArrowRight} className="text-3xl" style={{ height: '12px', width: '24px' }} />
                        </button>

                    </div>
                </div>
            </form>
        </Container>
    );
}
