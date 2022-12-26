import Image from "next/image"
import Link from "next/link"
import { CaptionText, GradientText, SectionText } from "./components/Text"
import ReviewSection from "./components/ReviewSection"
import SectionDivider from "./components/SectionDivider"
import IndustrySection from "./components/IndustrySection"
import ProcedureSection from "./components/ProcedureSection"
// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="container relative p-10 mx-auto sm:p-2">
      <SectionDivider section={2} heading="How It Works" caption="" />
      <ProcedureSection />
      {/* <SectionDivider section={3} heading="Industries We’ve Made Uniforms For" caption="And Many More" /> */}
      {/* <IndustrySection /> */}
      {/* <SectionDivider section={4} heading="Customer Feedbacks" caption="See More On Yelp" /> */}
      {/* <ReviewSection /> */}
    </div>
  )
}
