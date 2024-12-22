import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import products from './products.json'
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0)
    )
  }, [basket])

  const resetBasket = () => {
    setBasket([])
  }


  return (
    <div>
      <div>
        <Header money={money} total={total} />
      </div>
      <div className='container product-container'>
        {products.map(product => (
          <Product key={product.id} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>
      <div className='container'>
        {total > 0 && (
          <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
        )}
      </div>
    </div>
  );
}

export default App;
