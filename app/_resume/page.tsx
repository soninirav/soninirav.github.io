"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const Resume = () => {
  const resumeURL =
    "https://drive.google.com/file/d/14drwl2rnkJYT7v_BYBkpiNgB9aF0mzRe/view?usp=sharing";
  return (
    <>
      <h1
        id="resume"
        className="text-center scroll-m-14 pt-10 font-medium text-xl md:font-semibold md:text-2xl"
      >
        Resume
      </h1>
      <div className="flex flex-col-1 justify-center pt-5 pb-16 md:py-5 md:pb-16">
        <Button
          variant="outline"
          className="bg-[#4f46e5] shadow-2xl text-white hover:bg-blue-900 hover:text-white"
          onClick={() => open(resumeURL)}
        >
          <Eye className="mr-2 h-4 w-4" />
          See My Resume
        </Button>
      </div>
    </>
  );
};

export default Resume;
