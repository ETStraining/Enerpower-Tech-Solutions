import Image from "next/image"
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { CgYoutube } from "react-icons/cg";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-wrap items-center justify-center text-lg md:gap-20 md:flex-wrap lg:gap-40">
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
                    <br/>elite software developers on <br/>demand
                </p>
                <div className="flex gap-4 items-end pb-7">
                    <IoMdCall fontSize={30}/>
                    <p>+94 713249222</p>
                </div>

                <div className="flex gap-4 items-end pb-7">
                    <MdOutlineEmail fontSize={25}/>
                    <p>hello@courtney.lk</p>
                </div>

                <div className="flex gap-4 items-center pb-7">
                    <IoLocationOutline fontSize={30}/>
                    <p>
                        Courtney Lanka (Private) Limited <br/>
                        Level 35 <br/>World Trade Center <br/>Colombo 01
                    </p>
                </div>

                <h3 className="pb-3">FOLLOW US</h3>
                <div className="flex gap-4">
                    <CiLinkedin fontSize={35}/>
                    <CiFacebook fontSize={35}/>
                    <FaInstagram fontSize={35}/>
                    <LiaTwitterSquare fontSize={35}/>
                    <CgYoutube fontSize={35}/>
                </div>
            </div>

            <div className="flex flex-col gap-5 mt-20">
                <h2 className="font-semibold">Company</h2>
                <Link href="/">About us</Link>
                <Link href="/">Success Stories</Link>
                <Link href="/">Privacy policy</Link>
                <Link href="/">Terms & consitions</Link>
                <Link href="/">Contact us</Link>
            </div>

            <div className="flex flex-col gap-5 mt-20">
                <h2 className="font-semibold">Services</h2>
                <p>Hire permanent staff</p>
                <p>Staff Augumentation</p>
                <p>Software outsourcing</p>
                <p>Build remote office</p>
            </div>

            <div className="flex flex-col gap-5 mt-20 ml-16 md:ml-0">
                <h1>How to start</h1>
                <p>You asked</p>
                <p>We proceed</p>
                <p>Negotiate</p>
                <p>You get</p>
            </div>
        </div>
    )
}