import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
function App() {
  const showCart = useSelector( state => state.ui.isCartVisible);
  const cart = useSelector(state => state.cart);
  useEffect(()=>{
    console.log('in UE');
    fetch('https://movie-http-c62a0-default-rtdb.firebaseio.com/cart.json',{
      method: 'PUT',
      body: JSON.stringify(cart),
    },[cart]);
  });
  return (
    <Layout>
    { showCart && <Cart />}
    <Products />
  </Layout>
  );
}

export default App;
