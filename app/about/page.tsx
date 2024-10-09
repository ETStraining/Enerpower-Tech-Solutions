"use client";
import Image from 'next/image';
import Icon from "@/app/component/Icon";
const About = () => {
  return (
    <div className=" py-16">
      
      <div className="max-w-4xl mx-auto space-y-8 flex ">
        
        <div className="flex items-center space-x-6">
          
          <div className="w-24 h-15 rounded bg-yellow-400 flex items-center justify-center mb-20">
            <Image src="/cube-1.png" alt="Architect your Solution" width={80} height={80}  />
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-bold">Architect your <p>Solution</p></h3>
            <p className="mt-2 ">
              Our team can join your operational, technological, and strategic challenges...
            </p>
          </div>
        </div>

        
        <div className="flex items-center space-x-6">
          <div className="w-24 h-15 rounded bg-yellow-400 flex items-center justify-center mb-20">
            <Image src="/software-application 1.png" alt="Engineer your Solution" width={80} height={80} />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">Engineer your Solution</h3>
            <p className="mt-2 ">
              We promptly put together your research engineering dream team...
            </p>
          </div>
        </div>

        
        <div className="flex items-center space-x-6">
          <div className="w-24 h-15 rounded bg-yellow-400 flex items-center justify-center  mb-20">
            <Image src="/technical-support 1.png" alt="ReEngineer your Business Process" width={80} height={80} />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">ReEngineer your Business Process </h3>
            <p className="mt-2 ">
              Bolster up your team, ensure digital transformations, 
              swiftly gather speed...
            </p>
          </div>
        </div>
      </div>

      
      
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold">Easy Process</h2>
        <p className="text-center  mt-4">
          We specialize in helping you build a team of expert developers, testers, and leaders.
        </p>
      </div>

      
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        <div className="text-center">
          <Icon className= 'text-red-600'/>
          <h4 className="text-left font-semibold mt-7"> 01 YOU ASK</h4>
        </div>
        <div className="text-center">
          <Image src="/Group (1).png" alt="We Proceed" width={80} height={80} />
          <h4 className="text-left font-semibold mt-7"> 02 WE PROCEED</h4>
        </div>
        <div className="text-center">
          <Image src="/handshake 4.png" alt="Negotiate" width={80} height={80} />
          <h4 className="text-left font-semibold mt-7"> 03 NEGOTIATE</h4>
        </div>
        <div className="text-center ">
          <Image src="/medal 4.png" alt="You Get" width={80} height={80} />
          <h4 className="text-left font-semibold mt-7"> 04 YOU GET</h4>
     
        </div>
      </div>
    </div>
  );
};

export default About;
