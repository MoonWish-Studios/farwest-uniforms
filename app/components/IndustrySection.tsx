import Image from "next/image"
import { nanoid } from "nanoid"

type IconProps = {
  src: string
  name: string
  id?: string
}

export default function IndustrySection() {
  return (
    <div className="grid grid-cols-3 gap-y-6 ">
      {industries.map(({ src, name, id }: IconProps) => (
        <Industry key={id} src={src} name={name} />
      ))}
    </div>
  )
}

export function Industry({ src, name }: IconProps) {
  return (
    <figure className="flex flex-col justify-center items-center">
      <Icon src={src} name={name} />
      <figcaption className="pt-1 text-textPrimary tracking-wider font-semibold text-lg">{name}</figcaption>
    </figure>
  )
}
export function Icon({ src, name }: IconProps) {
  return (
    <div className="relative w-16 h-16">
      <Image fill src={src} alt={name} />
    </div>
  )
}
const industries = [
  {
    src: "/assets/industry/automotive.svg",
    name: "Automotives",
    id: nanoid(),
  },
  {
    src: "/assets/industry/construction.svg",
    name: "Construction",
    id: nanoid(),
  },
  {
    src: "/assets/industry/electrical.svg",
    name: "Electrical",
    id: nanoid(),
  },
  {
    src: "/assets/industry/HVAC.svg",
    name: "HVAC",
    id: nanoid(),
  },
  {
    src: "/assets/industry/medical.svg",
    name: "Medical",
    id: nanoid(),
  },
  {
    src: "/assets/industry/military.svg",
    name: "Military",
    id: nanoid(),
  },
  {
    src: "/assets/industry/plumbing.svg",
    name: "Plumbing",
    id: nanoid(),
  },
  {
    src: "/assets/industry/restaurants.svg",
    name: "Restaurants",
    id: nanoid(),
  },
  {
    src: "/assets/industry/schools.svg",
    name: "Schools",
    id: nanoid(),
  },
  {
    src: "/assets/industry/schools.svg",
    name: "Schools",
    id: nanoid(),
  },
  {
    src: "/assets/industry/security.svg",
    name: "Security",
    id: nanoid(),
  },
  {
    src: "/assets/industry/sports.svg",
    name: "Sports",
    id: nanoid(),
  },
]
