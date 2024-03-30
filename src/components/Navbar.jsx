import React, { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import transparentlogo from "../assets/Rorito_transparent.png";
import { useCart } from "./CartContext";

const Navbar = ({ count, setCount }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    // Check if the user is already authenticated (e.g., token exists)
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
    const savedCartCount = localStorage.getItem("count");
    if (savedCartCount) {
      setCount(parseInt(savedCartCount, 10));
    }

    console.log("Data from local storage:", token, savedCartCount);
  }, []);

  const handleLogout = () => {
    // Clear the access token from storage and set isAuthenticated to false
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // Save cart count to localStorage whenever it changes
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div className="flex flex-row justify-around  py-4  w-full bg-[#2AB7CA]">
        <div>
          <Link to="/">
            <img
              src={transparentlogo}
              alt="logo"
              className="sm:h-[50px] max-w-[45px]"
            />
          </Link>
        </div>
        <div className="flex flex-row py-2">
          <Link to="/">
            <p className="mr-4 text-[12px] md:text-[14px]  ">HOME</p>
          </Link>

          <Link to="/checkout">
            <p className=" text-[12px] md:text-[14px]">CHECKOUT</p>
          </Link>
        </div>
        <div className="relative py-2">
          {/* Cart icon */}
          <Link to="/checkout">
            <TiShoppingCart className="text-sm md:text-lg mt-1 mr-6" />
          </Link>
          {/* Cart count */}

          <span className="absolute top-[-1px] right-[12px] bg-red-500 text-white text-[8px]  rounded-full px-2 py-1 text-[10px]">
            {cart.length}
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
