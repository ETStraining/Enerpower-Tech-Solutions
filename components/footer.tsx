"use client";
import Image from "next/image";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { CgYoutube } from "react-icons/cg";
import Link from "next/link";
import Container from "./container";
import { useState, useEffect } from "react";

export default function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode")
        if (savedTheme) {
            const darkModeEnabled = JSON.parse(savedTheme);
            setIsDarkMode(darkModeEnabled);
            document.body.classList.toggle('dark-mode', darkModeEnabled);
            document.body.classList.toggle('light-mode', !darkModeEnabled);
        } else {
            document.body.classList.add('light-mode');

        }
    }, [])
    return (
        <Container>
            <div className={`flex flex-wrap items-center justify-between text-lg md:gap-20 md:flex-wrap lg:gap-40 py-10 `}>
                <div className="text-sm md:text-lg">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-[12rem] h-[18rem]"
                    />
                    <p className="pb-7">
                        Expertly trained, battle-tested,
                        elite<br /> software developers on demand
                    </p>
                    <div className="flex gap-4 items-end pb-7">
                        Tel +250 788 781 418
                    </div>

                    <div className="flex gap-4 items-end pb-7">
                        enerpowertechsolutionsltd@gmail.com
                    </div>

                    <h3 className="pb-4">Follow us</h3>
                    <div className="flex gap-3 pt-3">
                        <a href="https://www.linkedin.com/company/enerpower-tech-solutions/" target="_blank" >
                            <CiLinkedin fontSize={35} color={isDarkMode ? 'white' : 'black'} />
                        </a>
                        <a href="#">
                            <CiFacebook fontSize={35} color={isDarkMode ? 'white' : 'black'} />
                        </a>
                        <a href="#">
                            <FaInstagram fontSize={35} color={isDarkMode ? 'white' : 'black'} />
                        </a>
                        <a href="#">
                            <LiaTwitterSquare fontSize={35} color={isDarkMode ? 'white' : 'black'} />
                        </a>
                        <a href="#">
                            <CgYoutube fontSize={35} color={isDarkMode ? 'white' : 'black'} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-7 mt-20">
                    <h2 className="font-semibold pb-5">Company</h2>
                    <Link href="/public">About us</Link>
                    <Link href="/public">Privacy policy</Link>
                    <Link href="/public">Terms & consitions</Link>
                    <Link href="/public">Contact us</Link>
                </div>

                <div className="flex flex-col gap-7 mt-20">
                    <h2 className="font-semibold pb-5">Services</h2>
                    <p>Main Services</p>
                    <p>Electrical System</p>
                    <p>Networking System</p>
                    <p>Security System</p>
                </div>

                <div className="flex flex-col gap-7 mt-20">
                    <h2 className="font-semibold pb-5">How to Start</h2>
                    <p>You asked</p>
                    <p>We proceed</p>
                    <p>Negotiate</p>
                    <p>You get</p>
                </div>
            </div>
        </Container>
    );
}
