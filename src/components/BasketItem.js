import React from 'react'

function BasketItem({item, product}) {
  return (
    <div className='title-amaount-text'>
        {product.title} x {item.amount}
    </div>
  )
}

export default BasketItem
