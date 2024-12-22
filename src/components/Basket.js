import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, products, resetBasket, total }) {
    return (
        <div className='basket'>
            {basket.map(item => (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
            ))}
            <div className='total-text'>
                Toplam: ${total}
            </div>
            <button onClick={resetBasket}>Sepeti Sıfırla</button>
        </div>
    )
}

export default Basket
