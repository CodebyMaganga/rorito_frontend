import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import AboutCards from "./AboutCards";
import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";
import { BASE_URL } from "../../utils";

const HeroSection = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((data) => data.json())
      .then((resp) => {
        console.log(resp);
        setFilteredProduct(resp);
        setDisplayedProducts(resp.slice(0, productsPerPage));
      });
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setDisplayedProducts(filteredProduct.slice(startIndex, endIndex));
  };

  const handleCategory = (category) => {
    const newProduct = filteredProduct.filter(
      (product) => product.category === category
    );
    setDisplayedProducts(newProduct.slice(0, productsPerPage));
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setCurrentPage(1);

    const filteredProducts = filteredProduct.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    setDisplayedProducts(filteredProducts.slice(0, productsPerPage));
  };

  return (
    <>
      <div className="flex flex-row justify-around border py-4 shadow">
        <div className="flex flex-row justify-start">
          <div className="">
            <button
              onClick={() => handleCategory("Water")}
              className="text-sm font-light bg-[#E6E6EA] px-3 rounded-full mr-2"
            >
              Water
            </button>
          </div>
          <div>
            <button
              onClick={() => handleCategory("Gas")}
              className="text-sm font-light bg-[#E6E6EA] px-3 rounded-full "
            >
              Gas
            </button>
          </div>
          <div>
            <button
              onClick={() => handleCategory("Milk")}
              className="text-sm font-light bg-[#E6E6EA] px-3 rounded-full ml-2"
            >
              Milk
            </button>
          </div>
        </div>
        <div className="flex flex-row relative">
          <div>
            <input
              value={searchQuery}
              onChange={(e) => handleSearch(e)}
              className="w-32 h-6 rounded-full bg-[#F4F4F8] text-sm font-light"
            />
          </div>
          <div className="absolute right-[8px] top-[3px]">
            {/* Call handleSearch when search icon is clicked */}
            <CiSearch onClick={handleSearch} className="text-lg rounded-full" />
          </div>
        </div>
      </div>
      <ProductCarousel />
      <AboutCards />
      <ProductCard
        filteredProduct={filteredProduct}
        setFilteredProduct={setFilteredProduct}
        displayedProducts={displayedProducts}
        setDisplayedProducts={setDisplayedProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        paginate={paginate}
      />
    </>
  );
};

export default HeroSection;
