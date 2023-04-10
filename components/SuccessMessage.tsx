import React from "react";

const SuccessMessage = () => {
  return (
    <>
      <div className=" my-12">
        <h1 className=" text-sm sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold capitalize">
          Your Message Has been Received by{" "}
          <span className=" text-emerald-500">Zechariah</span>.
        </h1>
      </div>
    </>
  );
};

export default SuccessMessage;
