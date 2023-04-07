import { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function Products({ addToCart }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data.products)
      })
  }, [])

  return (
    <div className="flex flex-wrap justify-center mt-8 h-30" >
      {products.map(product => (
       <div className="w-72 rounded-lg shadow-lg overflow-hidden mx-4">
      <img src={product.images[3]} alt={product.title} className="w-full" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{product.title}</h2>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 font-bold">${product.price}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
      ))}
    </div>
  )
}

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="fixed top-0 right-0 h-screen w-80 bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-white p-3">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p  className='text-white'>No items in cart</p>
      ) : (
        <div className="flex flex-col space-y-4 text-white p-3">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between text-white">
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item)}><span className="text-red-500 bold p-2">X</span></button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [cartItems, setCartItems] = useState([])
  const [showCart,setShowCart]= useState(false)

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item.id !== product.id)
    setCartItems(updatedCartItems)
  }

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <h1 className="text-4xl font-bold mt-4">Welcome to the Shopping Cart</h1>

        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center" onClick={() => setShowCart(!showCart)}>
            <FaShoppingCart className="mr-2" />
            Cart ({cartItems.length})
          </button>
        </div>

        <Products addToCart={addToCart} />

       {showCart&& <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
      </main>
    </div>
  )
}
