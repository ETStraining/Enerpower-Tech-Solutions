"use client";
import Image from "next/image";
import {
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { CgYoutube } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {

    return (
        <div className={`flex flex-wrap items-center gap-16 justify-center text-lg md:gap-20 2xl:gap-40 py-10 bg-[#19213D] xl:px-28 2xl:justify-between text-white mt-32 2xl:px-48`}>
            <div className="flex flex-col items-center">
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-[8rem] h-[8rem] 2xl:w-[10rem] 2xl:h-[10rem] mt-10"
                />
            </div>

            <div className="text-xl lg:text-md">
                <div className="flex flex-col gap-7">
                    <h2 className="font-semibold 2xl:text-3xl 2xl:pb-5">SERVICES</h2>
                    <div className="flex flex-col gap-5">
                        <Link href={"/mainservices"}>Main Services</Link>
                        <Link href={"/electronical"}>Electrical System</Link>
                        <Link href={"/networksystem"}>Networking System</Link>
                        <Link href={"/security"}>Security System</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-7 justify-center">
                <h2 className="font-semibold text-center md:text-start 2xl:text-3xl 2xl:pb-5">CONTACT</h2>
                <div className="text-sm md:text-xl lg:text-md">
                    <div className="flex gap-4 items-end pb-7">
                        <IoCall fontSize={25} color="white" />
                        Tel +250 788 781 418
                    </div>

                    <div className="flex gap-4 items-end pb-7">
                        <MdEmail fontSize={25} />
                        enerpowertechsolutionsltd@gmail.com
                    </div>

                    <div>
                        <h1>Follow Us</h1>
                    <div className="flex gap-3 pt-3">
                        <a
                            href="https://www.linkedin.com/company/enerpower-tech-solutions/"
                            target="_blank"
                            >
                            <FaLinkedinIn fontSize={30} color={'white'} />
                        </a>
                        <a
                            href="#"
                        >
                            <FaFacebookF fontSize={30} color={'white'} />
                        </a>
                        <a
                            href="#"
                        >
                            <FaInstagram fontSize={30} color={'white'} />
                        </a>
                        <a
                            href="#"
                        >
                            <LiaTwitterSquare fontSize={30} color={'white'} />
                        </a>
                        <a
                            href="#"
                        >
                            <CgYoutube fontSize={30} color={'white'} />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
