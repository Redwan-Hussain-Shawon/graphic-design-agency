"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { UserRoundPlus } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { X } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LoginTab } from "./LoginTab";
import { LoginContext } from "../_context/LoginContext";
import { CartContext } from "../_context/CartContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState();
  const { loginActive, setLoginActive } = useContext(LoginContext);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [isClickLogin, setIsClickLogin] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserLogin(true);
    }
  }, [isLogin]);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserLogin(false);
  };

  return (
    <div className="shadow-md pr-6 sticky top-0 bg-white z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="./">
              <img src="/logo.svg" alt="" className="w-20 h-[60px]" />
            </Link>
            <nav
              className={`${
                isMenuActive ? "top-0" : "top-[-5000px]"
              } sm:static fixed w-full duration-300 h-full bg-white pl-8 sm:pl-0 `}
            >
              <div
                className="px-4 hover:text-primary py-7 ggapy flex sm:hidden justify-end "
                onClick={() => setIsMenuActive(false)}
              >
                <X />
              </div>
              <ul
                className={`${
                  isMenuActive ? "flex-col" : ""
                } flex sm:items-center gap-7 gap-y-5 text-[15px] sm:flex-row`}
              >
                <li>
                  <Link className="hover:text-primary" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <span className="hover:text-primary flex gap-1 items-center">
                        Categories
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <DropdownMenuItem asChild>
                        <Link href="/banner">Banner</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/poster">Poster</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/flyer">Flyer</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/business-card">Business Card</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/free-resources">Free Resources</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <DropdownMenu open={isLogin} onOpenChange={setIsLogin}>
              <DropdownMenuTrigger
                onMouseEnter={() => setIsLogin(true)}
                onMouseLeave={() => setIsLogin(false)}
              >
                <h5 className="hover:text-primary cursor-pointer">
                  <UserRoundPlus />
                </h5>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onMouseEnter={() => setIsLogin(true)}
                onMouseLeave={() => setIsLogin(false)}
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userLogin ? (
                  <DropdownMenuItem asChild>
                    <Link href="#" onClick={handleLogout}>
                      Logout
                    </Link>
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="#" onClick={() => setLoginActive(true)}>
                        Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="#" onClick={() => setLoginActive(true)}>
                        Register
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            {userLogin ? (
              <Link href="cart" className="hover:text-primary">
                <div className="relative">
                  <ShoppingCart />
                  <div className="absolute -right-2 -top-2 w-4 text-white hover:text-white flex items-center justify-center text-[11px] font-normal h-4 rounded-full bg-primary"> 1{cart?.length}</div>
                </div>
              </Link>
            ) : (
              <Link
                href="#"
                className="hover:text-primary"
                onClick={() => setIsClickLogin(true)}
              >
                <ShoppingCart />
              </Link>
            )}
            <div
              className="sm:hidden block hover:text-primary"
              onClick={() => setIsMenuActive(true)}
            >
              <AlignJustify />
            </div>
          </div>
        </div>
      </div>
      <LoginTab />
    </div>
  );
}

export default Header;
