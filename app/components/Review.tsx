import GradientText from "./GradientText"

export interface ReviewProps {
  src: string
  name: string
  message: string
  id?: string
}

export default function Review({ src, name, message }: ReviewProps) {
  return (
    <div className="hover:bg-lightPurple relative sm:w-72 sm:h-72 border border-solid rounded-md bg-darkPurple border-lightPurple w-auto h-56">
      <img
        src={src}
        className="border-lightPurple border-solid border-4  absolute w-20 h-20 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <GradientText className="mt-12">{name}</GradientText>
      <p className="text-textPrimary text-center sm:px-4 px-12 py-4 text-base pb-6">{message}</p>
    </div>
  )
}
