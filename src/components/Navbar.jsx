import React, { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import transparentlogo from "../assets/screenshot.png";

const Navbar = ({ count, setCount }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      <div className="flex flex-row justify-around bg-[#21A179] py-4 fixed w-full top-0 z-50">
        <div>
          <Link to="/">
            <img
              src={transparentlogo}
              alt="logo"
              className="sm:h-[40px] max-w-[100px]"
            />
          </Link>
        </div>
        <div className="flex flex-row py-2">
          <Link to="/">
            <p className="mr-4 text-[12px] md:text-[14px]  ">HOME</p>
          </Link>
          <Link to="/aboutus">
            <p className="mr-4 text-[12px] md:text-[14px]">ABOUT US</p>
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
          {count > 0 && (
            <span className="absolute top-[-1px] right-[12px] bg-red-500 text-white text-[8px]  rounded-full px-2 py-1 text-[10px]">
              {count}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
