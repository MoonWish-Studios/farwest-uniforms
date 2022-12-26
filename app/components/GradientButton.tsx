import Link from "next/link"

export default function GradientButton({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-block hover:outline hover:outline-white hover:outline-2 transition-all duration-75 box-content rounded-md px-7 font-semibold my-4 text-base py-1.5 text-white bg-gradient-to-r   from-gradientSub1 via-gradientSub2 to-gradientSub3 "
    >
      {children}
    </Link>
  )
}
