import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { AppProps } from 'next/dist/shared/lib/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
