import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap', //?Muestra la fuente por defecto del navegador y luego reemplazarlo con la fuente defenido.
})
