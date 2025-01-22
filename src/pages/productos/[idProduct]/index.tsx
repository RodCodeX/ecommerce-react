import RoundedButton from '@/common/components/buttons/RoundedButton';
import MainLayout from '@/common/components/layouts/MainLayout';
import { ProductType } from '@/modules/products/types/productType';
import Price from '@/modules/products/ui/Price';
import apiProductos from '@/services/resources/products';
import { Box, Card, CardContent, Divider, MenuItem, Rating, Select, Stack, Typography } from '@mui/material';
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

    const [activeImage, setActiveImage] = useState<string>('');

    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        if (idProducto) {
            apiProductos.getById(idProducto).then((product) => {
                setProducto(product)
                setActiveImage(product.images?.[0])
            })
        }
    }, [idProducto])

    return (
        <MainLayout title='Detail Product'>
            {product && (
                <Grid2 container sx={{ mt: 3 }}>
                    <Grid2 size={1}>
                        <Stack spacing={1}>
                            {product.images.map((image, index) => (
                                <Card
                                    key={index}
                                    variant='outlined'
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderWidth: 2,
                                        borderColor: activeImage === image ? 'primary.main' : '',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            cursor: 'pointer'
                                        }
                                    }}
                                    onMouseEnter={() => setActiveImage(image)}
                                >
                                    <Image
                                        src={image}
                                        width={50}
                                        height={50}
                                        alt={'imagen'}
                                    />
                                </Card>
                            ))}
                        </Stack>
                    </Grid2>

                    <Grid2 size={4} position={'relative'}>
                        <Image
                            src={activeImage}
                            fill alt={'imagen'}
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </Grid2>
                    <Grid2 size={5}>
                        <CardContent sx={{ pt: 0 }}>
                            <Typography variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Box display={'flex'} gap={1}>
                                <Typography variant="caption" display={'block'} color='primary'>
                                    {product.rating}
                                </Typography>
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
                                <ProductProperty atribute={'Height'} value={product.dimensions.height} />
                                <ProductProperty atribute={'with'} value={product.dimensions.width} />
                                <ProductProperty atribute={'depth'} value={product.dimensions.depth} />
                            </Grid2>

                            <Divider />

                            <Typography variant='subtitle1' fontWeight={'bold'}>
                                About this item
                            </Typography>

                            <Box component={'ul'}>
                                {product.reviews.map((review, index) => (
                                    <Typography key={index} component={'li'} variant='body2' >
                                        {review.comment}
                                    </Typography>
                                ))}
                            </Box>
                        </CardContent>

                    </Grid2>
                    <Grid2 size={2}>
                        <Card variant='outlined'>
                            <CardContent sx={{ pt: 0 }}>
                                <Stack spacing={1}>
                                    <Price price={product.price} />
                                    <Typography>{product.returnPolicy}</Typography>
                                    <Typography color='success' fontWeight={'bold'}>{product.availabilityStatus}</Typography>
                                    <Select
                                        id="quantity"
                                        value={quantity}
                                        fullWidth
                                        size='small'
                                        startAdornment={<Typography
                                            variant='body2'
                                            sx={{ mr: 1 }}
                                        >Quantity: </Typography>}
                                        sx={{ height: '32px' }}
                                        onChange={(e) => {
                                            setQuantity(e.target.value as number)
                                        }}
                                    >
                                        {Array.from({ length: 100 }, (_, index) => (
                                            <MenuItem key={index} value={index + 1}>
                                                {index + 1}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <RoundedButton
                                        fullWidth
                                        color='secondary'
                                    >
                                        ADD TO CART
                                    </RoundedButton>

                                    <RoundedButton
                                        fullWidth
                                        color='primary'
                                    >
                                        BUY NOW
                                    </RoundedButton>

                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            )}
        </MainLayout>
    )
}

export default DetailProductPage


const ProductProperty = ({ atribute, value }: { atribute: string, value: number }) => {
    return (
        <>
            <Grid2 size={4}>
                <Typography variant='body2' fontWeight={'bold'}>
                    {atribute}
                </Typography>
            </Grid2>
            <Grid2 size={8}>
                <Typography variant='body2' >
                    {value}
                </Typography>
            </Grid2>
        </>
    )
}
