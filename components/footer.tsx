"use client";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { CgYoutube } from "react-icons/cg";
import Link from "next/link";
import Container from "./container";
import { useState, useEffect } from "react";

export default function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const savedTheme = localStorage.getItem("darkMode")
        if (savedTheme) {
            const darkModeEnabled = JSON.parse(savedTheme);
            setIsDarkMode(darkModeEnabled);
            document.body.classList.toggle('dark-mode', darkModeEnabled);
            document.body.classList.toggle('light-mode', !darkModeEnabled);
          } else {
            document.body.classList.add('light-mode'); // Default to light mode
            
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
                        className="my-7"
                    />
                    <p className="pb-7">
                        Expertly trained, battle-tested,
                        <br />elite software developers on <br />demand
                    </p>
                    <div className="flex gap-4 items-end pb-7">
                        <IoMdCall fontSize={30} />
                        <p>+94 713249222</p>
                    </div>

                    <div className="flex gap-4 items-end pb-7">
                        <MdOutlineEmail fontSize={25} />
                        <p>hello@courtney.lk</p>
                    </div>

                    <div className="flex gap-4 items-center pb-7">
                        <IoLocationOutline fontSize={30} />
                        <p>
                            Courtney Lanka (Private) Limited <br />
                            Level 35 <br />World Trade Center <br />Colombo 01
                        </p>
                    </div>

                    <h3 className="pb-4">FOLLOW US</h3>
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

                <div className="flex flex-col gap-5 mt-20">
                    <h2 className="font-semibold">Company</h2>
                    <Link href="/public">About us</Link>
                    <Link href="/public">Success Stories</Link>
                    <Link href="/public">Privacy policy</Link>
                    <Link href="/public">Terms & consitions</Link>
                    <Link href="/public">Contact us</Link>
                </div>

                <div className="flex flex-col gap-5 mt-20">
                    <h2 className="font-semibold">Services</h2>
                    <p>Hire permanent staff</p>
                    <p>Staff Augumentation</p>
                    <p>Software outsourcing</p>
                    <p>Build remote office</p>
                </div>

               
            </div>
        </Container>
    );
}
