"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import SuccessMessage from "./SuccessMessage";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzeopdo");
  if (state.succeeded) {
    return <SuccessMessage />;
  }
  return (
    <>
      <section id="contact" className="mt-[8rem]">
        <div className="">
          <h1 className="text-center font-bold text-4xl my-12">
            Contact Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* First Name Input */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="input-box peer"
                  required
                />
                <label htmlFor="firstName" className="label-text">
                  First Name
                </label>
                <ValidationError
                  prefix="First Name"
                  field="firstName"
                  errors={state.errors}
                />
              </div>
              {/* End Of First Name Input */}
              {/* Last Name Input */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="input-box peer"
                  required
                />
                <label htmlFor="lastName" className="label-text">
                  Last Name
                </label>
                <ValidationError
                  prefix="Last Name"
                  field="lastName"
                  errors={state.errors}
                />
              </div>
              {/* End of Last Name Input */}
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Email Address Input */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="email"
                  id="email"
                  className="input-box peer"
                  required
                />
                <label htmlFor="email" className="label-text">
                  Email Address
                </label>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              {/* End of Email Address Input */}
              {/* Messages */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="message"
                  id="message"
                  className="input-box peer"
                  required
                />
                <label htmlFor="message" className="label-text">
                  Your Message
                </label>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              {/* End of Messages */}
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn-submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
