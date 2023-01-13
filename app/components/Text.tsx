export interface TextProps {
  children: React.ReactElement<any> | string
  className?: string
}

export function Text({ children }: { children: string }) {
  return <p className="pt-3 leading-6 w-fit text-textPrimary">{children}</p>
}

export function HeadingWhite({ children }: { children: string }) {
  return <h3 className="text-2xl tracking-wide text-white">{children}</h3>
}

export function GradientText({ children, className }: TextProps) {
  return (
    <h3
      className={`font-bold  tracking-wider text-transparent text-xl text-center bg-clip-text bg-gradient-to-r from-gradientSub1 via-gradientSub2 to-gradientSub3 ${className}`}
    >
      {children}
    </h3>
  )
}

export function SectionText({ children, className }: TextProps) {
  return (
    <h2
      className={`font-semibold  tracking-wider text-transparent text-3xl text-center bg-clip-text bg-gradient-to-r from-gradientSub1 via-gradientSub2 to-gradientSub3 ${className}`}
    >
      {children}
    </h2>
  )
}
export function CaptionText({ children, className }: TextProps) {
  return (
    <p
      className={`font-medium  my-2 uppercase  tracking-widest text-sm text-textPrimary text-center ${className}`}
    >
      {children}
    </p>
  )
}
