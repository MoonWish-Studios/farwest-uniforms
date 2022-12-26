import { nanoid } from "nanoid"
import { Icon } from "./IndustrySection"
import { CaptionText } from "./Text"

export default function BrandSection() {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-xl pb-20 mx-auto gap-x-8 h-fit">
      {brands.map(({ src, name, id }: { src: string; name: string; id: string }) => (
        <Icon className="inline-block w-20 h-20" src={src} key={id} name={name} />
      ))}
    </div>
  )
}

const brands = [
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
  {
    src: "/assets/brands/adobe.svg",
    name: "Adobe",
    id: nanoid(),
  },
]
