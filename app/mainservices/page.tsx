import Image from 'next/image';
import Footer from '@/components/footer';

const Mainsystem = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="py-12 md:py-20 md:ml-0 lg:ml-20">
          <h1 className="text-blue-600 text-xl md:text-2xl pt-4 md:pt-8 font-bold mb-4 animate__animated animate__fadeIn">
            MAIN SYSTEM
          </h1>

          <p className="text-slate-600 mt-4 text-sm md:text-base animate__animated animate__fadeIn animate__delay-1s">
            We specialize in supplying materials, equipment, and tools, along
          </p>
          <p className="text-slate-600 text-sm md:text-base animate__animated animate__fadeIn animate__delay-1.5s">
            with expert installation and preventive maintenance services,
          </p>
          <p className="text-slate-600 text-sm md:text-base animate__animated animate__fadeIn animate__delay-2s">
            ensuring efficient and reliable support for all client needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ml-10 md:px-8">
          <div className="mb-6 shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-2.5s">
            <Image
              src="/camera.png"
              alt="Main System Equipment"
              layout="responsive"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h1 className="font-bold text-slate-600 mt-3 text-center">
                SUPPLY OF MATERIALS,
              </h1>
              <h1 className="font-bold text-slate-600 text-center mb-3">
                EQUIPMENT, AND TOOLS
              </h1>
              <p className="text-slate-600 text-sm md:text-base">
                Ensures the consistent availability of high-quality materials and equipment necessary for operational efficiency, with a streamlined process for sourcing and supplying required items.
              </p>
            </div>
          </div>

          <div className="mb-6 shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
            <Image
              src="/installation.png"
              alt="Installation Services"
              layout="responsive"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h1 className="font-bold text-slate-600 mt-3 text-center">
                INSTALLATION SERVICES
              </h1>
              <p className="text-slate-600 text-sm md:text-base">
                Offers professional installation of various systems and equipment, ensuring that all installations meet industry standards and function reliably from day one.
              </p>
            </div>
          </div>

          <div className="mb-6 shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-3.5s">
            <Image
              src="/maint.png"
              alt="Preventive Maintenance and Repair Services"
              layout="responsive"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h1 className="font-bold text-slate-600 mt-3 text-center">
                PREVENTIVE MAINTENANCE AND
              </h1>
              <h1 className="font-bold text-slate-600 text-center mb-3">
                REPAIR SERVICES
              </h1>
              <p className="text-slate-600 text-sm md:text-base">
                Conducts routine maintenance and timely repairs to prevent breakdowns, extending the lifespan of assets and minimizing downtime through proactive service schedules.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Mainsystem;
