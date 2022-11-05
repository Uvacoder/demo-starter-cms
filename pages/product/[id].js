import React from 'react'
import { getXataClient } from '../../lib/xata'
import Layout from '../../components/layout'
import ProductLayout from '../../components/Product/ProductLayout'
import DeleteProduct from '../../components/Product/DeleteProduct'
import UpdateProduct from '../../components/Product/UpdateProduct'
import { useGetProduct } from '../../lib/hooks'

const xata = getXataClient()

function Product({ id, initialProduct }) {
  const { data: product, isLoading } = useGetProduct(id, initialProduct)
  return (
    <Layout meta={{ name: product?.name || 'Product' }}>
      <div>
        <header className="my-3 flex flex-col items-center justify-between rounded-md md:flex-row">
          <h1 className="mb-3 truncate text-xl font-bold text-gray-700">
            <span className="mr-2 text-sm font-medium text-gray-500">
              Product:{' '}
            </span>
            {product?.name}
          </h1>
          <div className="flex items-center space-x-2">
            <UpdateProduct productId={id} product={product} />
            <DeleteProduct productId={id} />
          </div>
        </header>
        {isLoading ? (
          <div className="w-full text-center text-2xl font-bold text-gray-300">
            Loading...
          </div>
        ) : product ? (
          <ProductLayout product={product} />
        ) : (
          <div className="w-full text-center text-2xl font-bold text-gray-300">
            No details
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Product

export async function getStaticProps({ params }) {
  try {
    const data = await xata.db.products.read(params.id)
    return {
      props: { id: params.id, initialProduct: data },
    }
  } catch (error) {
    return {
      props: { id: params.id },
    }
  }
}

export async function getStaticPaths() {
  const products = await xata.db.products.getAll()
  return {
    paths: products.map((item) => ({
      params: { id: item.id },
    })),
    fallback: true,
  }
}
