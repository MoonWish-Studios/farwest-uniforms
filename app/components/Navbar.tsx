"use client"
import React, { useState } from "react"
import Link from "next/link"
import GradientButton from "./GradientButton"
import Image from "next/image"
import { IoMenu, IoClose } from "react-icons/io5"

export default function Navbar() {
  let [open, setOpen] = useState(false)
  return (
    <div className="relative top-0 left-0 w-full shadow-md ">
      <div className="md:flex relative md:px-10 px-7 mb-0 items-center border-b border-[#302A3A] justify-between bg-darkPurple py-4">
        <div className="flex items-center cursor-pointer">
          <Link href="/">
            <Image src="/logo2.png" width={130} height={130} alt={""} />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-white cursor-pointer right-6 top-4 md:hidden bg-backgroundPurple"
        >
          {open ? <IoClose size={35} /> : <IoMenu size={35} />}
        </div>
        <div
          className={`md:flex bg-backgroundPurple md:bg-transparent md:opacity-100 opacity-100 md:items-center md:static text-xl md:text-base pb-0 absolute text-textPrimary md:space-x-8 md:z-auto z-[99] md:pt-0 pt-10 md:pl-0 pl-8 left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? `top-[100%] opacity-100` : `top-[-490px]`
          }`}
        >
          <div className="pb-12 md:pb-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://sanmar.com"
              className=" hover:text-white"
            >
              Products
            </Link>
          </div>
          <div className="pb-12 md:pb-0">
            <Link href="/contact" className=" hover:text-white">
              Contact Us
            </Link>
          </div>

          <div className="pb-12 md:pb-0">
            <GradientButton
              className="py-1.5 px-5"
              href="https://swipesimple.com/links/lnk_879f7da9"
            >
              Make Payment
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}
