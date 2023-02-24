import React from "react"
import Image from "next/image"
import { BsFacebook } from "react-icons/bs"
import { FaInstagram, FaYelp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { ImPhone } from "react-icons/im"
import { BsHouseDoorFill } from "react-icons/bs"
import Link from "next/link"
import { Icon } from "./IndustrySection"

export default function Footer() {
  return (
    <footer className="bg-darkPurple border-t border-[#302A3A]">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:justify-around md:flex-row md:space-y-0">
        {/* Logo and Social */}
        <div className="flex flex-col-reverse items-center space-y-12 md:mr-32 md:flex-col md:space-y-4 md:items-start">
          <div>
            <Link href="/">
              <Image src="/logo2.png" width={120} height={120} alt={""} />
            </Link>
          </div>
          <div className="flex justify-center pb-3 space-x-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/farwestuniforms/"
            >
              <BsFacebook size={32} color="#453D55" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.yelp.com/biz/farwest-uniforms-and-embroidery-garden-grove-2?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
            >
              <FaYelp size={32} color="#453D55" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/farwestuniforms/"
            >
              <FaInstagram size={32} color="#453D55" />
            </Link>
          </div>
        </div>
        {/* Contact List */}
        <div className="flex flex-col justify-start sm:flex-row gap-y-10 sm:justify-evenly sm:space-x-20 md:space-x-40 ">
          <div className="flex flex-col w-3/5 space-y-3 text-textPrimary ">
            <p className="text-gradientSub1">INFO</p>
            <div className="flex flex-row items-center flex-shrink-0 space-x-2 w-fit hover:text-white">
              <Icon src="/assets/mail.svg" name="Email icon" className="w-4 h-4" />
              <p>farwestlogo@yahoo.com</p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0 space-x-2 w-fit hover:text-white">
              <Icon src="/assets/phone.svg" name="phone icon" className="w-4 h-4" />
              <p>(714) 530 9918</p>
            </div>
            <div className="flex items-start space-x-2 w-fit hover:text-white">
              <Icon src="/assets/home.svg" name="home icon" className="flex-shrink-0 w-4 h-4" />
              <div className="">7201 Garden Grove Blvd. Suite E, Garden Grove, CA 92841</div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 text-textPrimary">
            <p className="text-gradientSub1">COMPANY</p>
            <Link className="hover:text-white" href="">
              Home
            </Link>
            <Link
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://catalog.companycasuals.com/"
            >
              Products
            </Link>
            <Link className="hover:text-white" href="/contact">
              Contacts
            </Link>
            <Link
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://swipesimple.com/links/lnk_879f7da9"
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
