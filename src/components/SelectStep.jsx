import React, { useState } from "react";
import Arcade from "../assets/icon-arcade.svg";
import Advanced from "../assets/icon-advanced.svg";
import Pro from "../assets/icon-pro.svg";

const SelectPlanStep = ({
  selectedPlan,
  handlePlanChange,
  handleNext,
  handleBack,
}) => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Arcade",
      price: billingPeriod === "monthly" ? 9 : 90,
      description: billingPeriod === "monthly" ? "$9/mo" : "$90/yr",
      icon: Arcade,
    },
    {
      name: "Advanced",
      price: billingPeriod === "monthly" ? 12 : 120,
      description: billingPeriod === "monthly" ? "$12/mo" : "$120/yr",
      icon: Advanced,
    },
    {
      name: "Pro",
      price: billingPeriod === "monthly" ? 15 : 150,
      description: billingPeriod === "monthly" ? "$15/mo" : "$150/yr",
      icon: Pro,
    },
  ];

  const toggleBillingPeriod = () => {
    setBillingPeriod((prevPeriod) =>
      prevPeriod === "monthly" ? "yearly" : "monthly"
    );
  };

  return (
    <>
      <div className="space-y-2">
        <p className="font-bold text-3xl">Select Plan</p>
        <p className="text-sm sm:text-base">
          Please select a plan that suits you best
        </p>
      </div>
      <form onSubmit={handleNext} className="py-7 space-y-6">
        <div className="flex flex-col gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-4 border rounded-md cursor-pointer transition-all duration-300 
              ${
                selectedPlan.name === plan.name
                  ? "border-blue-900 bg-blue-100"
                  : "border-gray-300"
              }
              hover:border-blue-700 hover:bg-blue-50`}
              onClick={() => handlePlanChange(plan)}
            >
              <h3 className="text-lg font-bold flex items-center gap-2">
                <img
                  src={plan.icon}
                  alt={`${plan.name} icon`}
                  className="w-6 h-6"
                />{" "}
                {plan.name}
              </h3>
              <p className="text-sm">{plan.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-8">
          <span
            className={`${
              billingPeriod === "monthly" ? "text-blue-900" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={billingPeriod === "yearly"}
              onChange={toggleBillingPeriod}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
          <span
            className={`${
              billingPeriod === "yearly" ? "text-blue-900" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className={`w-16 p-1 rounded-sm ${
              selectedPlan
                ? "bg-blue-900 text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={selectedPlan ? handleBack : null}
            disabled={!selectedPlan}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-900 w-16 text-white p-1 rounded-sm"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default SelectPlanStep;
