import React from 'react'
import { ProductType } from '../types/productType'
import ProductCard from './ProductCard'
import { LinearProgress, Stack } from '@mui/material'

interface ProductListProps {
    loading: boolean,
    products: ProductType[],
    onClickItem: (idProducto: number) => void
    onAddProduct: (product: ProductType) => void
}
const ProductList = ({ products, loading, onClickItem, onAddProduct }: ProductListProps) => {
    return (
        <Stack direction={'column'} spacing={1}>
            {loading && <LinearProgress />}
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onClickItem(product.id)}
                    onAdd={() => onAddProduct(product)}
                />
            ))}
        </Stack>
    )
}

export default ProductList
