import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
function MyApp({ Component, pageProps }: AppProps) {
  const FB = process.env.NEXT_PUBLIC_FB;
  const TWITTER = process.env.NEXT_PUBLIC_TWITTER;
  const INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM;
  const YOUTUBE = process.env.NEXT_PUBLIC_YOUTUBE;
  const DISCORD = process.env.NEXT_PUBLIC_DISCORD
  return (
    <div className="relative">
      <Navbar  
      fb={FB}
      twitter={TWITTER}
      instagram={INSTAGRAM}
      youtube={YOUTUBE}
      discord={DISCORD}/>
      <Component {...pageProps} 
      fb={FB}
      twitter={TWITTER}
      instagram={INSTAGRAM}
      youtube={YOUTUBE}
      discord={DISCORD}/>
      <Footer 
      fb={FB}
      twitter={TWITTER}
      instagram={INSTAGRAM}
      youtube={YOUTUBE}
      discord={DISCORD}/>
    </div>
  )
}

export default MyApp
