import MainLayout from "@/common/components/layouts/MainLayout";
import { useCartContext } from "@/modules/cart/context/CartProvider";
import CartProductDetail from "@/modules/cart/ui/CartProductDetail";
import { Box, Divider, Grid2, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const CartPage = () => {

    const { cartProducts, deleteProduct, updateQuantity } = useCartContext();
    const router = useRouter()

    return (
        <MainLayout title="cart">
            <Grid2 container mt={4}>
                <Grid2 size={10}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'flex-end'}
                        >
                            <Typography variant="h4" fontWeight={'medium'}>
                                Shopping Cart
                            </Typography>
                            <Typography color="text.secondary">Price</Typography>
                        </Box>
                        <Divider />
                        <Stack divider={<Divider />}>

                            {cartProducts.map((product) => (
                                <CartProductDetail
                                    key={product.id}
                                    product={product}
                                    onClick={() => router.push(`/productos/${product.id}`)}
                                    onDelete={() => deleteProduct(product.id)}
                                    onUpdateQuantity={(quantity) => updateQuantity(product.id, quantity)}
                                />
                            ))}
                        </Stack>
                    </Paper>

                </Grid2>
                <Grid2 size={2}>Acciones</Grid2>
            </Grid2>

        </MainLayout>
    )
}

export default CartPage
