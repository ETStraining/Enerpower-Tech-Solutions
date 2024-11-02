import Boarding from "@/components/sections/boarding";
import About from "@/components/sections/about";
import Mission from "@/components/sections/mission";
import Footer from "@/components/footer";
import Contact from "@/components/sections/contact";


export default function Home() {
  return (
    <div>
        <Boarding />
        <Mission/>
        <About />
        <Contact/>
        <Footer />
    </div>
  );
}