import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useCart } from "./CartContext";

const HeroSection = ({ count, setCount }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
        setFilteredProducts(data); // Set filtered products initially
      });
  }, []);

  const handleCategory = (category) => {
    const filteredProduct = allProducts.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredProduct);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <div className="mt-20 flex flex-row justify-center border py-4 shadow-2xl">
        <button
          onClick={() => handleCategory("Water")}
          className="bg-[#1E1E24] text-white px-5 py-2 rounded-full mr-4"
        >
          Water
        </button>
        <button
          onClick={() => handleCategory("Gas")}
          className="bg-[#1E1E24] text-white px-5 py-2 rounded-full mr-4"
        >
          Gas
        </button>
        <button
          onClick={() => handleCategory("Regulator")}
          className="bg-[#1E1E24] text-white px-5 py-2 rounded-full mr-4"
        >
          Regulator
        </button>
        <button
          onClick={() => setFilteredProducts(allProducts)}
          className="bg-[#1E1E24] text-white px-5 py-2 rounded-full mr-4"
        >
          All
        </button>
      </div>
      <div
        className="grid place-items-center 
     md:flex md:flex-row md:flex-wrap md:justify-around"
      >
        {currentItems.map((product) => (
          <Card key={product.id} className="w-96 mt-6 shadow-2xl">
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={product.image_url}
                alt={product}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {product.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  ksh{product.price}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Brand:{product.brand}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                onClick={() => handleAddToCart(product)}
                ripple={false}
                fullWidth={true}
                className="bg-[#1E1E24] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Pagination buttons */}
      <div className="flex justify-center mt-4 mb-12 border content-center">
        {/* Previous button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-[#1E1E24] rounded-lg px-5 text-white   mr-4"
        >
          <GrFormPreviousLink />
        </button>

        <div className="flex justify-center mt-8">
          {Array(Math.ceil(filteredProducts.length / itemsPerPage))
            .fill()
            .map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`bg-[#1E1E24] text-white px-3 py-1 rounded-full mr-2 ${
                  currentPage === i + 1 ? "bg-gray-800" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
        </div>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
          }
          className="bg-[#1E1E24] text-white px-5 py-1 rounded-lg ml-4"
        >
          <GrFormNextLink />
        </button>
      </div>
    </>
  );
};

export default HeroSection;
