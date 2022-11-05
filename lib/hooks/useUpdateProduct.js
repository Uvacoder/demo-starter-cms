import { QueryClient, useMutation } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const updateProduct = async ({ id, ...data }) => {
  console.log(id, data)
  await fetch(`/api/products/updateProduct`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, ...data }),
  })
}

export const useUpdateProduct = (id) =>
  useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['product', id])
    },
  })
