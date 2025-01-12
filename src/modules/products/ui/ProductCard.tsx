import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import { ProductType } from '../types/productType'
import Price from './Price'

interface ProductCardProps {
    product: ProductType
}
const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Card variant="outlined" sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                alt={product.title}
                sx={{
                    width: '240px',
                    backgroundColor: '#f7f7f7',
                }}
                image={product.thumbnail}
            />
            <Box>
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
                            {product.reviews.length}
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
                    <Price price={product.price} />

                    <Typography
                        variant='caption'
                        display={'block'}>
                        {product.warrantyInformation}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button
                        variant='contained'
                        size="small"
                        sx={{
                            borderRadius: 4,
                            px: 2
                        }}
                    >
                        ADD TO CART
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default ProductCard
