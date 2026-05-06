import '@/styles/globals.scss'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
