import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils";
import banner from "../assets/lipanampesa.jpg";
import { MdDelete } from "react-icons/md";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Checkout() {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useCart();
  console.log(cart);

  // Update count when cart changes
  useEffect(() => {
    if (cart.length === 0) {
      setCount(0); // Set count to 0 if cart is empty
    } else {
      // Calculate count based on the number of items in the cart
      const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
      setCount(totalCount);
    }
  }, [cart]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract form data for customer
    const first_name = event.target.elements["first_name"].value;
    const last_name = event.target.elements["last_name"].value;
    const phone_number = event.target.elements["phone"].value;
    const delivery_details = event.target.elements["delivery"].value;

    const customerData = {
      first_name,
      last_name,
      phone_number,
      delivery_details,
      products: cart.map((product) => ({
        product_id: product.id,
        name: product.name, // Include any other relevant product information
        price: product.price,
        brand: product.brand,
        // Add any other fields you need from the product
      })),
    };

    try {
      // Send customer data to backend to create customer
      const customerResponse = await fetch(`${BASE_URL}/customer-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (!customerResponse.ok) {
        throw new Error(`HTTP error! Status: ${customerResponse.status}`);
      }

      const customer = await customerResponse.json();
      console.log("Customer created:", customer);

      toast.success("Order placed succesfully!");

      // Handle the response and continue with the rest of your code
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to place order!Please try again");
    }
  };

  const handleCartOrder = () => {
    setCount(0);
  };

  const handleDelete = (id) => {
    const product = cart.filter((product) => product.id != id);
    setCart(product);
  };

  return (
    <>
      <Navbar count={count} setCount={setCount} />
      <h2 className="text-center font-bold text-lg mt-20">
        Billing and Delivery details
      </h2>
      <div>
        <img
          className="w-full h-[200px] object-cover"
          src={banner}
          alt="lipanampea"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 ml-8">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name <span className="text-red-700">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name <span className="text-red-700">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last_name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number <span className="text-red-700">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add Delivery Details(street name etc){" "}
                  <span className="text-red-700">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="delivery"
                    name="delivery"
                    type="text"
                    autoComplete="delivery"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }} className="border ml-6 mr-6">
          <div style={{ flex: 1 }}>
            <h2 className="text-center font-bold text-xl">Checkout</h2>
            <table style={{ width: "100%" }}>
              <thead>
                <tr className="border">
                  <th>Product</th>
                  <th className="border-l">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border">
                    <td className="px-4">{item.name}</td>
                    <td className="border-l px-4">ksh{item.price}</td>
                    <MdDelete onClick={() => handleDelete(item.id)} />
                  </tr>
                ))}
                <tr className="border">
                  <td className="border px-4">Total</td>
                  <td className="border-l px-4">
                    ksh
                    {cart.reduce((total, item) => total + item.price, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6 ">
          <button
            type="submit"
            onClick={handleCartOrder}
            className="rounded-md w-60 bg-[#21A179] mb-6 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#C4AF9A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Order Now
          </button>
        </div>
      </form>
    </>
  );
}
