import apiProductos from '@/services/resources/products';
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
    updatePage: (page: number) => void
    updateSearchValue: (value: string) => void
}


const ProductsContext = createContext<ProductContextType | null>(null)

const ProductsProvider = ({ children }: { children: ReactNode }) => {

    const [products, setProducts] = useState<ProductType[]>([]);

    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);

    const [searchValue, setSearchValue] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);

    const updatePage = (page: number) => {
        setPage(page);
    }

    const updateSearchValue = (value: string) => {
        setPage(1)
        setSearchValue(value);
    }

    //? Manera de manejo de responsabilidades
    useEffect(() => {
        setLoading(true)
        apiProductos
            .getAll({
                limit: DEFAULT_LIMIT,
                skip: getSkip(page),
                q: searchValue
            }).then((response) => {
                console.log(response);
                setProducts(response.products)
                setTotalItems(response.total)
            }).finally(() => {
                setLoading(false)
            })
    }, [page, searchValue]) //? Cuando la pagina (page) o searchValue cambien ejecute nuevamente el metodo

    const value: ProductContextType = {
        loading,
        products,
        page,
        totalPages: getTotalPage(totalItems),
        updatePage,
        updateSearchValue
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

export const useProductsContext = () => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error('useProductsContext should be called into ProductsProvider')
    }
    return context
}




//!Otra manera
// useEffect(() => {
//     axios({
//         url: 'https://dummyjson.com/products',
//         params: {
// limit: DEFAULT_LIMIT,
// skip: getSkip(page)
//         }
//     }).then((response) => {
//         console.log(response);
//         setProducts(response.data.products)
//         setTotalItems(response.data.total)
//     })
// }, [page])