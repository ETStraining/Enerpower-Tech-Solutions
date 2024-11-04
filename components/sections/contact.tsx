"use client";

import Container from "../container";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
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
                <div className="border border-gray-400 p-4 md:p-10 text-[#19213D] rounded-xl md:mx-5 lg:w-[40vw]">
                    <div className="flex gap-5 mb-4 flex-col md:flex-row lg:flex-col 2xl:flex-row">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold text-lg">Name:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name..."
                                className="px-4 h-12 w-[16rem] 2xl:w-[16rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold text-lg">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your name..."
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
                            name="message"
                            className="p-4 h-28 md:w-[32rem] 2xl:w-[32rem] lg:w-full border rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none">

                        </textarea>
                    </div>

                    <button
                        className="flex items-center bg-blue-500 text-white font-semibold rounded-lg mt-6 z-10"
                        style={{ height: '48px', width: '160px', fontSize: '14px' }}
                    >
                        <span className="text-xs ml-6">GET STARTED</span>
                        <FontAwesomeIcon icon={faArrowRight} className="text-3xl" style={{ height: '12px', width: '24px' }} />
                    </button>

                </div>
            </div>
        </Container>
    )
}