import Image from "next/image"
import Link from "next/link"
import { CaptionText, GradientText, SectionText } from "./components/Text"
import ReviewSection from "./components/ReviewSection"
import SectionDivider from "./components/SectionDivider"
import IndustrySection from "./components/IndustrySection"
import ProcedureSection from "./components/ProcedureSection"
import BrandSection from "./components/BrandSection"
import LearnMoreButton from "./components/LearnMoreButton"

// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className=" flex flex-col container justify-between ">
      <LearnMoreButton />
      <div className="flex flex-col w-screen items-center   p-10 sm:p-2">
        <div className="sec">
          <CaptionText className="mt-20">Trusted By These Brands And Industries</CaptionText>
          <BrandSection />
          <CaptionText>Explore What We Offer</CaptionText>
          <SectionDivider section={1} heading="What We Do" caption="" />
          <h3 className="max-w-xl mx-auto my-16 text-2xl tracking-wide text-center text-textPrimary">
            We specialize in embroidery, DTF (Direct To Film) transfers, screen printing, tackle twill, and sublimation.
            We also offer custom stickers and window decal
          </h3>
          <h3 className="max-w-xl mx-auto my-16 text-2xl tracking-wide text-center text-textPrimary">
            In addition, we strive to provide the best quality service for you and we are happy to take on small orders
          </h3>
          <SectionDivider section={2} heading="How It Works" caption="" />
          <ProcedureSection />
          <SectionDivider section={3} heading="Industries We’ve Made Uniforms For" caption="And Many More" />
          <IndustrySection />
          <SectionDivider section={4} heading="Customer Feedbacks" caption="See More On Yelp" />
          <ReviewSection />
        </div>
      </div>
    </div>
  )
}
