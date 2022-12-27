import Image from "next/image"
import { nanoid } from "nanoid"

interface IndustryProp {
  src: string
  name: string
  id?: string
}

interface IconProps extends IndustryProp {
  className: string
}
export default function IndustrySection() {
  return (
    <div className="grid grid-cols-2 mx-auto my-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-4xl gap-y-8 ">
      {industries.map(({ src, name, id }: IndustryProp) => (
        <Industry key={id} src={src} name={name} className="w-20 h-20 lg:w-24 lg:h-24" />
      ))}
    </div>
  )
}

export function Industry({ src, name, className }: IconProps) {
  return (
    <figure className="flex flex-col items-center justify-center">
      <Icon src={src} name={name} className={className} />
      <figcaption className="pt-1 text-lg font-semibold tracking-wider text-textPrimary">
        {name}
      </figcaption>
    </figure>
  )
}
export function Icon({ src, name, className }: IconProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        style={{ objectFit: "contain" }}
        fill
        src={src}
        alt={name}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
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
    src: "/assets/industry/cannabis.svg",
    name: "Cannabis",
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
