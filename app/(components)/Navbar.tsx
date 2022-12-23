import React from "react"
import Link from "next/link"
import Image from "next/image"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"

export default function Navbar() {
  return (
    <div className="container relative w-full p-5 mx-auto ">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        <Image src="/logo.svg" width={100} height={100} alt={""} />
        <div className="items-center hidden space-x-12 md:flex text-textPrimary">
          <Link href="" className="hover:text-darkGrayishBlue">
            Products
          </Link>
          <Link href="" className="hover:text-darkGrayishBlue">
            Contact Us
          </Link>
          <Link
            href=""
            className="flex px-4 py-1.5 text-white rounded-lg font-bold md:block hover:bg-brightRedLight bg-gradient-to-r from-gradientSub1 to-gradientSub3 via-gradientSub2"
          >
            Make Payment
          </Link>
        </div>
      </div>
    </div>
  )
}
