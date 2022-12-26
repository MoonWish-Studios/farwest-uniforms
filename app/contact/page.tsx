import React from "react"
import Link from "next/link"
import { HiGlobeAmericas } from "react-icons/hi2"

export default function page() {
  return (
    <div>
      <div className="contact flex items-center justify-center md:justify-start h-96 bg-lightPurple">
        <h1 className="text-5xl text-pureWhite md:pl-32">Contact</h1>
      </div>
      <div className="flex flex-col md:flex-row m-16 space-x-0 md:space-y-0 space-y-10 md:space-x-10">
        <div className="flex flex-col p-4 justify-between lg:px-20 md:px-10 pb-6 text-white rounded-md bg-gradient-to-r from-gradientSub1 to-gradientSub3 via-gradientSub2">
          <div className="flex flex-col items-center mb-6">
            <div className="">
              <HiGlobeAmericas size={32} />
            </div>
            <p className="text-xl text-center">Contact us from wherever you are!</p>
          </div>
          <div className="flex flex-col items-center space-y-2.5">
            <Link
              href=""
              className="flex px-8 py-1 rounded-lg border hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1 items-center"
            >
              <div>714-330-9387</div>
            </Link>
            <Link
              href=""
              className="flex px-11 py-1 rounded-lg border hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1 items-center"
            >
              <div>Send Email</div>
            </Link>
          </div>
        </div>
        {/* second */}
        <div className="flex secCard flex-col p-4  justify-between lg:px-32 md:px-20 pb-6 text-white rounded-md bg-gradient-to-r from-gradientSub1 to-gradientSub3 via-gradientSub2">
          <div className="flex flex-col items-center mb-6">
            <div className="">
              <HiGlobeAmericas size={32} />
            </div>
            <p className="text-xl text-center">Or come visit us in person!</p>
          </div>
          <div className="flex flex-col items-center space-y-2.5">
            <Link
              href=""
              className="flex px-8 py-1 rounded-lg border hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1 items-center"
            >
              <div>714-330-9387</div>
            </Link>
            <Link
              href=""
              className="flex px-11 py-1 rounded-lg border hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1 items-center"
            >
              <div>Send Email</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
