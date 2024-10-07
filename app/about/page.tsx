"use client";
import Image from 'next/image';
import { useTheme } from '../component/themeContent'; // Ensure the path is correct

const About = () => {
  const { isDarkMode } = useTheme(); 

  return (
    <div className={`py-16 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col md:flex-row">

        {/* First Section */}
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded bg-yellow-400 flex items-center justify-center">
            <Image src="/cube-1.png" alt="Architect your Solution" width={80} height={80} />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">Architect your Solution</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Our team can join your operational, technological, and strategic challenges...
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded bg-yellow-400 flex items-center justify-center">
            <Image src="/software-application 1.png" alt="Engineer your Solution" width={80} height={80} />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">Engineer your Solution</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              We promptly put together your research engineering dream team...
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded bg-yellow-400 flex items-center justify-center">
            <Image src="/technical-support 1.png" alt="ReEngineer your Business Process" width={80} height={80} />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">ReEngineer your Business Process</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Bolster up your team, ensure digital transformations, swiftly gather speed...
            </p>
          </div>
        </div>
      </div>

      {/* Easy Process Section */}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold">Easy Process</h2>
        <p className={`text-center mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          We specialize in helping you build a team of expert developers, testers, and leaders.
        </p>
      </div>

      {/* Process Steps */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        <div className="text-center">
          <Image src="/Group.png" alt="You Ask" width={80} height={80} />
          <h4 className="text-lg font-semibold mt-4"> 1 YOU ASK</h4>
        </div>
        <div className="text-center">
          <Image src="/Group (1).png" alt="We Proceed" width={80} height={80} />
          <h4 className="text-lg font-semibold mt-4"> 2 WE PROCEED</h4>
        </div>
        <div className="text-center">
          <Image src="/handshake 4.png" alt="Negotiate" width={80} height={80} />
          <h4 className="text-lg font-semibold mt-4"> 3 NEGOTIATE</h4>
        </div>
        <div className="text-center">
          <Image src="/medal 4.png" alt="You Get" width={80} height={80} />
          <h4 className="text-lg font-semibold mt-4"> 4 YOU GET</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
