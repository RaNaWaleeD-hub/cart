// components/CartItem.js
import React from 'react';

function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="font-bold">{item.title}</h3>
        <p className="mt-2">
          {item.quantity} x ${item.price}
        </p>
      </div>
      <p className="font-bold">${item.price * item.quantity}</p>
    </div>
  );
}

export default CartItem;
