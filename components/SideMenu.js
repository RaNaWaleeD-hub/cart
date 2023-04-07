// components/SideMenu.js
import React from 'react';
import CartItem from './cartItem';

function SideMenu({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed right-0 top-0 h-full bg-gray-100 w-72 px-4 py-4">
      <h2 className="font-bold text-lg mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p className="mt-4 font-bold">Total: ${totalPrice}</p>
        </>
      )}
    </div>
  );
}

export default SideMenu;
