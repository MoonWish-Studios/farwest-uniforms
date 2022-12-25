import "./styles/globals.css"
import MainNavigation from "./components/MainNavigation"
import Footer from "./components/Footer"
import { Outfit } from "@next/font/google"

const outfit = Outfit({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body className="bg-darkPurple">
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
