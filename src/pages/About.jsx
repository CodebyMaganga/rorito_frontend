import React, { useState } from "react";
import Navbar from "../components/Navbar";
import wateranimation from "../assets/wateranimation.json";
import deliveryanimation from "../assets/delivery.json";
import paymentanimation from "../assets/payment.json";
import Lottie from "lottie-react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import ContactUs from "../components/ContactUs";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar count={count} setCount={setCount} />
      <Carousel className="rounded-none mt-6">
        <div className="relative h-full w-full">
          <Lottie
            animationData={wateranimation}
            loop={true}
            autoplay={true}
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
            style={{ height: 500 }}
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/55">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-outfit  "
              >
                <span className="font-outfit text-blue-500">Refresh</span> with
                confidence!
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Our world-class machines ensure pristine water refills, while
                our unbeatable prices make us your go-to for all your gas needs.
                🌊💧🔥{" "}
                <span className="text-blue-400 font-bold">#QualityRefills</span>{" "}
                <span className="text-blue-400 font-bold">#AffordableGas"</span>
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Lottie
            animationData={deliveryanimation}
            loop={true}
            autoplay={true}
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
            style={{ height: 500 }}
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/55">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-alice "
              >
                <span className="font-outfit text-orange-400">Convenience</span>{" "}
                at your doorstep!
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Enjoy hassle-free refills with our home delivery service. From
                water to gas, we've got your needs covered with just a click
                away. 🚚💨{" "}
                <span className="font-outfit font-bold text-orange-400">
                  #DeliveredWithCare
                </span>
                <span className="font-outfit font-bold text-orange-400">
                  #RefillEase
                </span>
                "
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Lottie
            animationData={paymentanimation}
            loop={true}
            autoplay={true}
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
            style={{ height: 500 }}
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/55">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-alice "
              >
                <span className="font-outfit text-green-600">Seamless</span>{" "}
                <span className="font-outfit text-purple-300">
                  transactions
                </span>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Pay for your refills effortlessly with M-Pesa directly from your
                mobile. Convenience meets innovation at Rorito. 💳📱
                <span className="font-outfit text-green-600">
                  #MobilePayments
                </span>
                <span className="font-outfit text-green-600">
                  #EasyRefills"
                </span>
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
      <div>
        <div className="mt-8 border shadow-2xl py-4">
          <h2 className="text-center underline font-bold text-3xl">
            WELCOME TO RORITO
          </h2>
        </div>
        <div className="mt-4 p-4">
          <p className="leading-loose">
            At Rorito, we specialize in the convenient and eco-friendly refill
            of water and gas for your everyday needs. Whether it's keeping your
            home appliances running smoothly or ensuring you have access to
            clean drinking water, we've got you covered. In addition to our
            refill services, we also offer a range of high-quality gas-related
            products to meet your specific requirements. With a commitment to
            sustainability and customer satisfaction, we strive to provide
            reliable solutions that make your life easier. Join us in our
            mission to reduce waste and promote a greener future while enjoying
            the convenience of our services and products.
          </p>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default About;
