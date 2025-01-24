import { useCartContext } from '@/modules/cart/context/CartProvider'
import CartProduct from '@/modules/cart/ui/CartProduct'
import { Box, Container, Divider, Drawer, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import Header from '../ui/Header'
import RoundedButton from '../ui/buttons/RoundedButton'

const DRAWER_WIDTH = 140
interface MainLayoutProps {
    children: ReactNode
    title?: string
}

const MainLayout = ({ children, title = 'Amazon Defecto' }: MainLayoutProps) => {
    const { cartProducts, totalCost, updateQuantity, deleteProduct } = useCartContext()

    const isOpen = cartProducts.length > 0;

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Box sx={{ marginRight: isOpen ? `${DRAWER_WIDTH}px` : 0 }}>
                <Header />
                <Container>
                    {children}
                </Container>
                {/* TODO: add footer */}
                {/* <Footer /> */}
            </Box>
            <Drawer
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={isOpen}
            >
                <Box textAlign={'center'} px={1} py={2}>
                    <Typography variant='caption'>SubTotal</Typography>
                    <Typography
                        variant='body2'
                        color='error'
                        fontWeight={'bold'}
                        gutterBottom
                    >
                        $ {totalCost}
                    </Typography>
                    <RoundedButton
                        variant='outlined'
                        fullWidth
                        onClick={() => router.push('/cart')}>
                        Go to Cart
                    </RoundedButton>
                </Box>

                <Divider />

                <Stack divider={<Divider />}>
                    {cartProducts.map(cartProducts => (
                        <CartProduct
                            key={cartProducts.id}
                            cartProduct={cartProducts}
                            onUpdateQuantity={(quantity) => {
                                updateQuantity(cartProducts.id, quantity)
                            }}
                            onDelete={() => deleteProduct(cartProducts.id)}
                        />
                    ))}
                </Stack>
            </Drawer>
        </div >
    )
}

export default MainLayout

