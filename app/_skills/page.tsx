import React from "react";
import javascript from "@/public/static/images/javascript.png";
import python from "@/public/static/images/python.png";
import react from "@/public/static/images/react1.png";
import redux from "@/public/static/images/redux.png";
import sql from "@/public/static/images/sql.png";
import html from "@/public/static/images/html.png";
import mongodb from "@/public/static/images/mongodb.png";
import typescript from "@/public/static/images/typescript.png";
import reactquery from "@/public/static/images/reactquery.png";
import nextjs from "@/public/static/images/nextjs-icon-svgrepo-com.png";
import css from "@/public/static/images/css.png";
import node from "@/public/static/images/node.png";
import docker from "@/public/static/images/docker1.png";
import redis from "@/public/static/images/redis.png";
import api from "@/public/static/images/api.png";
import git from "@/public/static/images/git.png";
import express from "@/public/static/images/express.png";
import aws from "@/public/static/images/aws.png";
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
      <h1
        id="skills"
        className="text-center font-medium text-xl md:font-semibold md:text-2xl"
      >
        Skills & Experience
      </h1>

      <div className="md:flex md:flex-col-2 md:p-10 md:justify-center">
        {/* Skills */}
        <div>
          <div className="grid grid-cols-4 p-10 md:grid md:grid-cols-4 md:px-0  gap-5">
            {skillsArray.map((skill, index) => (
              <>
                <div>
                  <div key={index} className={` md:p-3 p-2 `}>
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
