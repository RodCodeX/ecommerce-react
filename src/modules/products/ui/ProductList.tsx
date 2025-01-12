import React from 'react'
import { ProductType } from '../types/productType'
import ProductCard from './ProductCard'
import { Stack } from '@mui/material'

interface ProductListProps {
    products: ProductType[]
}
const ProductList = ({ products }: ProductListProps) => {
    return (
        <Stack direction={'column'} spacing={1}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Stack>
    )
}

export default ProductList
