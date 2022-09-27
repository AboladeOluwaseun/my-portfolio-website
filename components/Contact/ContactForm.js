import React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [isSubmited, setIsSubmitted] = useState({
    send: false,
    success: undefined,
  });

  const contactForm = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    setIsSubmitted((prev) => {
      return {
        ...prev,
        send: true,
      };
    });

    await emailjs
      .sendForm(
        "gmail",
        "template_w1jd3rl",
        contactForm.current,
        "user_aZUlxr77j4b0Vq1hWXrFl"
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
    <div className=" bg-form-background mt-6 lmd:mt-0 flex items-start justify-between rounded-lg pt-16 px-8 pb-4 lmd:max-w-[70%]">
      <form ref={contactForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded inline-flex mb-4 lmd:w-[49%] mr-2"
          type="text"
          {...register("name", { required: "Please Provide a Name" })}
          placeholder="Your Full Name"
        />
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded inline-flex mb-4 lmd:w-[49%]"
          type="number"
          {...register("phone", {
            required: "Please Provide a Phone Number",
          })}
          placeholder="Your Phone Number"
        />
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded mb-4  "
          type="email"
          {...register("email", { required: "Pleae Provide an Email" })}
          placeholder="Your Email"
        />
        <input
          className="w-[100%] py-[0.6rem] px-4 leading-[150%] rounded mb-4   "
          type="text"
          {...register("subject", {
            required: "Please Provide a Subject",
          })}
          placeholder="Subject"
        />
        <textarea
          placeholder="Your Message"
          {...register("message", {
            required: "Please Provide a Message",
          })}
        ></textarea>
        <p>
          {errors.name
            ? errors.name?.message
            : errors.phone
            ? errors.phone?.message
            : errors.email
            ? errors.email?.message
            : errors.subject
            ? errors.subject?.message
            : errors.message
            ? errors.message?.message
            : ""}
        </p>
        <p className="success">
          {isSubmited.success && "Your message has been sent successfully"}
        </p>

        <button type="submit">
          {isSubmited.send ? "Sending ..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
