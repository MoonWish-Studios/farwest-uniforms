import Image from "next/image"
import Link from "next/link"
import ReviewSection from "./components/ReviewSection"
// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="container relative p-6 mx-auto">
      <ReviewSection />
    </div>
  )
}
