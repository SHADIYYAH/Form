// SummaryStep.jsx
import React from "react";

const SummaryStep = ({ data, setStep }) => {
  const calculateTotal = () => {
    let total = data.selectedPlan.price;
    data.selectedAddOns.forEach((addOn) => {
      total += addOn.price;
    });
    return total;
  };

  return (
    <div className="space-y-2">
      <p className="font-bold text-3xl">Summary</p>
      <p>Please review your information below:</p>
      <div className="py-7 space-y-6">
        <div className="flex flex-col gap-1">
          <label>Plan</label>
          <div className="flex items-center gap-2">
            <span>{data.selectedPlan.name}</span>
            <span>{data.selectedPlan.price}</span>
            <button onClick={() => setStep(2)}>Change</button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label>Add-ons</label>
          {data.selectedAddOns.length > 0 ? (
            <ul className="py-2 px-2 border border-blue-900 rounded-md">
              {data.selectedAddOns.map((addOn, index) => (
                <li key={index}>
                  {addOn.name}: {addOn.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No add-ons selected</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Total</label>
          <p>{calculateTotal()}</p>
        </div>
        <div className="flex justify-end pt-10">
          <button
            onClick={() => setStep(1)}
            className="bg-blue-900 text-white p-2 rounded-md"
          >
            Edit Info
          </button>
          <button
            onClick={() => setStep(3)}
            className="bg-blue-900 text-white p-2 rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;

