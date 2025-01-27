import { roboto } from '@/fonts/roboto';
import CartProvider from '@/modules/cart/context/CartProvider';
import CategoriesProvider from '@/modules/categories/context/CategoriesProvider';
import ProductsProvider from '@/modules/products/context/ProductsProvider';
import '@/styles/globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ProductsProvider>
        <CategoriesProvider>
          <main className={roboto.className}>
            <CssBaseline />
            < Component {...pageProps} />
          </main>
        </CategoriesProvider>
      </ProductsProvider>
    </CartProvider>
  )
}
