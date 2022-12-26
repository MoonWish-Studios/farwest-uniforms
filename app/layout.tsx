import "./styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outfit } from "@next/font/google"

const outfit = Outfit({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body className="bg-darkPurple">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
