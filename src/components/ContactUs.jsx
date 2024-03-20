import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="border py-3 shadow-lg">
        <h2 className="text-center font-bold text-xl">Contact Us</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-6 place-items-center ">
        <div className="bg-[#1E1E24] text-white rounded-lg md:ml-4 min-w-full">
          <div className="text-center text-2xl font-bold mt-10 ">
            Contact Information
          </div>
          <div className="text-center mt-6">
            Fill up the form and our Team will get back to you within 24 hours.
          </div>
          <div>
            <div className="grid place-items-center  mt-10">
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div>
                    <IoIosCall className="text-2xl" />
                  </div>
                  <div>+254721335629</div>
                </div>
                <div className="flex flex-row gap-6 mt-6">
                  <div>
                    <IoMdMail className="text-2xl" />
                  </div>
                  <div>hmwambonu@gmail.com</div>
                </div>
                <div className="flex flex-row gap-6 mt-6 mb-6">
                  <div>
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>+254721335629</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray" className="font-alice">
              Contact Form
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-alice"
                >
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-alice"
                >
                  Phone number
                </Typography>
                <Input
                  size="lg"
                  placeholder="+254"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-alice"
                >
                  Tell us something
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  placeholder="say sth"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <Button className="mt-12" fullWidth>
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
