import React, { useState, useEffect } from "react";

const SummaryStep = ({ data, setStep }) => {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    console.log("Selected Plan:", data.selectedPlan);
    console.log("Selected Add-Ons:", data.selectedAddOns);
  }, [data]);

  const calculateTotal = () => {
    let total = 0;
    if (data.selectedPlan && typeof data.selectedPlan.price === 'number') {
      total += data.selectedPlan.price;
    }
    if (data.selectedAddOns && Array.isArray(data.selectedAddOns)) {
      data.selectedAddOns.forEach((addOn) => {
        if (addOn && typeof addOn.price === 'number') {
          total += addOn.price;
        }
      });
    }
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="text-center space-y-4">
        <p className="font-bold text-3xl">Thank you!</p>
        <p>Your subscription has been confirmed.</p>
        <button
          onClick={() => setStep(1)}
          className="bg-blue-900 text-white p-2 rounded-md"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <p className="font-bold text-3xl">Finishing up</p>
      <p>Double check everything looks OK before confirming.</p>
      <form onSubmit={handleSubmit} className="py-7 space-y-6">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-2 border p-2 rounded-md">
            <div>
              <span>
                {data.selectedPlan.name} ({data.selectedPlan.price < 100 ? "Monthly" : "Yearly"})
              </span> 
            </div>
            <span>${data.selectedPlan.price}</span>
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="text-blue-900 text-left text-bold leading-7"
            style={{ textDecoration: "none" }}
          >
            Change
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <label>Add-ons</label>
          {data.selectedAddOns && data.selectedAddOns.length > 0 ? (
            <ul className="py-2 px-2 border border-blue-900 rounded-md">
              {data.selectedAddOns.map((addOn, index) => (
                <li key={index} className="flex justify-between">
                  <span>{addOn.name}</span>
                  <span>${addOn.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-bold bg-slate-800">No add-ons selected</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Total</label>
          <p className="font-bold">${calculateTotal()}</p>
        </div>
        <div className="flex justify-between pt-10">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="bg-blue-900 text-white p-2 rounded-md"
          >
            Go Back
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white p-2 rounded-md"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default SummaryStep;
