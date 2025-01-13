import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { roboto } from '@/fonts/roboto'
import CssBaseline from '@mui/material/CssBaseline';
import ProductsProvider from '@/modules/products/context/ProductsProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <main className={roboto.className}>
        <CssBaseline />
        < Component {...pageProps} />
      </main>
    </ProductsProvider>
  )
}
