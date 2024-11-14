import { BlueCard } from "@/components/cards/BlueCard";
import { Slider } from "@/components/slider/Slider";
import { VisionSection } from "@/components/ourvision/VisionSection";
import Realiser from "@/components/realisation/Realisation";
import LogoCarousel from "@/components/logoSlider/LogoSlider";

export default function Home() {
 
  return (
    <>
     <Slider />
    <h2 className="text-[#00fefb] text-center mx-auto text-4xl font-bold p-4 mt-4">Zenith Digit</h2>
    <p className='w-5/6 mx-auto py-8 text-center text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide'>Chez Zenith Digit, nous mettons tout en œuvre pour propulser les entreprises vers de nouveaux horizons grâce à des solutions digitales innovantes et personnalisées. Que ce soit pour améliorer votre visibilité, optimiser vos processus ou toucher de nouveaux marchés, notre équipe passionnée est à vos côtés à chaque étape.</p>
    {/* <Cards /> */}
    <div className="border-b-4 border-[#00fefb] pb-20">
    <BlueCard/>
    </div>
    <VisionSection />
    <div className="border-b-4 border-[#00fefb]">
     <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Nos Valeurs
     </h2>
     <div className=" md:flex py-4">
      <div>
        <p className="text-4xl font-bold text-center mt-20 md:mt-0">💡</p>
        <h2 className="text-[#00fefb] text-2xl font-bold md:m-8 text-center">Innovation
     </h2>
     <p className='w-5/6 mx-auto py-4 text-center text-xl'>Nous nous engageons à rester à la pointe des tendances et technologies pour offrir des solutions modernes et efficaces.</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-center mt-20 md:mt-0">🌟</p>
        <h2 className="text-[#00fefb] text-2xl font-bold md:m-8 text-center">Excellence
     </h2>
     <p className='w-5/6 mx-auto py-4 text-center text-xl'>Nous visons la qualité dans chaque projet, assurant à nos clients des résultats qui dépassent leurs attentes.</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-center mt-20 md:mt-0">🔎</p>
        <h2 className="text-[#00fefb] text-2xl font-bold md:m-8 text-center">Transparence
     </h2>
     <p className='w-5/6 mx-auto py-4 text-center text-xl'>Nous croyons en une communication honnête et transparente avec nos clients, à chaque étape de la collaboration.</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-center mt-20 md:mt-0">🤝</p>
        <h2 className="text-[#00fefb] text-2xl font-bold md:m-8 text-center">Collaboration
     </h2>
     <p className='w-5/6 mx-auto py-4 text-center text-xl'>Le succès naît de la synergie ; notre équipe travaille en étroite collaboration avec les clients pour comprendre et réaliser leur vision.</p>
      </div>
     </div>
     </div>
    <Realiser />
    <LogoCarousel />
    </>
  );
}
