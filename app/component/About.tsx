export default function About() {
    return (
      <div className="p-8">
        {/* Section 1 - Architect, Engineer, ReEngineer */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-4 bg-yellow-400 p-3 rounded-full">
              {/* Icon */}
              <img src="/cube 1.png" alt="Architect your solution" />
            </div>
            <h3 className="font-bold text-xl">Architect your Solution</h3>
            <p className="text-gray-600">
              Our team focuses on understanding your business challenges through an in-depth analysis, guiding you toward result-oriented goals.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 bg-yellow-400 p-3 rounded-full">
              {/* Icon */}
              <img src="/group.png" alt="Engineer your solution" />
            </div>
            <h3 className="font-bold text-xl">Engineer your Solution</h3>
            <p className="text-gray-600">
              We bring together custom engineering expertise to meet your specific needs, combining top IT talent and industry knowledge.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 bg-yellow-400 p-3 rounded-full">
              {/* Icon */}
              <img src="/handshake 4.png" alt="ReEngineer your Business Process" />
            </div>
            <h3 className="font-bold text-xl">ReEngineer your Business Process</h3>
            <p className="text-gray-600">
              We guide your digital transformation to streamline processes and ensure scalability for future demands.
            </p>
          </div>
        </section>
  
        {/* Section 2 - Easy Process */}
        <section className="mt-16 text-center">
          <h2 className="font-bold text-2xl">Easy Process</h2>
          <p className="text-gray-600 mt-4 mb-8">
            We help you build a team of expert developers, testers, and leaders in a smooth and easy process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/medal 4.png" alt="You Ask" className="mx-auto mb-2" />
              <p className="font-bold">01 YOU ASK</p>
            </div>
            <div>
              <img src="/technical-support 1.png" alt="We Proceed" className="mx-auto mb-2" />
              <p className="font-bold">02 WE PROCEED</p>
            </div>
            <div>
              <img src="/group (1).png" alt="Negotiate" className="mx-auto mb-2" />
              <p className="font-bold">03 NEGOTIATE</p>
            </div>
            <div>
              <img src="/medal 4(1).png" alt="You Get" className="mx-auto mb-2" />
              <p className="font-bold">04 YOU GET</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  