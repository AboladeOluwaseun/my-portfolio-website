import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmited, setIsSubmitted] = useState({
    send: false,
    success: undefined,
  });

  const contactForm = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted((prev) => {
      return {
        ...prev,
        send: true,
      };
    });

    await emailjs
      .sendForm(
        "service_ss9t5mc",
        "template_bdp2q1q",
        contactForm.current,
        "rmDF4hzmd3Jsbbt9n"
      )
      .then(
        (res) => {
          setIsSubmitted((prev) => {
            return {
              ...prev,
              send: false,
              success: true,
            };
          });
        },
        (err) => {
          setIsSubmitted((prev) => {
            setError(err.message);
            return {
              ...prev,
              send: false,
              success: false,
            };
          });
        }
      );
    e.target.reset();
  };
  return (
    <div
      data-aos="zoom-in-up"
      className=" bg-form-background mt-6 lmd:mt-0 flex items-start justify-between rounded-lg py-16 px-8 pb-4 lmd:max-w-[40%]"
    >
      <form ref={contactForm} onSubmit={onSubmit}>
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded inline-flex mb-4 bg-[#19191b] lmd:w-[49%] mr-1"
          type="text"
          name="user_name"
          placeholder="Your Full Name"
        />
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded inline-flex mb-4 bg-[#19191b] lmd:w-[49%] placeholder:text-[0.9rem] font-bold text-[#ffffff75]"
          type="number"
          name="user_number"
          placeholder="Your Phone Number"
        />
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded mb-4 bg-[#19191b] "
          type="email"
          name="user_email"
          placeholder="Your Email"
        />
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded mb-4 bg-[#19191b]"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="w-[100%] resize-none h-28 bg-[#19191b] border-none outline-none p-4"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <p className=" text-[1rem] font-bold text-[#f9af20] my-2 mx-0 p-0 max-w-[100%] ">
          {/* {errors.name
            ? errors.name?.message
            : errors.phone
            ? errors.phone?.message
            : errors.email
            ? errors.email?.message
            : errors.subject
            ? errors.subject?.message
            : errors.message
            ? errors.message?.message
            : ""} */}
        </p>
        <p className="success">
          {isSubmited.success && "Your message has been sent successfully"}
        </p>

        <button
          className="py-2 px-8 text-[1rem] bg-white-100 rounded-md text-[#2d3036] font-bold "
          type="submit"
        >
          {isSubmited.send ? "Sending ..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
