import MainLayout from '@/common/components/layouts/MainLayout';
import { ProductType } from '@/modules/products/types/productType';
import Price from '@/modules/products/ui/Price';
import apiProductos from '@/services/resources/products';
import { Box, Card, CardContent, Divider, Rating, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// const product = {
//     title: 'PRODUCTO w',
//     rating: 4,
//     reviews: [],
//     shippingInformation: 'shipping',
//     warrantyInformation: 'warranty',
//     brand: 'apple',
//     price: 10.6
// }

const DetailProductPage = () => {
    const router = useRouter();

    const idProducto = router.query.idProduct as string

    const [product, setProducto] = useState<ProductType | null>(null)

    useEffect(() => {
        if (idProducto) {
            apiProductos.getById(idProducto).then(response => setProducto(response))
        }
    }, [idProducto])

    return (
        <MainLayout title='Detail Product'>
            {product && (
                <Grid2 container>
                    <Grid2 size={1}>
                        {product.images.map((image, index) => (
                            <Card
                                key={index}
                                variant='outlined'
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderWidth: 2,
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        cursor: 'pointer'
                                    }
                                }}>
                                <Image
                                    src={image}
                                    width={50}
                                    height={50}
                                    alt={'imagen'}
                                />
                            </Card>
                        ))}

                    </Grid2>
                    <Grid2 size={4} position={'relative'}>
                        <Image
                            src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9cxQcMWSx63uUJmscOomi2sqy-s6bXUzKAJJPCLwx44vGjB8ClSjwSMhrc2LtbEiQh7d7qd-mtq8m4Fouvlzjul3atumOkpMslWbWRw'} fill alt={'imagen'} style={{
                                objectFit: 'cover'
                            }}
                        />
                    </Grid2>
                    <Grid2 size={5}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Box display={'flex'} gap={1}>
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={product.rating}
                                    precision={0.5}
                                    readOnly
                                    size='small'
                                />
                                <Typography
                                    variant='caption'
                                    display={'block'}
                                    color='primary'>
                                    {product.reviews.length} ratings
                                </Typography>
                            </Box>

                            <Typography
                                variant='caption'
                                color='text.secondary'
                                display={'block'}>
                                {product.shippingInformation}
                            </Typography>

                            <Typography
                                variant='caption'
                                color='primary'
                                display={'block'}>
                                {product.brand}
                            </Typography>

                            {/* <Price price={product.price} currency='BOB' /> */}

                            <Divider />

                            <Price price={product.price} />

                            <Typography
                                variant='caption'
                                display={'block'}>
                                {product.warrantyInformation}
                            </Typography>

                            <Grid2 container>
                                <Grid2 size={4}>
                                    <Typography variant='body2' fontWeight={'bold'}>
                                        Brand
                                    </Typography>
                                </Grid2>
                                <Grid2 size={8}>
                                    <Typography variant='body2' >
                                        Apple
                                    </Typography>
                                </Grid2>
                            </Grid2>

                            <Divider />

                            <Typography variant='subtitle1' fontWeight={'bold'}>
                                About this item
                            </Typography>

                            <Box component={'ul'}>
                                <Typography component={'li'} variant='body2' >
                                    Apple
                                </Typography>

                                <Typography component={'li'} variant='body2' >
                                    Apple
                                </Typography>
                            </Box>
                        </CardContent>

                    </Grid2>
                    <Grid2 size={2}>acciones</Grid2>
                </Grid2>
            )}
        </MainLayout>
    )
}

export default DetailProductPage
