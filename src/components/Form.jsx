

import React, { useState } from "react";
import FormStep from "./FormStep";
import SelectPlanStep from "./SelectStep";
import AddOnsStep from "./AddOnsStep";
import SummaryStep from "./SummaryStep";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    plan: "",
    selectedAddOns: []
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const [step, setStep] = useState(1);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handlePlanChange = (e) => {
    setData({
      ...data,
      plan: e.target.value,
    });
  };

  const handleAddOnChange = (addOn) => {
    setData((prevData) => {
      const selectedAddOns = prevData.selectedAddOns.includes(addOn)
        ? prevData.selectedAddOns.filter((item) => item !== addOn)
        : [...prevData.selectedAddOns, addOn];
      return {
        ...prevData,
        selectedAddOns,
      };
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
    } else {
      setErrors(formErrors);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="md:bg-blue-100 h-screen flex items-center justify-center">
      <div className="bg-white sm:h-[35rem] w-[50rem] rounded-md">
        <div className="px-4 py-3 flex gap-14">
          <div className="sm:space-y-6 sm:px-6 sm:py-6 sm:bg-cover sm:rounded-md sm:h-[33rem] sm:w-[12rem] sm:bg-no-repeat text-white sm:bg-image sm:block hidden">
            {["your info", "select plan", "add-ons", "summary"].map(
              (stepName, index) => (
                <div
                  className={`flex gap-2 items-center cursor-pointer rounded-md ${
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
           
            {step === 1 && (
              <FormStep
                data={data}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
            {step === 2 && (
              <SelectPlanStep
                selectedPlan={data.plan}
                handlePlanChange={handlePlanChange}
                handleNext={handleNextStep}
                handleBack={handleBackStep}
              />
            )}

            {step === 3 && (
              <AddOnsStep
                selectedAddOns={data.selectedAddOns}
                handleAddOnChange={handleAddOnChange}
                handleNext={handleNextStep}
                handleBack={handleBackStep}
              />
            )}
            {step === 4 && <SummaryStep data={data} setStep={setStep} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

///      WRONG ONE
// import React, { useState } from "react";
// import FormStep from "./FormStep";
// import SelectPlanStep from "./SelectStep";
// import AddOnsStep from "./AddOnsStep";
// import SummaryStep from "./SummaryStep";

// const Form = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phonenumber: "",
//     plan: "", // Monthly or Yearly
//     billingPeriod: "monthly", // Default billing period
//     addOns: [], // Array to store selected add-ons
//   });

//   const [step, setStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handlePlanChange = (plan, billingPeriod) => {
//     setData({
//       ...data,
//       plan,
//       billingPeriod,
//     });
//   };

//   const handleAddOnsChange = (selectedAddOns) => {
//     setData({
//       ...data,
//       addOns: selectedAddOns,
//     });
//   };

//   const handleNextStep = () => {
//     setStep(step + 1);
//   };

//   const handleBackStep = () => {
//     setStep(step - 1);
//   };

//   const steps = {
//     1: <FormStep data={data} handleChange={handleChange} handleNextStep={handleNextStep} />,
//     2: <SelectPlanStep data={data} handlePlanChange={handlePlanChange} handleNextStep={handleNextStep} handleBackStep={handleBackStep} />,
//     3: <AddOnsStep data={data} handleAddOnChange={handleAddOnsChange} handleNextStep={handleNextStep} handleBackStep={handleBackStep} />,
//     4: <SummaryStep data={data} setStep={setStep} />,
//   };

//   return (
//     <div className="md:bg-blue-100 h-screen flex items-center justify-center">
//       <div className="bg-white sm:h-[35rem] w-[50rem] rounded-md">
//         <div className="px-4 py-3 flex gap-14">
//           <div className="sm:space-y-6 sm:px-6 sm:py-6 sm:bg-cover sm:rounded-md sm:h-[33rem] sm:w-[12rem] sm:bg-no-repeat text-white sm:bg-image sm:block hidden">
//             {["your info", "select plan", "add-ons", "summary"].map(
//               (stepName, index) => (
//                 <div
//                   className={`flex gap-2 items-center cursor-pointer rounded-md ${
//                     step === index + 1 ? "bg-blue-400" : ""
//                   }`}
//                   key={index}
//                   onClick={() => setStep(index + 1)}
//                 >
//                   <div className="h-7 w-7 border bg-blue-200 border-white rounded-full text-center">
//                     {index + 1}
//                   </div>
//                   <span>
//                     <p className="text-sm font-light">Step {index + 1}</p>
//                     <p className="uppercase font-semibold text-sm">
//                       {stepName}
//                     </p>
//                   </span>
//                 </div>
//               )
//             )}
//           </div>
//           <div className="px-6 py-6 text-blue-900">
//             {steps[step]}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

