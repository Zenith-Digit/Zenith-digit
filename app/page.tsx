import CardDemo from "@/components/blocks/cards-demo-1";
import { Slider } from "@/components/slider/Slider";
import Lamp from "@/components/ui/lamp";

export default function Home() {
  return (
    <>
     <Slider />
    <h2 className="text-[#00fefb] text-center mx-auto text-4xl font-bold p-4 mt-4">Zenith Digit</h2>
    <p className="text-white w-5/6 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum, vero rerum corrupti ullam atque? Cumque vero similique deleniti mollitia dolores temporibus? Debitis, facere reprehenderit saepe commodi consequuntur officiis voluptatibus!</p>
    {/* <div className="flex-row justify-around w-full m-4">
      <div className="flex justify-around">
      <CardDemo/>
      <CardDemo/>
      <CardDemo/>
      </div>
      <div className="flex justify-around">
      <CardDemo/>
      <CardDemo/>
      <CardDemo/>
      </div>
    </div> */}
    </>
  );
}
