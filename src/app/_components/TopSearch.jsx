"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/navigation";

function TopSearch() {
  const [searchValue, setSearchValue] = useState();
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const router = useRouter();
  const clickSearch = ()=>{
    router.push(`/${searchValue}`)
  }

  return (
    <div className="bg-primary text-white py-16  px-2">
      <div className="container">
        <h2 className="text-4xl font-bold text-center">
          Find the Perfect Design
        </h2>
        <p className="text-base text-center mt-1 mb-4">
          Editable Free & Premium Vector Graphics Design in BD
        </p>
        <label
          for="search"
          className="border border-gray-200 rounded-sm pl-3 max-w flex items-center max-w-[600px] mx-auto "
        >
          <input
            id="search"
            type="text"
            placeholder="Search The Products"
            className="text-center border-none outline-none bg-transparent text-gray-200 placeholder:text-gray-200 w-full max-w-full"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="w-fit bg-white text-black cursor-pointer  hover:bg-gray-200 p-3 py-2">
            <Search onClick={clickSearch} />
          </div>
        </label>
      </div>
    </div>
  );
}

export default TopSearch;
