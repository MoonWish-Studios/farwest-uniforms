import React from "react"
import Link from "next/link"

export default function LearnMoreButton() {
  return (
    <div className="container h-screen">
      <div className="flex flex-col mt-48 items-center justify-center md:items-start">
        {/* Text */}
        <div className="mb-8 text-4xl leading-normal text-center md:text-4xl lg:text-5xl md:text-left md:w-2/3 md:mt-25 text-textPrimary">
          <span className="font-semibold text-gradientSub1">Quality</span> custom apparel for all industries
        </div>
        {/* Button */}
        <div>
          <Link
            href=""
            className="p-4 px-8 pt-3 text-lg text-white rounded-lg hover:border bg-gradient-to-r from-gradientSub1 to-gradientSub3 via-gradientSub2"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
