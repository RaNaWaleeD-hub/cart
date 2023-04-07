import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import ImageCarousel from '../../components/ImageCarousel'
import Layout from '../../components/Layout'
import { addToCart } from '../../store/actions'

const ProductDetails = ({ product }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = e => {
    setQuantity(parseInt(e.target.value))
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product.id, quantity))
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2">
            <img src={product.image} alt={product.name} className="mb-4" />
            <ImageCarousel images={product.images} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-lg font-medium mb-4">${product.price}</p>
            <p className="mb-4">{product.description}</p>
            <div className="mb-4">
              <label htmlFor="quantity" className="mr-2 font-medium">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                value={quantity}
                onChange={handleQuantityChange}
                className="border rounded-md py-2 px-3"
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { productId } = params
  const res = await fetch(`https://dummyapi.io/data/api/products/${productId}`, {
    headers: { 'app-id': 'dummy-app-id' },
  })
  const product = await res.json()

  return { props: { product } }
}

export default ProductDetails
