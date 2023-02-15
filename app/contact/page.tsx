import React from "react"
import Link from "next/link"
import { HiGlobeAmericas } from "react-icons/hi2"
import { BsHouseDoorFill } from "react-icons/bs"

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-center contact md:justify-start h-96 ">
        <h1 className="text-5xl text-white md:pl-32">Contact</h1>
      </div>
      <div className="flex flex-col m-16 space-x-0 space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        <div className="flex flex-col justify-between p-4 pb-6 text-white rounded-md lg:px-20 md:px-10 bg-gradient-to-tr from-gradientSub1 to-gradientSub3 via-gradientSub2">
          <div className="flex flex-col items-center mb-6">
            <div className="">
              <HiGlobeAmericas size={32} />
            </div>
            <p className="text-xl text-center">Contact us from wherever you are!</p>
          </div>
          <div className="flex flex-col items-center space-y-2.5">
            <Link
              href="tel:7145309918"
              className="flex items-center px-7 py-1 border rounded-lg hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1"
            >
              <div>714-330-9387</div>
            </Link>
            <Link
              href="mailto:farwestlogo@yahoo.com"
              className="flex items-center px-12 py-1 border rounded-lg hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1"
            >
              Email Us
            </Link>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col justify-between p-4 pb-6 space-y-5 text-white rounded-md secCard lg:px-8 bg-gradient-to-tr from-gradientSub1 to-gradientSub3 via-gradientSub2">
          <div className="flex flex-col items-center">
            <div className="">
              <BsHouseDoorFill size={29} />
            </div>
            <p className="text-xl text-center">Or come visit us in person!</p>
          </div>
          <div className="flex items-center justify-center text-base leading-5 text-center">
            <p className="w-4/5">7201 Garden Grove Blvd Suite E, Garden Grove, CA 92841</p>
          </div>
          <div className="flex flex-col items-center space-y-2.5">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/mE3GRda1EY89F7zK8"
              className="flex items-center py-1 border rounded-lg px-11 hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1"
            >
              <div>View in map</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
