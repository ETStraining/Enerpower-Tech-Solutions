import Container from '../component/container';
import Image from 'next/image';

const Mission = () => {
  return (
    <Container>
      <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full ">
       
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Mission</h1>
        <p className="text-base sm:text-lg leading-relaxed text-center mb-10 max-w-4xl mx-auto">
          Our mission is to provide innovative, reliable, and secure technology solutions in surveillance, software development, and networking. 
          We are committed to delivering high-quality services that enhance security, connectivity, and efficiency for businesses and individuals. 
          Through cutting-edge technology and expert support, we empower our clients to achieve their goals.
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">Vision</h1>
        <p className="text-base sm:text-lg leading-relaxed text-center mb-16 sm:mb-32 max-w-4xl mx-auto px-4 sm:px-8">
          Our vision is to become a leading technology provider, setting the benchmark for excellence in surveillance, software development, 
          electrical, and networking solutions. We aspire to create a safer, more connected world by continuously pushing the boundaries of 
          technology and delivering solutions that drive growth, security, and innovation.
        </p>

        <div className="flex flex-col items-center mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-center tracking-wider">
            ETS Services & Solutions
          </h1>
          <p className="text-base sm:text-lg text-center mx-auto mb-8 max-w-2xl px-4 sm:px-16">
            We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mt-10">
  <div className="md:w-1/2 px-4 sm:px-8 md:px-12 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl font-bold mb-3 mt-[-30px]">Main Services</h1>
    <ul className="list-disc pl-5 mt-5">
      <li>Supply of materials, equipment, and tools</li>
      <li>Design and Installation services</li>
      <li>Scheduled Preventive Maintenance and repair services</li>
    </ul>
  </div>
  <div className="flex-1 mt-10 md:mt-0 flex flex-wrap justify-center gap-4">
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/airflow.jpg" 
        alt="Airflow Image"  
        width={300} 
        height={200} 
        className="mx-auto"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/cctv.jpg" 
        alt="CCTV Image"  
        width={300} 
        height={300} 
        className="mx-auto"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/computer.jpg" 
        alt="Computer Image"  
        width={300} 
        height={300} 
        className="mx-auto"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/networkcable.jpg" 
        alt="Network Cable Image"  
        width={300} 
        height={300} 
        className="mx-auto"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/router.jpg" 
        alt="Router Image"  
        width={300} 
        height={300} 
        className="mx-auto"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/switch.jpg" 
        alt="Switch Image"  
        width={300} 
        height={300} 
        className="mx-auto"
      />
    </div>
  </div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl mt-10 mb-16">
  <div className="md:w-1/2 px-4 sm:px-8 md:px-12 md:text-left">
  <h1 className="text-3xl sm:text-4xl font-bold mb-5 mt-[-1px]">Electrical System</h1>
  <p>At EnerPower Tech Solutions LTD we specialize in delivering reliable and 
  comprehensive electrical power solutions. Our expertise includes: </p>
  <ul className="list-disc pl-5 mt-5 mb-5">
      <li><span className='font-medium'> Generators:</span> Providing installation and maintenance for various generator 
      systems to ensure uninterrupted power supply. </li>
      <li> <span className='font-medium'>Transformers:</span> Supplying and servicing transformers for safe and efficient 
      energy distribution. </li>
      <li>  <span className='font-medium'>Switchgears:</span> Offering high-quality switchgears to manage electrical power flow 
      and safeguard your systems. </li>
      <li> <span className='font-medium'>Tools and Equipment:</span> Equipping industries with essential tools and equipment 
      for efficient electrical system operation. </li>
      <li> <span className='font-medium'>UPS, Rectifiers, and Batteries:</span> Installing and maintaining uninterruptible power 
      supplies, rectifiers, and batteries for continuous power and system stability. </li>
    </ul>
    <p>With our solutions, we ensure reliable, efficient, and sustainable energy systems for 
    your operations. </p>

  </div>
  <div className='flex-1 mt-auto md:mt-0 text-center py-32 '>
  <Image 
                src="/electrical.png" 
                alt="Distribution Image"  
                width={500} 
                height={2000} 
                className="mx-auto h-full"
              />
    
    
  </div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl mt-10 mb-16">
  <div className="md:w-1/2 px-4 sm:px-8 md:px-12 md:text-left">
  <h1 className="text-3xl sm:text-4xl font-bold mb-5 mt-[-1px]">Networking System</h1>
  <h6  className="text-1xl sm:text-2xl font-bold mb-5 mt-[-1px]">Networking and Installation Services </h6>
  <p>At EnerPower Tech Solutions LTD, our Networking and Installation department is 
dedicated to providing cutting-edge technology solutions to meet your business needs. 
Our services include:  </p>
  <ul className="list-disc pl-5 mt-5 mb-5">
      <li><span className='font-medium'> Computers, Laptops, and Desktops: </span>  Supplying, configuring, and installing 
      high-performance computing systems to enhance productivity.  </li>
      <li> <span className='font-medium'>Servers and Equipment: </span> Offering server setup, installation, and maintenance 
      for robust and secure data management.  </li>
      <li>  <span className='font-medium'>Network Switches, Routers, Firewalls, and Access Points: </span>  Designing and 
implementing efficient and secure network infrastructures tailored to your 
organization’s needs. </li>
      <li> <span className='font-medium'>Printers, Copiers, and Scanners:</span>  Installing and supporting multifunctional 
      devices to streamline your office workflow and document management.  </li>
      
    </ul>

    <p>Our comprehensive networking solutions ensure that your business operates smoothly 
    with secure and reliable IT infrastructure.  </p>

  </div>
  <div className="flex-1 mt-10 md:mt-0 flex flex-wrap justify-center gap-4 py-16">
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/pbx.jpg" 
        alt="Airflow Image"  
        width={300} 
        height={600} 
        className="mx-auto object-cover"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/cat6.jpg" 
        alt="CCTV Image"  
        width={300} 
        height={600} 
        className="mx-auto  object-cover"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/camera.png" 
        alt="Computer Image"  
        width={300} 
        height={600} 
        className="mx-auto rounded-full object-cover"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/networkcable.jpg" 
        alt="Network Cable Image"  
        width={300} 
        height={600} 
        className="mx-auto rounded-full object-cover"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/router.jpg" 
        alt="Router Image"  
        width={300} 
        height={600} 
        className="mx-auto rounded-full object-cover"
      />
    </div>
    <div className="w-full md:w-1/3 px-4">
      <Image 
        src="/switch.jpg" 
        alt="Switch Image"  
        width={300} 
        height={600} 
        className="mx-auto rounded-full object-cover"
      />
    </div>
  </div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl mt-10">
  <div className="md:w-1/2 px-4 sm:px-8 md:px-12 md:text-left">
  <h1 className="text-3xl sm:text-4xl font-bold mb-5 mt-[-1px]">Security system (CCTV) </h1>

  <p>At EnerPower Tech Solutions LTD, we provide comprehensive security solutions to 
ensure the safety and protection of your business and assets. Our services in this 
department include:  </p>
  <ul className="list-disc pl-5 mt-5 mb-5">
      <li><span className='font-medium'> Cameras: </span>   Installation of advanced CCTV and surveillance systems to monitor 
      and record activities for enhanced security.  </li>
      <li> <span className='font-medium'>Access Control: </span> Implementing state-of-the-art access control systems to 
      regulate and secure entry points within your premises.   </li>
      <li>  <span className='font-medium'>Fire Alarm Devices:  </span>  Installing reliable fire detection and alarm systems to 
      provide timely alerts and safeguard against fire hazards. </li>
      <li> <span className='font-medium'>Intrusion Devices: </span>   Offering a range of intrusion detection systems to prevent 
      unauthorized access and enhance security measures. </li>
      
    </ul>

    <p>Our security systems are designed to offer peace of mind, providing robust protection 
    and monitoring for your business environment. </p>

  </div>
  <div className='flex-1 mt-auto md:mt-0 text-center py-32 '>
  <Image 
                src="/camera.png" 
                alt="Distribution Image"  
                width={500} 
                height={2000} 
                className="mx-auto h-full"
              />
    
    
  </div>
</div>




          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mt-10">
            <div className="md:w-1/2 px-4 sm:px-8 md:px-12 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-medium">DISTRIBUTION</h1>
              <h1 className="text-2xl sm:text-3xl font-medium mt-2">ANTENNA SYSTEM</h1>
              <p className="font-bold mt-4">Enhanced Reception in Any Building.</p>
              <p className="font-bold">Anywhere</p>
              <button className="mt-6 md:mt-10 border-b-2 border-blue-300 text-blue-400 font-semibold py-2 px-4 rounded-none hover:bg-blue-400 hover:text-white transition">
                Learn More <span className="ml-2">→</span>
              </button>
            </div>

            <div className="flex-1 mt-10 md:mt-0 text-center">
              <Image 
                src="/div.png" 
                alt="Distribution Image"  
                width={300} 
                height={300} 
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
