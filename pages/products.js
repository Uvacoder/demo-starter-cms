import Layout from '../components/layout'
import ProductItems from '../components/Products/ProductItems'
import ProductItemsSkeleton from '../components/Products/ProductItemsSkeleton'
import ProductHeader from '../components/Products/ProductHeader'
import AddProduct from '../components/Product/AddProduct'
import { useGetProducts } from '../lib/hooks'

function Products() {
  const { isLoading, isError, error, data: products } = useGetProducts()

  return (
    <div>
      <header className="mt-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700">Products</h1>
        <div className="flex items-center space-x-2">
          <AddProduct />
        </div>
      </header>
      <ProductHeader />
      {isLoading ? (
        <ProductItemsSkeleton />
      ) : isError ? (
        <div className="h-[100px] w-full text-center font-bold text-gray-300">
          {error?.message || 'Something went wrong!'}
        </div>
      ) : (
        <ProductItems products={products} />
      )}
    </div>
  )
}

export default Products

Products.getLayout = function getLayout(page) {
  return <Layout meta={{ name: ['products'] }}>{page}</Layout>
}
