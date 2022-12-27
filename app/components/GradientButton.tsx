import Link from "next/link"

export default function GradientButton({
  href,
  children,
  className,
}: {
  href: string
  children: string
  className?: string
}) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={`inline-block hover:outline hover:outline-white hover:outline-2 transition-all duration-75 box-content rounded-lg px-7 font-semibold my-0 text-base py-2.5 text-white bg-gradient-to-r   from-gradientSub1 via-gradientSub2 to-gradientSub3 ${className} `}
    >
      {children}
    </Link>
  )
}
