import Image from "next/image";
import React from "react";
import Aboot from "@/public/static/images/about04.png";
import { Button } from "@/components/ui/button";
import {
  Bug,
  ClipboardList,
  Gavel,
  Hotel,
  MessageSquareText,
  Notebook,
  Popcorn,
} from "lucide-react";

const projectsArray = [
  {
    projectName: "Issue Tracker",
    description:
      "Efficient issue tracker web app with create, edit, delete, status tracking, filtering, pagination, Google authentication, built with Radix UI, Next.js, Prisma, and MySQL.",
    icon: <Bug size={70} className="p-3 my-auto" />,
    data: [],
  },
  {
    projectName: "The Wild Oasis",
    description:
      "A Hotel Management System using React, React Query with Supabase for backend. Key features include room management, bookings, check-in/check-out, and an intuitive Dashboards.",
    icon: <Hotel size={70} className="p-3 my-auto" />,
    data: [],
  },
  // {
  //   projectName: "UsePopCorn",
  //   description: "the ultimate issue tracker",
  //   icon: <Popcorn size={70} className="p-3 my-auto" />,
  //   data: [],
  // },
  {
    projectName: "Auction App",
    description:
      "Built an auction web app with Django, offering intuitive CRUD operations, strict bidding validation, dynamic commenting, and watchlist functionality.",
    icon: <Gavel size={70} className="p-3 my-auto" />,
    data: [],
  },
  {
    projectName: "QnA App",
    description:
      "Developed a Q&A web app fostering engaging discussions with features like asking questions, commenting on answers, trending questions exploration, and sign-in/sign-up functionalities",
    icon: <MessageSquareText size={70} className="p-3 my-auto" />,
    data: [],
  },
  {
    projectName: "Quiz App",
    description:
      "A React web app with Redux for quiz functionality, featuring constant score updates, correct answer highlighting, and a highest score feature.",
    icon: <ClipboardList size={70} className="p-3 my-auto" />,
    data: [],
  },
  {
    projectName: "Notes App",
    description:
      "An all-in-one notes application featuring CRUD operations, bookmarking, archiving, labeling, user authentication (signup/login), and built using Django.",
    icon: <Notebook size={70} className="p-3 my-auto" />,
    data: [],
  },
];

const Project = () => {
  return (
    <>
      <h1 className="text-center p-10 font-medium text-xl md:font-semibold md:text-2xl">
        Personal Projects
      </h1>
      <div id="projects" className="scroll-m-16">
        <div className="flex flex-wrap justify-center py-10 bg-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsArray.map((project, ind) => (
              <div
                key={ind}
                className="flex bg-white shadow-2xl gap-3 p-3 w-fit rounded-lg hover:bg-sky-100 hover:cursor-pointer"
              >
                {project.icon}
                {/* <Bug size={40} className="p-1" /> */}
                {/* <Image
                  className="rounded-md"
                  src={Aboot}
                  alt="Bug"
                  width={50}
                  height={50}
                /> */}
                <div>
                  <h1 className="font-bold text-base ">
                    {project.projectName}
                  </h1>
                  <h1 className="text-xs w-44 text-[#656e7a]">
                    {project.description}
                  </h1>
                </div>
                <div>
                  <Button variant={"ghost"} className="text-[#4f46e5] my-10">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
