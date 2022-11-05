import { QueryClient, useMutation } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const addProduct = async (data) => {
  await fetch(`/api/products/createProduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const useAddProduct = () =>
  useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
    },
  })
