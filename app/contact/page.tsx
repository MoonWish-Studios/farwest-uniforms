import React from "react"
import Link from "next/link"
import { HiGlobeAmericas } from "react-icons/hi2"
import { BsHouseDoorFill } from "react-icons/bs"

export default function page() {
  return (
    <div>
      <div className="contact flex items-center justify-center md:justify-start h-96 ">
        <h1 className="text-5xl text-white md:pl-32">Contact</h1>
      </div>
      <div className="flex flex-col md:flex-row m-16 space-x-0 md:space-y-0 space-y-10 md:space-x-10">
        <div className="flex flex-col p-4 justify-between lg:px-20 md:px-10 pb-6 text-white rounded-md bg-gradient-to-tr from-gradientSub1 to-gradientSub3 via-gradientSub2">
          <div className="flex flex-col items-center mb-6">
            <div className="">
              <HiGlobeAmericas size={32} />
            </div>
            <p className="text-xl text-center">Contact us from wherever you are!</p>
          </div>
          <div className="flex flex-col items-center space-y-2.5">
            <Link
              href="tel:7145309918"
              className="flex px-8 py-1 rounded-lg border hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1 items-center"
            >
              <div>714-330-9387</div>
            </Link>
            <Link
              href="mailto:farwestlogo@yahoo.com"
              className="flex px-11 py-1 rounded-lg border hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1 items-center"
            >
              farwestlogo@yahoo.com
            </Link>
          </div>
        </div>
        {/* second */}
        <div className="flex secCard flex-col p-4 space-y-5 justify-between pb-6 lg:px-8 text-white rounded-md bg-gradient-to-tr from-gradientSub1 to-gradientSub3 via-gradientSub2">
          <div className="flex flex-col items-center">
            <div className="">
              <BsHouseDoorFill size={29} />
            </div>
            <p className="text-xl text-center">Or come visit us in person!</p>
          </div>
          <div className="flex text-center leading-5 text-base justify-center items-center">
            <p className="w-4/5">7201 Garden Grove Blvd Suite E, Garden Grove, CA 92841</p>
          </div>
          <div className="flex flex-col items-center space-y-2.5">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/mE3GRda1EY89F7zK8"
              className="flex px-11 py-1 rounded-lg border hover:bg-white hover:text-gradientSub1 hover:border-gradientSub1 items-center"
            >
              <div>View in map</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
