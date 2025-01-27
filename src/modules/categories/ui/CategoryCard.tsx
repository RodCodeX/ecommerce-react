import RoundedButton from '@/common/components/ui/buttons/RoundedButton'
import Price from '@/modules/products/ui/Price'
import { Box, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import { ProductType } from '../types/productType'

interface ProductCardProps {
    product: ProductType,
    onClick: () => void
    onAdd: () => void
}
const CategoryCard = ({ product, onClick, onAdd }: ProductCardProps) => {

    const isLowStock = product.stock < 3;

    return (
        <Card
            variant="outlined"
            sx={{
                width: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <CardMedia
                component="img"
                alt={product.title}
                sx={{
                    backgroundColor: '#f7f7f7',
                    '&:hover': {
                        cursor: 'pointer'
                    },
                    width: '100%',
                    height: 'auto',
                }}
                onClick={onClick}
                image={product.thumbnail}
            />
            <Box
            >
                <CardContent>
                    <Typography variant="h6" component="div"
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
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            width: '100%',
                            whiteSpace: 'normal',
                            overflow: 'hidden',
                        }}
                    >
                        {product.description.length > 80 ? `${product.description.slice(0, 80)}...` : product.description}
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
                    <RoundedButton
                        color='secondary'
                        onClick={onAdd}
                    >
                        Add to cart
                    </RoundedButton>
                </CardActions>
            </Box>
        </Card>
    )
}

export default CategoryCard
