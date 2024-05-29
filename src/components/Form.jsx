import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const [step, setStep] = useState(1);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!data.name) {
      newErrors.name = "Name is required";
    }

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!data.phonenumber) {
      newErrors.phonenumber = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(data.phonenumber)) {
      newErrors.phonenumber = "Phone number is invalid";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setStep(step + 1);
      setShowWelcomeMessage(true);
      setTimeout(() => setShowWelcomeMessage(false), 5000); // It will hide the welcome message after 5 sec
    } else {
      setErrors(formErrors);
    }
  };

  const renderForm = () => (
    <>
      <div className="space-y-2">
        <p className="font-bold text-3xl">Personal Info</p>
        <p className="text-sm sm:text-base">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <form onSubmit={handleSubmit} className="py-7 space-y-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder=" ajani halimah"
            className="py-1 px-2 border text-sm border-blue-900 rounded-md"
          />
          {errors.name && (
            <p className="text-blue-500 text-sm">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="me@gmail.com"
            className="py-1 px-2 border  text-sm border-blue-900 rounded-md"
          />
          {errors.email && (
            <p className="text-blue-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="text"
            name="phonenumber"
            value={data.phonenumber}
            onChange={handleChange}
            placeholder="e.g., +2347049719161"
            className="py-1 px-2 border text-sm border-blue-900 rounded-md"
          />
          {errors.phonenumber && (
            <p className="text-blue-500 text-sm">{errors.phonenumber}</p>
          )}
        </div>
        <div className="flex justify-end pt-8">
          <button
            type="submit"
            className="bg-blue-900 w-20 text-white p-2 rounded-md"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );

  const renderSummary = () => (
    <div className="space-y-2">
      <p className="font-bold text-3xl">Summary</p>
      <p>Please review your information below:</p>
      <div className="py-7 space-y-6">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <p className="py-2 px-2 border border-blue-900 rounded-md">
            {data.name}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label>Email Address</label>
          <p className="py-2 px-2 border border-blue-900 rounded-md">
            {data.email}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label>Phone Number</label>
          <p className="py-2 px-2 border border-blue-900 rounded-md">
            {data.phonenumber}
          </p>
        </div>
        <div className="flex justify-end pt-10">
          <button
            onClick={() => setStep(1)}
            className="bg-blue-900 text-white p-2 rounded-md"
          >
            Edit Info
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="md:bg-blue-100 h-screen flex items-center justify-center">
      <div className="bg-white sm:h-[35rem] w-[50rem] rounded-md">
        <div className="px-4 py-3 flex gap-14">
          <div className="sm:space-y-6 sm:px-6 sm:py-6 sm:bg-cover sm:rounded-md sm:h-[33rem] sm:w-[12rem] sm:bg-no-repeat text-white sm:bg-image sm:block hidden">
            {["your info", "select plan", "add-ons", "summary"].map(
              (stepName, index) => (
                <div
                  className={`flex gap-2 items-center cursor-pointer  rounded-md ${
                    step === index + 1 ? "bg-blue-400" : ""
                  }`}
                  key={index}
                  onClick={() => setStep(index + 1)}
                >
                  <div className="h-7 w-7 border bg-blue-200 border-white rounded-full text-center">
                    {index + 1}
                  </div>
                  <span>
                    <p className="text-sm font-light">Step {index + 1}</p>
                    <p className="uppercase font-semibold text-sm">
                      {stepName}
                    </p>
                  </span>
                </div>
              )
            )}
          </div>
          <div className="px-6 py-6 text-blue-900">
            {showWelcomeMessage && (
              <div className="bg-green-100 text-green-700 p-3 mb-4 rounded-md">
                Welcome! You have moved to the next step.
              </div>
            )}
            {step === 1 && renderForm()}
            {step === 4 && renderSummary()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
