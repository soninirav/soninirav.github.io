import React from "react";
import javascript from "../../public/assets/skills/javascript.png";
import python from "../../public/assets/skills/python.png";
import react from "../../public/assets/skills/react1.png";
import redux from "../../public/assets/skills/redux.png";
import sql from "../../public/assets/skills/sql.png";
import html from "../../public/assets/skills/html.png";
import mongodb from "../../public/assets/skills/mongodb.png";
import typescript from "../../public/assets/skills/typescript.png";
import reactquery from "../../public/assets/skills/reactquery.png";
import nextjs from "../../public/assets/skills/nextjs-icon-svgrepo-com.png";
import css from "../../public/assets/skills/css.png";
import node from "../../public/assets/skills/node.png";
import docker from "../../public/assets/skills/docker1.png";
import redis from "../../public/assets/skills/redis.png";
import api from "../../public/assets/skills/api.png";
import git from "../../public/assets/skills/git.png";
import express from "../../public/assets/skills/express.png";
import aws from "../../public/assets/skills/aws.png";
// import figma from "../../public/assets/skills/figma.png";
import Image from "next/image";
import Timeline from "./Timeline";

const skillsArray = [
  { image: javascript, skillName: "Javascript", color: "bg-purple-100" },
  { image: aws, skillName: "AWS", color: "bg-orange-100" },
  { image: python, skillName: "Python", color: "bg-cyan-100" },
  { image: sql, skillName: "SQL", color: "bg-sky-100" },
  { image: nextjs, skillName: "Next JS", color: "bg-emerald-100" },
  { image: docker, skillName: "Docker", color: "bg-amber-100" },
  { image: node, skillName: "Node JS", color: "bg-indigo-100" },
  { image: mongodb, skillName: "MongoDB", color: "bg-rose-100" },
  { image: api, skillName: "APIs", color: "bg-sky-100" },
  { image: redux, skillName: "Redux", color: "bg-purple-100" },
  { image: express, skillName: "Express", color: "bg-amber-100" },
  { image: redis, skillName: "Redis", color: "bg-emerald-100" },
  { image: typescript, skillName: "Typescript", color: "bg-sky-100" },
  { image: html, skillName: "HTML5", color: "bg-indigo-100" },
  { image: css, skillName: "CSS3", color: "bg-emerald-100" },
  { image: git, skillName: "Git", color: "bg-indigo-100" },
  { image: react, skillName: "React", color: "bg-rose-100" },
  { image: reactquery, skillName: "React Query", color: "bg-indigo-100" },
  //   { image: figma, skillName: "Figma", color: "bg-sky-100" },
];

const Skills = () => {
  return (
    <>
      <h1 className="text-center container font-bold text-3xl">
        Skills & Experience
      </h1>

      <div className="md:flex md:flex-col-2 md:p-10 md:justify-center">
        {/* Skills */}
        <div>
          <div className="grid grid-cols-4 p-10 md:grid md:grid-cols-4 md:px-0  gap-5">
            {skillsArray.map((skill, index) => (
              <>
                <div>
                  <div key={index} className={` md:p-3 p-4 `}>
                    <Image
                      className="m-auto"
                      src={skill.image}
                      width={50}
                      height={50}
                      alt="javascript"
                    />
                  </div>
                  <span className="text-sm py-1 text-center flex justify-center">
                    {skill.skillName}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div>
          <div className="py-7 md:py-7 md:px-7 ">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
