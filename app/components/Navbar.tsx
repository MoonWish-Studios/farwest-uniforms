"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { IoMenu, IoClose } from "react-icons/io5"

export default function Navbar() {
  let [open, setOpen] = useState(false)
  return (
    <div className="shadow-md w-full  relative top-0 left-0 ">
      <div className="md:flex md:px-10 px-7 mb-0 items-center border-b border-[#302A3A] justify-between bg-darkPurple py-4">
        <div className="cursor-pointer flex items-center">
          <Link href="/">
            <Image src="/logo.svg" width={130} height={130} alt={""} />
          </Link>
        </div>
        <div onClick={() => setOpen(!open)} className=" absolute right-6 text-white top-4 cursor-pointer md:hidden">
          {open ? <IoClose size={35} /> : <IoMenu size={35} />}
        </div>
        <div
          className={`md:flex md:opacity-100 opacity-100 md:items-center md:static text-xl md:text-base pb-0 absolute text-textPrimary md:space-x-8
         md:z-auto z-[99] md:pt-0 pt-10 md:pl-0 pl-8 left-0 w-full md:w-auto transition-all duration-500 ease-in ${
           open ? `top-19 opacity-100` : `top-[-490px]`
         }`}
        >
          <div className="md:pb-0 pb-12">
            <a target="_blank" rel="noopener noreferrer" href="https://sanmar.com" className=" hover:text-white">
              Products
            </a>
          </div>
          <div className="md:pb-0 pb-12">
            <Link href="/contact" className=" hover:text-white">
              Contact Us
            </Link>
          </div>

          <div className="md:pb-0 pb-12">
            <Link
              href=""
              className=" hover:border  px-4 py-1.5 text-white rounded-lg font-medium md:block bg-gradient-to-t from-gradientSub1 to-gradientSub3 via-gradientSub2"
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
