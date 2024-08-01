import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ayvpegpb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 my-16"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Contact Me
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Please fill out the form below to get in touch with me.
      </p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg w-full max-w-lg px-8 py-6 rounded-lg border border-gray-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Your Message
          </h2>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: "Full name is required" })}
              className="shadow-sm border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
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
              className="shadow-sm border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="shadow-sm border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
