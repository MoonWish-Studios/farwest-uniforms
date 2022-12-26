export default function GradientButton({ children }: { children: string }) {
  return (
    <button className="hover:outline hover:outline-white hover:outline-2 transition-all duration-75 box-content rounded-md px-7 font-semibold my-2 text-base py-1.5 text-white bg-gradient-to-r   from-gradientSub1 via-gradientSub2 to-gradientSub3">
      {children}
    </button>
  )
}
