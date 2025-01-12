import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { roboto } from '@/fonts/roboto'
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <CssBaseline />
      < Component {...pageProps} />
    </main>
  )
}
