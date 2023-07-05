import React from 'react';

import CartComponents from './CartComponents';

function CartScreen({ params, searchParams: { quantity, id } }) {
  console.log(id, quantity);
  function removeCartHandler(id) {}

  return (
    <>
      <CartComponents id={id} quantity={quantity} />
    </>
  );
}

export default CartScreen;
