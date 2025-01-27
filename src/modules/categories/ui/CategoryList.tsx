import SkeletonProduct from '@/common/components/ui/skeleton/SkeletonProduct'
import { Stack } from '@mui/material'
import { ProductType } from '../types/productType'
import CategoryCard from './CategoryCard'

interface ProductListProps {
    loading: boolean,
    products: ProductType[],
    onClickItem: (idProducto: number) => void
    onAddProduct: (product: ProductType) => void
}
const CategoryList = ({ products, loading, onClickItem, onAddProduct }: ProductListProps) => {
    return (
        <Stack
            direction="row"
            gap={2}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
        >
            {loading ? (
                [...Array(8)].map((_, index) => (
                    <SkeletonProduct
                        key={index}
                        index={index}
                    />
                ))
            ) : (
                products.map((product) => (
                    <CategoryCard
                        key={product.id}
                        product={product}
                        onClick={() => onClickItem(product.id)}
                        onAdd={() => onAddProduct(product)}
                    />
                ))
            )}
        </Stack>
    )
}

export default CategoryList
