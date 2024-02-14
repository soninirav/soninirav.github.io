import Image from "next/image";
import React from "react";
import Profile from "@/public/static/images/profile.png";

const Home = () => {
  return (
    <div className="flex px-10 py-10 justify-center flex-wrap-reverse md:flex-cols-2 md:justify-center md:px-0 md:py-24">
      <div className="" style={{ width: 500, height: 400 }}>
        <h1 className="text-2xl font-bold md:text-4xl md:font-bold">
          👋 Hey,{" "}
        </h1>
        <h1 className="text-2xl font-bold md:text-4xl md:font-bold md:py-3">
          I&apos;m Soni Nirav
        </h1>
        <h1 className="text-2xl font-bold md:text-4xl md:font-bold text-[#4f46e5]">
          Full Stack Developer
        </h1>
        <h3 className="py-2 md:text-lg text-[#656e7a] md:py-4">
          Welcome to my portfolio! With over three years of experience as a
          full-stack web developer, I specialize in creating captivating and
          user-friendly web applications. Equipped with expertise in both
          front-end and back-end technologies, I excel in crafting dynamic and
          responsive solutions.
          <p className="py-2 md:py-2">
            Let&apos;s collaborate and transform your vision into reality!
          </p>
        </h3>
      </div>
      <div className="pb-10 md:py-0 m-auto md:m-0">
        <Image src={Profile} width={300} height={500} alt="Soni Nirav" />
      </div>
    </div>
  );
};

export default Home;
