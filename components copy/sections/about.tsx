

"use client";
import Image from 'next/image';
import Container from "@/components/container";
import Icon from "@/components/icons/Icon";
import Icon2 from "@/components/icons/Icon2";
import Icon3 from "@/components/icons/Icon3";
import Icon4 from "@/components/icons/Icon4";



const services = [
  {
    img: "/cube-1.png",
    title: "Architect your Solution",
    description: "Our team can join your operational, technological, and strategic challenges..."
  },
  {
    img: "/software-application 1.png",
    title: "Engineer your Solution",
    description: "We promptly put together your research engineering dream team..."
  },
  {
    img: "/technical-support 1.png",
    title: "ReEngineer your Business Process ",
    description: "Bolster up your team, ensure digital transformations, swiftly gather speed..."
  }
]

const About = () => {
  return (
    <div>

      <Container>
        <div className="flex items-center justify-center gap-8 mt-6 flex-col md:flex-row">
          {
            services.map((service, index) => (
              <div key={index} className="flex items-center flex-col justify-center xl:w-[23vw] xl:h-[35vh] border-2 border-[#353E5D] rounded-3xl py-4 xl:py-0">
                <div className="w-24 h-15 rounded bg-blue-400 mb-3">
                  <Image src={service.img} alt="Engineer your Solution" width={80} height={80} />
                </div>
                <div className="flex justify-center flex-col items-center">
                  <h3 className="text-xl font-bold text-[#19213D] text-center">{service.title}</h3>
                  <p className="mt-2 text-lg relative text-center px-8 text-[#19213D]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </Container>

      <div className='mt-20 relative flex justify-center'>
        <Image
          src={"/proceed.png"}
          alt='proceed'
          width={400}
          height={400}
          className='w-full h-[50vh] absolute'
        />
        <div className="bg-blue-600 opacity-70 md:w-72 px-10 py-5 h-[50vh] rounded-lg text-white">
          <h1 className='uppercase py-1 border-b-4 border-indigo-400'>Why choose us</h1>
          <div className="mt-4">
            <h1 className='text-3xl font-semibold'>01 </h1>
            <h4 className="text-left text-lg"> YOU ASK</h4>
          </div>
          <div className='mt-4'>
            <h1 className='text-3xl font-semibold'> 02</h1>
            <h4 className="text-left text-lg">WE PROCEED</h4>
          </div>
          <div className="mt-4">
            <h1 className='text-3xl font-semibold'>03</h1>
            <h4 className="text-left text-lg">NEGOTIATE</h4>
          </div>
          <div className="mt-4">
            <h1 className='text-3xl font-semibold'>04</h1>
            <h4 className="text-left text-lg"> YOU GET</h4>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;