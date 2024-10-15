"use client";
import Image from 'next/image';
import Container from "@/app/component/container";
import Icon from "@/app/component/Icon";
import Icon2 from "@/app/component/Icon2";
import Icon3 from "@/app/component/Icon3";
import Icon4 from "@/app/component/Icon4";

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
    title: "ReEngineer your Business Process",
    description: "Bolster up your team, ensure digital transformations, swiftly gather speed..."
  }
];

const About = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto py-16  sm:px-6 lg:px-8 items-center sm:align-center  w-full">

        {/* Services Section */}
        <div className=" flex items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-6 sm:space-x-6">
              <div className="w-24 h-15 mb-10 rounded bg-yellow-400 flex items-center justify-center">
                <Image src={service.img} alt={service.title} width={80} height={80} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Easy Process Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Easy Process</h2>
          <p className="text-lg mt-4 sm:text-lg mb-16 sm:mb-32 max-w-4xl mx-auto">
            We specialize in helping you build a team of expert developers, testers, and leaders.
          </p>
        </div>

        {/* Process Steps Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center mb-16 sm:mb-32">
          <div className="text-center">
            <Icon className="text-green" />
            <h4 className="text-left font-semibold mt-7"> 01 YOU ASK</h4>
          </div>
          <div className="text-center">
            <Icon2 className="text-green" />
            <h4 className="text-left font-semibold mt-7"> 02 WE PROCEED</h4>
          </div>
          <div className="text-center">
            <Icon3 className="text-green" />
            <h4 className="text-left font-semibold mt-7"> 03 NEGOTIATE</h4>
          </div>
          <div className="text-center">
            <Icon4 className="text-green" />
            <h4 className="text-left font-semibold mt-7"> 04 YOU GET</h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
