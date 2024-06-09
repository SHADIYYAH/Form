

import React from "react";

const FormStep = ({ data, errors, handleChange, handleSubmit }) => (
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
          placeholder="ajani halimah"
          className="py-1 px-2 border text-sm border-blue-900 rounded-md"
        />
        {errors.name && <p className="text-blue-500 text-sm">{errors.name}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="me@gmail.com"
          className="py-1 px-2 border text-sm border-blue-900 rounded-md"
        />
        {errors.email && <p className="text-blue-500 text-sm">{errors.email}</p>}
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
        <button type="submit" className="bg-blue-900 w-20 text-white p-2 rounded-md">
          Next
        </button>
      </div>
    </form>
  </>
);
export default FormStep;