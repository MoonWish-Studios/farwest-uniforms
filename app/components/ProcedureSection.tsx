import Image from "next/image"
import React from "react"
import { Icon } from "./IndustrySection"

export default function ProcedureSection() {
  return (
    <div className="md:[&>div:nth-child(odd)]:flex-row">
      {/* Choose your Products */}
      <ProcedureStep>
        <>
          <Image width={400} height={150} src="/assets/procedures/procedure-1.png" alt="Procedure One Image" />
          <div className="max-w-sm my-auto md:w-72">
            <Icon className="w-12 h-12 my-2" src="/assets/procedures/shopping.svg" name="Shopping Icon" />
            <HeadingWhite>Choose Your Products</HeadingWhite>
            <Text>Check out the clothing catalog here for the latest apparel to fit your needs</Text>
            <GradientButton>Products</GradientButton>
          </div>
        </>
      </ProcedureStep>

      {/* Contact Us */}
      <ProcedureStep>
        <>
          <Image width={400} height={150} src="/assets/procedures/procedure-2.png" alt="Procedure Two Image" />
          <div className="max-w-sm my-auto md:w-72">
            <Icon className="w-12 h-12 my-2" src="/assets/procedures/email.svg" name="Email Icon" />
            <HeadingWhite>Contact Us</HeadingWhite>
            <Text>
              Once you have found the items you want, you can contact us via email, phone call, or in person to tell us
              what you need
            </Text>
          </div>
        </>
      </ProcedureStep>

      {/* Pay And Receive */}
      <ProcedureStep>
        <>
          <Image width={400} height={150} src="/assets/procedures/procedure-3.png" alt="Procedure Three Image" />
          <div className="max-w-sm my-auto md:w-72 ">
            <Icon className="w-12 h-12 my-2 " src="/assets/procedures/pay.svg" name="Payment Icon" />
            <HeadingWhite>Receive And Pay</HeadingWhite>
            <Text>
              After that you will just need to wait for your order to be completed and pay through the payment portal on
              our website or in person!
            </Text>
          </div>
        </>
      </ProcedureStep>
    </div>
  )
}

function Text({ children }: { children: string }) {
  return <p className="pt-1 leading-5 w-fit text-textPrimary">{children}</p>
}

function HeadingWhite({ children }: { children: string }) {
  return <h3 className="text-2xl tracking-wide text-white">{children}</h3>
}

function GradientButton({ children }: { children: string }) {
  return (
    <button className="hover:outline hover:outline-white hover:outline-2 transition-all duration-75 box-content rounded-md px-7 font-semibold my-2 text-base py-1.5 text-white bg-gradient-to-r   from-gradientSub1 via-gradientSub2 to-gradientSub3">
      {children}
    </button>
  )
}

function ProcedureStep({ children }: { children: React.ReactElement<any> }) {
  return (
    <div className="flex flex-col-reverse mx-auto my-16 md:flex-row-reverse justify-evenly gap-x-4 gap-y-6 md:max-w-4xl max-w-fit">
      {children}
    </div>
  )
}