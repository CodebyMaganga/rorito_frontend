import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar count={count} setCount={setCount} />
      <HeroSection count={count} setCount={setCount} />
    </>
  );
};

export default Home;
