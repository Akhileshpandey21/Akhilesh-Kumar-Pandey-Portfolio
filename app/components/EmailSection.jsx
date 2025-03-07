"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Initialize toast notifications
  const notifySuccess = () => toast('✅ Email send successfully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
    });
  const notifyError = () => toast('❌ Failed to send email!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
 try{
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      notifySuccess();
    }else{
      console.error("Error sending email:", resData.error);
      notifyError();
    }
  }catch(error){
    console.error("Error sending email:", resData.error);
    notifyError();
  }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Akhileshpandey21" target="_blank">
            <FaGithub className="text-white text-3xl sm:text-4xl p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/akhilesh-kumar-pandey-52b254258/"
            target="_blank"
          >
            <FaLinkedin className="text-white text-3xl sm:text-4xl p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition duration-300" />
          </Link>
          <Link href="https://x.com/PandeyAkhil4369" target="_blank">
            <FaTwitter className="text-white text-3xl sm:text-4xl p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition duration-300" />
          </Link>
          <Link
            href="https://www.instagram.com/its_me_akhil81/"
            target="_blank"
          >
            <FaInstagram className="text-white text-3xl sm:text-4xl p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition duration-300" />
          </Link>
        </div>
      </div>
      <div>
        <ToastContainer />
       
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        
      </div>
    </section>
  );
};

export default EmailSection;
