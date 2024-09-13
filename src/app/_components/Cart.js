import { useContext } from 'react';
import { LoginContext } from '../_context/LoginContext';
import { CartContext } from '../_context/CartContext';
import VerifyToken from './VerifyToken';

const useCart = () => {
  const { loginActive, setLoginActive } = useContext(LoginContext);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = async (id) => {
    const token = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      setLoginActive(true);
    } else {
      const data = await VerifyToken(); // Ensure VerifyToken is defined correctly

      const isInCart = cart.some((item) => item === id);
      console.log(isInCart);

      if (!isInCart) {
        const updatedCart = [...cart, id];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      } else {
        alert('This item is already in your cart.');
      }

      console.log(cart);
    }
  };

  return {addToCart}
};

export default useCart;
