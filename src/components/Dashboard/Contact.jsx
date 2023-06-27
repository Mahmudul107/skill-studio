import React from "react";
import { Helmet } from "react-helmet-async";
import { FaInbox, FaLocationArrow, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <Helmet>
        <title>Contact - Skill Studio</title>
      </Helmet>
      <div className="hero h-screen bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse bg-slate-200 w-screen border-red-400 mx-auto">
          <div className="text-center lg:text-left p-8">
            <h2 className="text-4xl font-bold mb-4 text-fuchsia-500 text-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-bounce">
              Contact Us
            </h2>

            <div className="divider"></div>
            <p className="text-lg flex items-center gap-2 mb-2 card bg-slate-800 p-8 my-8 text-white">
              {" "}
              <FaInbox className="text-fuchsia-500 rounded-full w-5 h-5" />
              <span className="text-primary">Email:</span>{" "}
              mahmudulislam378@gmail.com
            </p>
            <p className="flex gap-2 items-center text-lg mb-2 card bg-slate-800 p-8 my-8 text-white">
              <FaPhone className="text-fuchsia-500 rounded-full w-5 h-5" />
              <span className="text-primary">Phone:</span> +8801868697940
            </p>
            <p className="flex items-center gap-2 text-lg card bg-slate-800 p-8 my-8 text-white">
              <FaLocationArrow className="text-fuchsia-500 rounded-full w-5 h-5 " />
              <span className="text-primary">Location:</span> Dhaka, Bangladesh
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
