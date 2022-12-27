import { nanoid } from "nanoid"
import { Icon } from "./IndustrySection"
import { CaptionText } from "./Text"

export default function BrandSection() {
  return (
    <div className="flex flex-wrap items-center mt-6 justify-center max-w-xl pb-20 mx-auto gap-x-8 h-fit">
      {brands.map(({ src, name, id }: { src: string; name: string; id: string }) => (
        <Icon className="inline-block w-20 h-16" src={src} key={id} name={name} />
      ))}
    </div>
  )
}

const brands = [
  {
    src: "/assets/brands/tacobell.png",
    name: "Taco Bell",
    id: nanoid(),
  },
  {
    src: "/assets/brands/tastea.png",
    name: "Tastea",
    id: nanoid(),
  },
  {
    src: "/assets/brands/uci.svg",
    name: "UCI Health",
    id: nanoid(),
  },
  {
    src: "/assets/brands/bitemi.png",
    name: "Bite Mi",
    id: nanoid(),
  },
  {
    src: "/assets/brands/CMZ.svg",
    name: "CMZ Construction",
    id: nanoid(),
  },
]
