"use client";

import Container from "@/components/container";
import Image from "next/image";

export default function SecuritySystem() {
    return (
        <Container>
            <div className="flex flex-col lg:flex-row mt-20 gap-8 px-6 items-start">
                {/* Left Image Section */}
                <div className="flex flex-col items-center lg:w-1/2 space-y-6 animate__animated animate__fadeInLeft animate__delay-1s">
                    {/* Main Camera Image */}
                    <div className="w-full animate__animated animate__fadeInUp animate__delay-2s">
                        <Image
                            src="/camera.jpg"
                            alt="camera"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Device Diagram Image */}
                    <div className="w-full animate__animated animate__fadeInUp animate__delay-3s">
                        <Image
                            src="/security.png"
                            alt="Devices Diagram"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Text Content */}
                <div className="lg:w-1/2 animate__animated animate__fadeInRight animate__delay-2s">
                    <h2 className="text-blue-600 text-xl md:text-2xl pt-4 md:pt-8 font-bold mb-4">
                        Security System
                    </h2>
                    <ul className="list-disc space-y-4 text-lg text-gray-700 ml-4">
                        <li>
                            <b>Cameras:</b> Installation of advanced CCTV and surveillance systems to monitor and record activities for enhanced security.
                        </li>
                        <li>
                            <b>Access Control:</b> Implementing state-of-the-art access control systems to regulate and secure entry points within your premises.
                        </li>
                        <li>
                            <b>Fire Alarm Devices:</b> Installing reliable fire detection and alarm systems to provide timely alerts and safeguard against fire hazards.
                        </li>
                        <li>
                            <b>Intrusion Devices:</b> Offering a range of intrusion detection systems to prevent unauthorized access and enhance security measures.
                        </li>
                    </ul>
                    <p className="text-lg mt-4 text-gray-700">
                        Our security systems are designed to offer peace of mind, providing robust protection and monitoring for your business environment.
                    </p>
                </div>
            </div>
        </Container>
    );
}
