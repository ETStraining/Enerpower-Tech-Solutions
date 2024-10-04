import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-black text-white py-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <div className="mb-4 bg-yellow-400 p-3 w-24 h-24 mx-auto rounded flex items-center justify-center">
            <Image src="/cube-1.png" alt="Architect your Solution" width={80} height={80} />
          </div>
          <h3 className="text-xl font-bold mt-4">Architect your Solution</h3>
          <p className="mt-2 text-gray-400">
            Our team can join your operational, technological, and strategic challenges...
          </p>
        </div>
        <div>
          <div className="mb-4 bg-yellow-400 p-3 w-24 h-24 mx-auto rounded flex items-center justify-center">
            <Image src="/software-application 1.png" alt="Engineer your Solution" width={80} height={80} />
          </div>
          <h3 className="text-xl font-bold mt-4">Engineer your Solution</h3>
          <p className="mt-2 text-gray-400">
            We promptly put together your research engineering dream team...
          </p>
        </div>
        <div>
          <div className="mb-4 bg-yellow-400 p-3 w-24 h-24 mx-auto rounded flex items-center justify-center">
            <Image src="/technical-support 1.png" alt="ReEngineer your Business Process" width={80} height={80} />
          </div>
          <h3 className="text-xl font-bold mt-4">ReEngineer your Business Process</h3>
          <p className="mt-2 text-gray-400">
            Bolster up your team, ensure digital transformations, swiftly gather speed...
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold">Easy Process</h2>
        <p className="text-center text-gray-400 mt-4">
          We specialize in helping you build a team of expert developers, testers, and leaders.
        </p>
      </div>

      {/* Process Section */}
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
