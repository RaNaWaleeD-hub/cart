import { useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/api/products')
  const products = await res.json()
  return {
    props: {
      products
    }
  }
}

const Products = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-8">Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-md p-4">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-gray-700 font-medium mt-2">${product.price}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-4">Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from(Array(totalPages).keys()).map(page => (
            <button key={page} onClick={() => setCurrentPage(page + 1)} className={`mx-2 px-4 py-2 rounded-full ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}>{page + 1}</button>
            ))}
            </div>
            </div>
            </Layout>
            )
            }
            
            export default Products
