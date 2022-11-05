import { QueryClient, useMutation } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const deleteProduct = async (id) => {
  await fetch(`/api/products/deleteProduct`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
}

export const useDeleteProduct = () =>
  useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      window.location.replace('/products')
      queryClient.invalidateQueries(['products'])
    },
  })
