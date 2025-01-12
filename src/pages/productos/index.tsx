import MainLayout from '@/common/components/layouts/MainLayout'
import ProductList from '@/modules/products/ui/ProductList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProductType } from '../../modules/products/types/productType'
import { Box, Pagination, Typography } from '@mui/material'

const DEFAULT_LIMIT = 10;
const ProductosPage = () => {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);

    const getSkip = (page: number) => {
        return (page - 1) * DEFAULT_LIMIT
    }

    const getTotalPage = (totalItems: number) => {
        return Math.ceil(totalItems / DEFAULT_LIMIT)
    }

    useEffect(() => {
        axios({
            url: 'https://dummyjson.com/products',
            params: {
                limit: DEFAULT_LIMIT,
                skip: getSkip(page)
            }
        }).then((response) => {
            setProducts(response.data.products)
            setTotalItems(response.data.total)
        })
    }, [page])

    return (
        <MainLayout title='Productos'>
            <Box sx={{ pt: 3, pb: 1 }}>
                <Typography variant='h6' fontWeight={'bold'}>Results</Typography>
                <Typography variant='body2' color={'text.secondary'}>Check each product page for the buying options.</Typography>
            </Box>
            <ProductList products={products} />
            <Box display={'flex'} justifyContent={'center'} py={4}>
                <Pagination
                    count={getTotalPage(totalItems)}
                    variant="outlined"
                    shape="rounded"
                    onChange={(_, page) => {
                        setPage(page)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                />
            </Box>
        </MainLayout>
    )
}

export default ProductosPage
