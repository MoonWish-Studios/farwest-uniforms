import "./styles/globals.css"
import Navbar from "./components/Navbar"
import { Outfit } from "@next/font/google"

const outfit = Outfit({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-backgroundPurple ${outfit.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
