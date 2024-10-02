import CardDemo from "@/components/blocks/cards-demo-1";
import Cadr from "@/components/cards/Cadr";
import { Cards } from "@/components/cards/Cards";
import Footer from "@/components/footer/Footer";
import { Parallax } from "@/components/pralax/Paralax";
import { Slider } from "@/components/slider/Slider";
import Lamp from "@/components/ui/lamp";
import { TbWorldWww } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import BlueCard from "@/components/cards/BlueCard";
import { VisionSection } from "@/components/ourvision/VisionSection";


export default function Home() {
  return (
    <>
     <Slider />
    <h2 className="text-[#00fefb] text-center mx-auto text-4xl font-bold p-4 mt-4">Zenith Digit</h2>
    <p className="text-white w-5/6 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas corrupti ullam modi temporibus distinctio, eius dolores voluptatum? Quisquam quae, eligendi debitis tenetur maxime nihil iure repellendus recusandae harum facilis? Incidunt.</p>
    {/* <Cards /> */}
    <div className="border-b-4 border-[#00fefb] pb-20">
    <div className="mt-20 w-5/6 mx-auto lg:flex justify-between">
    <BlueCard titre={"Développement web"} icon={<TbWorldWww/>} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas"} />
    <BlueCard titre={"Développement mobile"} icon={<FaMobileScreenButton/>} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas"} />
    <BlueCard titre={"web design"} icon={<MdOutlineDesignServices/>} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas"} />
    </div>
    <div className="mt-20 w-5/6 mx-auto lg:flex justify-between ">
    <BlueCard titre={"infographie"} icon={<SiAdobephotoshop/>} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas"} />
    <BlueCard titre={"bureautique"} icon={<IoIosDocument/>} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas"} />
    <BlueCard titre={"social propulcer"} icon={<IoShareSocialSharp/>} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim rem omnis sequi, quibusdam ducimus sunt quae quas"} />
    </div>
    </div>

    <VisionSection />







    <Parallax />


    <Footer />
    </>
  );
}
