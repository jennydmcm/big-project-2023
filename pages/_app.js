import '@/styles/globals.css'
import { useRouter } from 'next/router'
import Index from './index'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

