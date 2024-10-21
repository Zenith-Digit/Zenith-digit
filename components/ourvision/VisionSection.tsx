import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import logo from '@/components/navbar/logo.png'
import Image from "next/image";
export function VisionSection() {
  return (
    <BackgroundBeamsWithCollision className="border-b-4 border-[#00fefb]">
        <div className="lg:flex max-w-5xl mx-auto px-8">
        <div className="lg:w-1/2">
      <h2 className="text-[#00fefb] text-4xl font-bold m-8">Notre vision</h2>
      <p className="text-white w-5/6 mx-auto py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque, impedit, blanditiis est reiciendis reprehenderit aliquam voluptas ullam, unde minima aperiam iusto debitis exercitationem esse ea distinctio? Dicta, soluta non! Sed, voluptates veritatis dolor minima magni nemo velit, laboriosam repudiandae obcaecati itaque aliquid voluptatem, cupiditate deleniti! Aspernatur, qui facilis sequi praesentium repellat consectetur dolore, ipsum in quod, fuga architecto distinctio!</p>
      </div>
      <div className="lg:w-1/2">
        <Image src={logo} alt={"img"} className="w-4/6 lg:w-5/6 mx-auto rounded-xl h-72 lg:h-[400px] mt-2 lg:mt-20"/>
      </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
