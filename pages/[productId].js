import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'

export const getServerSideProps = async ({ params }) => {
const res = await fetch(`https:dummyjson.com/docs/products/${params.productId}`)
const product = await res.json()
return {
props: {
product
}
}
}

const ProductDetails = ({ product }) => {
const router = useRouter()
const cartItems = useSelector(state => state.cart.items)

const addToCart = () => {
// Dispatch an action to add the current product to the cart
}

return (
<Layout>
<div className="container mx-auto py-8">
<button className="text-blue-500" onClick={() => router.back()}> Back to Products</button>
<div className="flex flex-col md:flex-row mt-8">
<div className="md:w-1/2">
<img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
<div className="flex justify-center">
<img src={product.image} alt={product.title} className="w-12 h-12 object-cover mr-2 border border-gray-400 cursor-pointer" />
<img src={product.image} alt={product.title} className="w-12 h-12 object-cover mr-2 border border-gray-400 cursor-pointer" />
<img src={product.image} alt={product.title} className="w-12 h-12 object-cover mr-2 border border-gray-400 cursor-pointer" />
</div>
</div>
<div className="md:w-1/2 md:pl-8">
<h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
<p className="text-lg font-medium mb-4">${product.price}</p>
            <p className="mb-4">{product.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails