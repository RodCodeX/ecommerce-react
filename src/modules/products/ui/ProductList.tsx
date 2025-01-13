import React from 'react'
import { ProductType } from '../types/productType'
import ProductCard from './ProductCard'
import { LinearProgress, Stack } from '@mui/material'

interface ProductListProps {
    loading: boolean,
    products: ProductType[]
}
const ProductList = ({ products, loading }: ProductListProps) => {
    return (
        <Stack direction={'column'} spacing={1}>
            {loading && <LinearProgress />}
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Stack>
    )
}

export default ProductList
