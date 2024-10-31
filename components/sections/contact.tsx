"use client";

import Container from "../container";
import Image from "next/image";

export default function Contact() {
    return (

        <Container>
            <div className="flex gap-20 justify-center">
                <Image
                    src="/map.png"
                    alt="map"
                    width={400}
                    height={400}
                    className="h-[55vh]"
                />
                <div className="border">
                    <div>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" placeholder="Your name..." />
                        </div>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" placeholder="Your name..." />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" placeholder="Your name..." />
                        </div>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" placeholder="Your name..." />
                        </div>
                    </div>
                    <textarea>
                        message
                    </textarea>

                    <button>GET STARTED</button>

                </div>
            </div>
        </Container>
    )
}