import styles from '../styles/mission.module.css'
import Image from 'next/image';
const Mission = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}> Mission</h1>
        <p className={styles.description}>
          Our mission is to provide innovative, reliable, and secure technology solutions in surveillance, software development, and networking.
          We are committed to delivering high-quality services that enhance security, connectivity, and efficiency for businesses and individuals.Through cutting-edge technology and expert support, we empower our clients to achieve their goals.
        </p>
        <h1 className={styles.title}> Vision</h1>
        <p className={styles.description}>
          Our vision is to become a leading technology provider, setting the benchmark for excellence in surveillance, software development,
          electrical, and networking solutions. We aspire to create a safer, more connected world by continuously pushing the boundaries of
          technology and delivering solutions that drive growth, security, and innovation.
        </p>
        <div>
            <h1 className={styles.titles}>ETS Services Services & Solutions</h1>
            <p className={styles.descriptions}>We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.</p>
            <div className={styles.servicescontainer}>
              <div>
               <h1 className={styles.servicetitle}>DISTRIBUTION  </h1>
               <h1 className={styles.servicetitle}>ANTENNA SYSTEM</h1>
               <p className={styles.servicepp}>Enhanced Reception in Any Building .</p>
               <p  className={styles.p}> Anywhere</p>
              </div>
              <div>
              <Image
   src="/div.png" alt="My Image"  width={200} height={200} />

              </div>
                
            </div>
        </div>
      </div>
    );
  };
  
  export default Mission;