import { useQuery } from '@tanstack/react-query'

export const fetchProducts = async () => {
  const res = await fetch(`/api/products/getProducts`)
  const { data } = await res.json()
  return data
}

export const fetchProduct = async (id) => {
  const res = await fetch(`/api/products/getProduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  const { data } = await res.json()
  return data
}

export const useGetProducts = () => {
  return useQuery(['products'], fetchProducts)
}

export const useGetProduct = (id, initialData) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    initialData,
  })
}
