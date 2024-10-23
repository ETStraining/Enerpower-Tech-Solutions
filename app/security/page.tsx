"use client"

import Container from "@/components/container"
import Footer from "@/components/footer"
import Image from "next/image"

export default function SecuritySystem() {
    return (
        <>
            <div className="relative mt-20"
            >
                <Image
                    src="/camera.jpg"
                    alt="camera"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-[45vh]"
                />
                <div className="absolute inset-0 bg-black opacity-60" />
                <div className="flex items-center justify-center flex-col text-white z-10 relative h-[45vh] gap-7 md:gap-20 px-6">
                    <h2 className="text-2xl md:text-5xl text-center xl:text-7xl">security system</h2>
                    <p className="lg:w-[40vw] text-center lg:font-medium text-md md:text-xl xl:text-3xl xl:w-[60vw]">
                        we provide comprehensive security solutions to ensure the safety
                        and protection of your business and assets.
                    </p>
                </div>
            </div>
            <Container>
                <div className="mt-12 px-6">
                    <h1 className="mb-6 text-2xl font-semibold">Our services in this department include:</h1>
                    <ul className="list-disc text-lg">

                        <li className="py-2">
                            <b>Camera:</b>&nbsp;
                            Installation of advanced CCTV and surveillance systems to
                            monitor and record activities for enhanced security.
                        </li>

                        <li className="pb-2">
                            <b>Access control:</b>&nbsp;
                            Implementing state-of-the-art access control systems to regulate and
                            secure entry points within your premises.
                        </li>

                        <li className="pb-2">
                            <b>Fire alarm device:</b>&nbsp;
                            Installing reliable fire detection and alarm systems to
                            provide timely alerts and safeguard against fire hazards.

                        </li>

                        <li className="pb-2">
                            <b>Intrusion devices:</b>&nbsp;
                            Offering a range of intrusion detection systems to prevent
                            unauthorized access and enhance security measures.
                        </li>
                    </ul>
                    <p className="text-lg">
                        Our security systems are designed to offer peace of mind, providing robust protection and
                        monitoring for your business environment.
                    </p>
                </div>
                <Footer />
            </Container>
        </>
    )
}