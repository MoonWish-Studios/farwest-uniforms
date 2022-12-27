import Image from "next/image"
import { GradientText } from "./Text"

export interface ReviewProps {
  src: string
  name: string
  message: string
  id?: string
}

export default function Review({ src, name, message }: ReviewProps) {
  return (
    <div className="transition-colors     hover:bg-lightPurple relative sm:w-72 sm:h-[20rem] border border-solid rounded-md bg-darkPurple border-lightPurple w-auto h-64">
      <div className="top-0 w-20 h-20 border-4 border-solid rounded-full  border-lightPurple abs-transform left-1/2 overflow-hidden">
        <Image
          style={{ objectFit: "cover" }}
          alt={`${name} - Profile Picture`}
          src={src}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>

      <GradientText className="mt-12">{name}</GradientText>
      <blockquote className="px-8 pt-2 pb-6 text-base text-center text-textPrimary sm:px-5">
        {message}
      </blockquote>
    </div>
  )
}
