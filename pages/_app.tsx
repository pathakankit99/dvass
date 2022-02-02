import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative" >
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
