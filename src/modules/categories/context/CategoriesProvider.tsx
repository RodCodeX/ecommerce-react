import apiProductos from '@/services/resources/products';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ProductType } from '../types/productType';

const DEFAULT_LIMIT = 10;

const getSkip = (page: number) => {
    return (page - 1) * DEFAULT_LIMIT
}

const getTotalPage = (totalItems: number) => {
    return Math.ceil(totalItems / DEFAULT_LIMIT)
}

interface ProductContextType {
    loading: boolean
    products: ProductType[]
    page: number
    totalPages: number
    slugCategory: string
    updatePage: (page: number) => void
    updateSearchValue: (value: string) => void
}


const ProductsContext = createContext<ProductContextType | null>(null)

const CategoriesProvider = ({ children }: { children: ReactNode }) => {

    const [products, setProducts] = useState<ProductType[]>([]);

    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);

    const [searchValue, setSearchValue] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);

    const [slugCategory, setSlugCategory] = useState<string>('');

    const router = useRouter();

    const pslugCategoryP = router.query.slugCategory as string

    const updatePage = (page: number) => {
        setPage(page);
    }

    const updateSearchValue = (value: string) => {
        setPage(1)
        setSearchValue(value);
    }

    useEffect(() => {

        if (!pslugCategoryP) return;

        setSlugCategory(pslugCategoryP)
        setLoading(true);
        apiProductos
            .getByIdCategory(pslugCategoryP, {
                limit: DEFAULT_LIMIT,
                skip: getSkip(page),
                q: searchValue
            })
            .then((response) => {
                console.log(response);
                setProducts(response.products);
                setTotalItems(response.total);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page, searchValue, pslugCategoryP])

    const value: ProductContextType = {
        loading,
        products,
        page,
        totalPages: getTotalPage(totalItems),
        updatePage,
        updateSearchValue,
        slugCategory
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

export default CategoriesProvider

export const useCategoriesContext = () => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error('useProductsContext should be called into ProductsProvider')
    }
    return context
}