// EmailForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import toast from "react-hot-toast";



const EmailForm = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      name: "Comzent User",
      title: "Subscription Request",
      message: "Hi, I want to subscribe to Comzent newsletter.",
    };

    emailjs
      .send(
        "service_eruwmvv",          
        "template_8psmkkk",         
        templateParams,
        "_h_8bYePH0Dm4hFWZ"         
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          toast.success("Email sent successfully!");
          
          setEmail(""); // Reset email input
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          toast.error("Email sending failed. Try again!");
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex items-center bg-transparent rounded-full border border-gray-400 overflow-hidden w-[300px] md:w-[320px]"
    >
      <input
        type="email"
        name="user_email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-4 py-3 bg-transparent text-white placeholder-white focus:outline-none hover:bg-black/10 transition-colors"
        required
      />
      <button
        type="submit"
        className="bg-[#F5A623] hover:bg-[#e79a1e] transition-colors px-3 py-3 flex items-center justify-center rounded-r-full"
      >
        <FiSend className="text-black text-3xl mr-3" />
      </button>
    </form>
  );
};

export default EmailForm;
