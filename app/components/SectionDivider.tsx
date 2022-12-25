import Image from "next/image"
import React from "react"
import { CaptionText, SectionText } from "./Text"

type Divider = { section: number }
interface SectionDividerProps {
  section: number
  heading: string
  caption: string
}

export default function SectionDivider({ section, heading, caption }: SectionDividerProps) {
  return (
    <>
      <StepDivider section={section} />
      <SectionText>{heading}</SectionText>
      <CaptionText>{caption}</CaptionText>
    </>
  )
}

export function StepDivider({ section }: Divider) {
  return (
    <div className="my-10 mx-auto relative w-12 h-48 text-center">
      <Image src="/assets/step-divider.svg" alt="Divider Between Sections" fill />
      <label className="absolute abs-transform font-semibold text-white text-2xl -bottom-[9px] left-1/2">
        {section}
      </label>
    </div>
  )
}
