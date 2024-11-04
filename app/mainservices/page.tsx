import Image from 'next/image';
import Footer from '@/components/footer';

const Mainsystem = () => {
  return (
    <>
      <div className='px-4 lg:px-16 '>
        <div className='py-32 ml-20'>
          <h1 className="font-bold text-blue-800 text-4xl border-b-2 border-slate-200 pb-5 w-72  ">
            MAIN SYSTEM
          </h1>


          <p className='text-slate-600 mt-4'>
            We specialize in supplying materials, equipment, and tools, along
          </p>
          <p className='text-slate-600'>
            with expert installation and preventive maintenance services,
          </p>
          <p className='text-slate-600'>
            ensuring efficient and reliable support for all client needs.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-16'>
          <div className="mb-4 p-4  w-full h-full">
            <Image
              src="/camera.png"
              alt="Main System Equipment"
              layout="responsive"
              width={1200}
              height={1200}
              className="w-full h-auto"
            />
            <h1 className='font-bold text-blue-900 mt-5 text-center '> SUPPLY OF MATERIALS,</h1>
            <h1 className='font-bold text-blue-900 text-center mb-5'>EQUIPMENT, AND TOOLS</h1>
            <p className='text-slate-600'>Ensures the consistent availability of high-quality materials and equipment necessary for operational efficiency, with a streamlined process for sourcing and supplying required items.</p>
          </div>

          <div className="mb-4  p-4 w-full h-full">
            <Image
              src="/installation.png"
              alt="Installation Services"
              layout="responsive"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <h1 className='font-bold text-blue-900 mt-5 text-center mb-2'> INSTALLATION SERVICES </h1>
            <p className='text-slate-600'>Offers professional installation of various systems and equipment, ensuring that all installations meet industry standards and function reliably from day one. Our skilled technicians ensure a safe, efficient setup tailored to each client's needs.</p>
          </div>

          <div className="mb-4  p-4  w-full h-full">
            <Image
              src="/maint.png"
              alt="Preventive Maintenance and Repair Services"
              layout="responsive"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <h1 className='font-bold text-blue-900 mt-5 '> PREVENTIVE MAINTENANCE AND </h1>
            <h1 className='font-bold text-blue-900 mb-2'>  REPAIR SERVICES</h1>
            <p className='text-slate-600'>Conducts routine maintenance and timely repairs to prevent breakdowns, extending the lifespan of assets and minimizing downtime through proactive service schedules.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Mainsystem;
