"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="container relative w-full p-5 mx-auto nav ">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Navbar Logo */}
        <Link href="/">
          <Image src="/logo.svg" width={130} height={130} alt={""} />
        </Link>
        {/* Navbar text */}
        <div className="items-center hidden space-x-12 md:flex text-textPrimary">
          <a target="_blank" rel="noopener noreferrer" href="https://sanmar.com" className="hover:text-white">
            Products
          </a>
          <Link href="/contact" className="hover:text-white">
            Contact Us
          </Link>

          <Link
            href=""
            className=" hover:border flex px-4 py-1.5 text-white rounded-lg font-semibold md:block bg-gradient-to-r from-gradientSub1 to-gradientSub3 via-gradientSub2"
          >
            Make Payment
          </Link>
        </div>
      </div>
    </div>
  )
}
