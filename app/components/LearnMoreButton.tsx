import React from "react"
import Link from "next/link"
import Image from "next/image"
import GradientButton from "./GradientButton"
export default function LearnMoreButton() {
  return (
    <div className="w-full bg-[url('/homebg.png')] tablet:bg-none home flex tablet:justify-between justify-center  border-b border-lightPurple overflow-x-hidden  ">
      <div className="flex flex-col items-center justify-center pb-20 ml-5 mr-5 mt-28 tablet:mt-0 md:ml-12 tablet:items-start">
        {/* Text */}
        <h1
          className="w-full px-1 md:w-[32rem] mb-8 text-3xl sm:text-4xl leading-normal text-center md:text-4xl lg:text-5xl 
        tablet:text-left md:mt-25 text-white"
        >
          <strong className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradientSub1 via-gradientSub2 to-gradientSub3 ">
            Quality{" "}
          </strong>
          custom apparel for all industries
        </h1>
        <GradientButton className="" href="https://catalog.companycasuals.com/">
          View Catalog
        </GradientButton>
      </div>
      <div className="hidden tablet:block w-[800px]  ">
        <Image
          src="/slant.png"
          // fill
          // style={{ objectFit: "cover" }}
          alt="people with their shirts made by farwest"
          width={900}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          height={600}
        />
      </div>
    </div>
  )
}
