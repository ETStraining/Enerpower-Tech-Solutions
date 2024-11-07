// pages/index.js
import Boarding from "@/components/sections/boarding";
import About from "@/components/sections/about";
import Mission from "@/components/sections/mission";


export default function Home() {
  return (
    <div>
      <Boarding />
      <Mission />
      <About />
     
    </div>
  );
}
