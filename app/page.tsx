import { BlueCard } from "@/components/cards/BlueCard";
import { Parallax } from "@/components/pralax/Paralax";
import { Slider } from "@/components/slider/Slider";
import { VisionSection } from "@/components/ourvision/VisionSection";
import QuiSommesNous from "@/components/apropos/QuiSommesNous";


export default function Home() {
  return (
    <>
     <Slider />
    <h2 className="text-[#00fefb] text-center mx-auto text-4xl font-bold p-4 mt-4">Zenith Digit</h2>
    <p className="text-white w-5/6 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas corrupti ullam modi temporibus distinctio, eius dolores voluptatum? Quisquam quae, eligendi debitis tenetur maxime nihil iure repellendus recusandae harum facilis? Incidunt.</p>
    {/* <Cards /> */}
    <div className="border-b-4 border-[#00fefb] pb-20">
    <BlueCard/>
    </div>
    <VisionSection />
    <div className="border-b-4 border-[#00fefb] pb-20">
    <QuiSommesNous />
    </div>
    <Parallax />
    </>
  );
}
