import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { roboto } from '@/fonts/roboto'
import CssBaseline from '@mui/material/CssBaseline';
import ProductsProvider from '@/modules/products/context/ProductsProvider';
import CartProvider from '@/modules/cart/context/CartProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ProductsProvider>
        <main className={roboto.className}>
          <CssBaseline />
          < Component {...pageProps} />
        </main>
      </ProductsProvider>
    </CartProvider>
  )
}
