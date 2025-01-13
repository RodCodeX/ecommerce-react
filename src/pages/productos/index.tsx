import MainLayout from '@/common/components/layouts/MainLayout'
import { useProductsContext } from '@/modules/products/context/ProductsProvider'
import ProductList from '@/modules/products/ui/ProductList'
import { Box, Pagination, Typography } from '@mui/material'


const ProductosPage = () => {
    const { loading, products, totalPages, updatePage } = useProductsContext()

    return (
        <MainLayout title='Productos'>
            <Box sx={{ pt: 3, pb: 1 }}>
                <Typography variant='h6' fontWeight={'bold'}>Results</Typography>
                <Typography variant='body2' color={'text.secondary'}>Check each product page for the buying options.</Typography>
            </Box>
            <ProductList loading={loading} products={products} />
            <Box display={'flex'} justifyContent={'center'} py={4}>
                <Pagination
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    onChange={(_, page) => {
                        updatePage(page)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                />
            </Box>
        </MainLayout>
    )
}

export default ProductosPage
