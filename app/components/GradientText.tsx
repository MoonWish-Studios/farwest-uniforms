interface GradientTextProps {
  children: React.ReactElement<any> | string
  className?: string
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <h2
      className={`font-bold  tracking-wider text-transparent text-xl text-center bg-clip-text bg-gradient-to-r from-gradientSub1 via-gradientSub2 to-gradientSub3 ${className}`}
    >
      {children}
    </h2>
  )
}
