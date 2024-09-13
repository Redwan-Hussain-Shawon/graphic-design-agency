"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import ProductList from "./ProductList";
import { data } from './product.js';

function ProductShow() {

   const [product,setProduct]  = useState();
   const [loading,setLoading] = useState(false);
  const getAllProducts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products")); 
      const productsArray =[] ;
      querySnapshot.forEach((doc) => {
        productsArray.push({id:doc.id,...doc.data()})
      });
      setProduct(productsArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching documents:", error); // Log the error if there's an issue
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="py-12 px-4">
      <div className="container">
        <h2 className="text-4xl mb-8 font-bold text-center ">Top Trending Design</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {loading?(
           ['','','','','','',''].map((_,key)=>(
            <div key={key}>
            <div className='w-full bg-gray-200 animate-pulse rounded-sm h-[200px]'></div>
            <div className='w-[80%] bg-gray-200 animate-pulse rounded-sm h-5 mt-3'></div>
            <div className='w-[60%] bg-gray-200 animate-pulse rounded-sm h-4 mt-3'></div>
            </div>
            ))
          ):product?.map((item,key)=>(
             <ProductList product={item} key={key} />
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default ProductShow;
