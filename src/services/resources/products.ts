import { apiCore } from '../axiosInstance'

//? params, parametros de entrada solicitud
const getAll = (params: Record<string, string | number>) => {
  return apiCore({
    url: '/products/search',
    params,
  })
}

const getById = (idProducto: string) => {
  return apiCore({
    url: `/products/${idProducto}`,
  })
}

const getAllCategory = () => {
  return apiCore({
    url: '/products/categories',
  })
}

const getByIdCategory = (
  slug: string,
  params: Record<string, string | number>
) => {
  return apiCore({
    url: `/products/category/${slug}`,
    params,
  })
}

const apiProductos = {
  getAll,
  getById,
  getAllCategory,
  getByIdCategory,
}

export default apiProductos
