import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (Object.keys(errors).length === 0) {
      const userInfo = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      try {
        // Send form data to getform.io
        await axios.post("https://getform.io/f/ayvpegpb", userInfo);

        // Send form data to email using EmailJS
        await emailjs.sendForm('service_0u8fqys', 'template_8ecfxpr', form.current, 'htTrJO5Q4Jj-hZG4i');

        // Display success toast
        toast.success("Your message has been sent");
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Something went wrong");
      }
    } else {
      // Display error toast if the form is not valid
      toast.error("Please fill out all required fields correctly");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 my-16"
    >
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
        Contact Me
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center">
        Feel free to reach out by filling out the form below.
      </p>
      <div className="flex justify-center">
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gradient-to-r from-teal-500 to-blue-600 shadow-xl w-full max-w-lg px-8 py-8 rounded-lg border border-gray-300"
        >
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">
            Send Your Message
          </h2>
          <div className="flex flex-col mb-6">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: "Full name is required" })}
              className="shadow-sm border rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-300 text-sm mt-1">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="shadow-sm border rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-300 text-sm mt-1">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="shadow-sm border rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
            />
            {errors.message && <span className="text-red-300 text-sm mt-1">{errors.message.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-gray-800 rounded-lg py-3 px-4 w-full mt-4 hover:bg-yellow-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
