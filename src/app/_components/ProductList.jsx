"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { LoginContext } from "../_context/LoginContext";
import { CartContext } from "../_context/CartContext";
import useCart from "./Cart";

function ProductList({ product }) {
  const { loginActive, setLoginActive } = useContext(LoginContext);
  const { cart, setCart } = useContext(CartContext);
  const { addToCart } = useCart();

  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = async (id) => {
    await addToCart(id);
  };

  return (
    <div className="shadow-md rounded-sm h-full relative group overflow-hidden">
      <div
        className="bg-white text-gray-800 absolute z-10 -right-12 group-hover:right-0 duration-300 top-5 w-10 rounded-[1px] h-8 flex items-center justify-center cursor-pointer"
        title="Add To Cart"
        onClick={() => handleAddToCart(product.id)}
      >
        <ShoppingCart />
      </div>
      <Link href={`product/${product.id}`} className="">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 h-[256px] flex items-center justify-center bg-gray-200 z-10">
              <span>Loading...</span>
            </div>
          )}
          <img
            src={product?.image}
            alt="image"
            className={`object-cover w-full h-full transition-transform duration-500 ${
              isLoading ? "opacity-0" : "hover:scale-110 opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
          />
          <div className="bg-primary text-white inline absolute top-3 px-2 left-0">
            -50%
          </div>
        </div>
        <h3 className="text-lg font-semibold px-2 pt-3 line-clamp-1">
          {product?.title}
        </h3>
        <p className="px-2 text-base text-gray-500 mb-1">{product?.category}</p>
        <p className="px-2 text-base text-gray-400 font-medium pb-2">
          <del>{product?.prize}৳</del>
          <span className="ml-2 text-primary">{product?.discount_prize}৳</span>
        </p>
      </Link>
    </div>
  );
}

export default ProductList;
