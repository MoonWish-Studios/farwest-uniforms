import "./styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outfit } from "@next/font/google"
import Script from "next/script"

declare global {
  interface Window {
    dataLayer: any
  }
}

const outfit = Outfit({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6CZ5W25YEW"></Script>
      <Script id="google-tag">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6CZ5W25YEW');`}
      </Script>

      <body className={`bg-backgroundPurple ${outfit.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
