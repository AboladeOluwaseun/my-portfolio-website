import React, { useContext, useState } from "react";
import { Container } from "..";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
import DataContext from "../../context/DataContext";
import emailjs from "@emailjs/browser";
import { Notification, validateEmail } from "../../helpers";
import {
  EMAILJS_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../../config";
import ContactForm from "./ContactForm";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

const notif = new Notification(3000);

const Contacts = () => {
  // contact info handler
  const info = (heading, alt, text) => {
    return (
      <div className="max-w-[50%] mt-6">
        <h2 className="text-yellow">{heading}</h2>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <section className=" mt-[6rem] max-w-[80%] mx-auto" id="contacts">
      <div className="lmd:flex">
        <div className="lmd:max-w-[65%]">
          <div>
            <SubHeading title={"GET IN TOUCH WITH ME"} />
            <Heading heading="Contacts" />
          </div>

          <div className="text-[0.8rem] text-white-200 ">
            <p className="mt-6 max-w-[40%]">
              To get my service please don't hesitate to contact me, and I will
              ensure that you will get the best of my services
            </p>
            <div className="mt-6 flex lmd:block items-center justify-between">
              {info(
                "Address",
                "Location Icon",
                "Makka Almukarama Street, Hodan, Mogadishu - Somalia"
              )}
              {info(
                "Email",
                "Email Icon",
                `info@mhbaando.so | www.mhbaando.so`
              )}
            </div>
          </div>
        </div>
        {/* /contact form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
