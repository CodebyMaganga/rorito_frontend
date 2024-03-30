import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { MdPhonelinkLock } from "react-icons/md";
import { TbClock12 } from "react-icons/tb";

const AboutCards = () => {
  return (
    <>
      <div className="mb-4 grid place-items-center mt-4">
        <h2 className="font-bold text-lg">About Us</h2>
      </div>
      <div className="mt-4 grid place-items-center sm:flex sm:flex-row sm:justify-around">
        <div className="bg-[#E6E6EA] grid place-items-center w-40 p-6">
          <div>
            <MdDeliveryDining className="text-6xl" />
          </div>
          <div>
            <p className="mt-4 text-center font-light text-sm">
              Fast Delivery in Kitengela,Athi River and their environs
            </p>
          </div>
        </div>
        <div className="bg-[#E6E6EA] grid place-items-center mt-4 w-40 p-6">
          <div>
            <MdPhonelinkLock className="text-6xl" />
          </div>
          <div>
            <p className="mt-4 text-center font-light text-sm">
              Secure payments with Lipa na Mpesa
            </p>
          </div>
        </div>
        <div className="bg-[#E6E6EA] grid place-items-center mt-4 w-40 p-6">
          <div>
            <TbClock12 className="text-6xl" />
          </div>
          <div>
            <p className="mt-4 text-center font-light text-sm">
              Timely services from 6am-10pm
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCards;
