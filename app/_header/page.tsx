"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const Header = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0  backdrop-blur-xl  ${
        isOpen && "bg-white bg-opacity-100"
      } py-1 md:p-0`}
    >
      <nav
        className={`md:border-b md:border-b-transparent backdrop-blur-xl md:mb-5 md:px-5 md:py-3`}
      >
        <div className="md:flex md:flex-nowrap md:justify-center ">
          <div
            style={{ width: 350 }}
            className="flex justify-between bg-transparent mx-5 my-3 md:m-0 items-center"
          >
            {/* Logo */}
            {!isOpen ? (
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Soni Nirav"
                  width={30}
                  height={30}
                />
              </Link>
            ) : (
              <p></p>
            )}

            <Button
              className="block md:hidden justify-end bg-transparant focus:outline-none focus:bg-transparent"
              onClick={() => setIsOpen((prevVal) => !prevVal)}
            >
              {!isOpen ? (
                <HiMenuAlt4 size={30} color="black" className="bg-none" />
              ) : (
                <RiCloseFill size={30} color="black" className="bg-none" />
              )}
            </Button>
          </div>

          {/* <hr></hr> */}
          {/* NavLinks  */}
          <div className="hidden md:flex md:gap-5">
            {navLinks.map((currentLink, index) => (
              <Link
                href={currentLink.href}
                key={index}
                className="font-medium text-base text-[#656e7a] hover:text-[#4f46e5]"
              >
                {currentLink.label}
              </Link>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="absolute bg-white w-full h-screen">
            <div className="flex flex-col text-md m-10">
              {navLinks.map((currentLink, index) => (
                <Link
                  href={currentLink.href}
                  key={index}
                  className="my-2 text-2xl opacity-80 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {currentLink.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
