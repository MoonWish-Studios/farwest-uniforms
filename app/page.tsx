import Image from "next/image"
import LearnMoreButton from "./(components)/LearnMoreButton"

// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="container relative p-6 mx-auto">
      <LearnMoreButton />
    </div>
  )
}
