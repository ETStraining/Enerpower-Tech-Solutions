import Footer from "@/components/footer";
import Image from "next/image";
import Container from "@/components/container";

const Contact = () => {
    return (
        <Container>
            <div className="relative">
               
                <Image
                    src="/contact.png"
                    alt="contact us"
                    layout="responsive"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                />
                
              
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
                    <h1 className="text-blue-300 font-bold mb-2 lg:mb-4 text-xl sm:text-2xl lg:text-4xl leading-tight lg:leading-snug">
                        CONTACT US
                    </h1>
                    <p className="text-base sm:text-lg lg:text-3xl leading-snug lg:leading-normal">
                        We specialize in helping you build a team of expert
                    </p>
                    <p className="text-base sm:text-lg lg:text-3xl leading-snug lg:leading-normal">
                        developers.
                    </p>
                </div>
            </div>

            <div className=" py-8 sm:py-16 px-4 sm:px-8 w-full flex items-center justify-center">
                <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center gap-10">
                    
                  
                    <div className="flex-1 w-full">
                        <Image
                            src="/map1.png"
                            alt="location"
                            layout="responsive"
                            width={300}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                     
                    <div className="flex-1 w-full bg-blue-500 bg-opacity-50 text-white p-6 rounded-lg rounded-tl-[50px] shadow-lg lg:-ml-32 mt-8 lg:mt-0">
                        <h1 className="text-3xl sm:text-2xl font-bold  ">Connect With Us </h1>
                        <h1 className="text-3xl sm:text-2xl font-bold mb-5  ">Today!</h1>
                        
                     
                        <form className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4 ">

                            
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Company</label>
                                <input
                                    type="text"
                                    placeholder="Your company"
                                    className="p-2 w-full rounded-md outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    placeholder=" Enter Your Name"
                                    className="p-2 w-full  rounded-md outline-none mb-2"
                                />
                                
                            </div>
                            
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 ">
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="p-2 w-full  rounded-md outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-2 w-full  rounded-md outline-none"
                                />
                            </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                            name="message"
                            className="p-3 h-20 md:w-[32rem] 2xl:w-[32rem] lg:w-full  rounded-md border-[#444f80] shadow-lg text-[#19213d] outline-none">

                        </textarea>
                            </div>
                            <div className="flex  gap-1">
                                <input type="checkbox" className="form-checkbox text-blue-500 " />
                                <p className="text-sm">
                                    By submitting this form, I confirm that I have read and accept the 
                                </p>
                            </div>
                            <div>
                            <p className="text-sm  ml-4 font-bold">Privacy Policy</p></div>
                            <button className="w-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-yellow-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 transition">
                               SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            

            <Footer />
        </ Container>
    );
};

export default Contact;
