"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoCloseOutline } from "react-icons/io5"
import { useState } from "react"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <RxHamburgerMenu className="hamburgerIcon" size="40px" color="white" onClick={() => setOpen(!open)} />
  )
  const closeIcon = <IoCloseOutline className="closeIcon" size="40px" color="white" onClick={() => setOpen(!open)} />

  return (
    <div className="mobileNav">
      <div className="px-10">
        <a href="/" className="mobileLogo">
          <Image src="/logo.svg" width={100} height={100} alt={""} />
        </a>
      </div>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <ul className="navItems">
          <Link className="text-textPrimary hover:text-white" href="/">
            Why Us
          </Link>
          <Link className="text-textPrimary hover:text-white" href="/services">
            Services
          </Link>
          <Link className="text-textPrimary hover:text-white" href="/faq">
            FAQ
          </Link>
        </ul>
      )}
    </div>
  )
}
