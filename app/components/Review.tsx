import Image from "next/image"
import GradientText from "./GradientText"

export interface ReviewProps {
  src: string
  name: string
  message: string
  id?: string
}

export default function Review({ src, name, message }: ReviewProps) {
  return (
    <div className="transition-colors     hover:bg-lightPurple relative sm:w-72 sm:h-72 border border-solid rounded-md bg-darkPurple border-lightPurple w-auto h-60">
      <div className="group border-lightPurple border-solid border-4 abs-avatar  w-20 h-20 rounded-full  overflow-clip">
        <Image style={{ objectFit: "cover" }} alt={`${name} - Profile Picture`} src={src} fill />
      </div>

      <GradientText className="mt-12">{name}</GradientText>
      <p className="text-textPrimary text-center sm:px-4 px-8 pt-2 text-base pb-6">{message}</p>
    </div>
  )
}
