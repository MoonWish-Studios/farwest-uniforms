import React from "react"
import Link from "next/link"
import Image from "next/image"
import GradientButton from "./GradientButton"
export default function LearnMoreButton() {
  return (
    <div className="w-screen bg-[url('/homebg.png')] tablet:bg-none home flex tablet:justify-between justify-center  border-b border-lightPurple ">
      <div className="mt-28 tablet:mt-0 flex flex-col ml-5 mr-5 md:ml-12 pb-20 items-center justify-center tablet:items-start">
        {/* Text */}
        <h1
          className="w-96 md:w-[32rem] mb-8 text-4xl leading-normal text-center md:text-4xl lg:text-5xl 
        tablet:text-left md:mt-25 text-white"
        >
          <strong className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradientSub1 via-gradientSub2 to-gradientSub3 ">
            Quality{" "}
          </strong>
          custom apparel for all industries
        </h1>
        <GradientButton href="https://www.sanmar.com/">View Catalog</GradientButton>
      </div>
      <div className="relative -z-index-50 hidden tablet:block w-[800px]  ">
        <Image
          src="/slant.png"
          // fill
          // style={{ objectFit: "cover" }}
          alt="people with their shirts made by farwest"
          width={900}
          height={600}
        />
      </div>
    </div>
  )
}
