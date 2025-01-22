import RoundedButton from '@/common/components/buttons/RoundedButton'
import { Box, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import { ProductType } from '../types/productType'
import Price from './Price'

interface ProductCardProps {
    product: ProductType,
    onClick: () => void //?Se va ejecutar una accion
    // onClick: () => VoidFunction  //?Alternativa
}
const ProductCard = ({ product, onClick }: ProductCardProps) => {

    const isLowStock = product.stock < 3;

    return (
        <Card variant="outlined" sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                alt={product.title}
                sx={{
                    width: '240px',
                    backgroundColor: '#f7f7f7',
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}
                onClick={onClick}
                image={product.thumbnail}
            />
            <Box>
                <CardContent>
                    <Typography variant="h5" component="div"
                        sx={{
                            '&:hover': {
                                cursor: 'pointer',
                                color: 'primary.main',
                            }
                        }}
                        onClick={onClick}
                    >
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
                    {isLowStock && (
                        <Typography
                            color='error'
                            fontWeight={'bold'}
                            variant='caption'
                            display={'block'}>
                            Only {product.stock} in stock - buy soon
                        </Typography>
                    )}
                </CardContent>

                <CardActions>
                    <RoundedButton color='secondary'>ADD TO CART</RoundedButton>
                </CardActions>
            </Box>
        </Card>
    )
}

export default ProductCard
