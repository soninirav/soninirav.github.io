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
    { label: "Home", href: "/" },
    { label: "Experience", href: "/" },
    { label: "Skills", href: "/" },
    { label: "Projects", href: "/" },
    { label: "Resume", href: "/" },
    { label: "Contact", href: "/" },
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
        <div className="md:flex md:flex-wrap md:justify-between ">
          <div className="flex justify-between mx-5 my-3 md:m-0 items-center">
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
              className="block md:hidden bg-transparant focus:outline-none focus:bg-transparent"
              onClick={() => setIsOpen((prevVal) => !prevVal)}
            >
              {!isOpen ? (
                <HiMenuAlt4 size={30} color="black" />
              ) : (
                <RiCloseFill size={30} color="black" />
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
                className="font-normal text-base opacity-65 hover:text-blue-500 hover:opacity-100 hover:font-semibold"
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
