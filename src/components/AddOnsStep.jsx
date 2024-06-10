
// import React from "react";

// const AddOnsStep = ({ selectedAddOns, handleAddOnChange, handleNext, handleBack }) => {
//   const addOns = [
//     {
//       name: "Online Service",
//       description: "Access to multiplayer games",
//       price: "$1/mo",
//     },
//     {
//       name: "Larger Storage",
//       description: "Extra 1TB of cloud save",
//       price: "$2/mo",
//     },
//     {
//       name: "Customizable Profile",
//       description: "Custom theme on your profile",
//       price: "$2/mo",
//     },
//   ];

//   return (
//     <>
//       <div className="space-y-2">
//         <p className="font-bold text-3xl">Add-Ons</p>
//         <p className="text-sm sm:text-base">Enhance your gaming experience with these add-ons</p>
//       </div>
//       <form onSubmit={handleNext} className="py-7 space-y-6">
//         <div className="flex flex-col gap-4">
//           {addOns.map((addOn) => (
//             <div
//               key={addOn.name}
//               className={`p-4 border rounded-md cursor-pointer  
//               ${selectedAddOns.includes(addOn.name) ? "border-blue-900 bg-blue-100" : "border-gray-300"}
//               hover:border-blue-700 hover:bg-blue-50`}
//               onClick={() => handleAddOnChange(addOn.name)}
//             >
//               <label className="flex items-center gap-4">
//                 <input
//                   type="checkbox"
//                   checked={selectedAddOns.includes(addOn.name)}
//                   onChange={() => handleAddOnChange(addOn.name)}
//                   className="form-checkbox"
//                 />
//                 <div className="flex justify-between w-full">
//                   <div>
//                     <h3 className="text-lg font-bold">{addOn.name}</h3>
//                     <p className="text-sm">{addOn.description}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm font-bold">{addOn.price}</p>
//                   </div>
//                 </div>
//               </label>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between pt-8">
//           <button
//             type="button"
//             className="w-20 p-2 rounded-md bg-blue-900 text-white"
//             onClick={handleBack}
//           >
//             Back
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-900 w-20 text-white p-2 rounded-md"
//           >
//             Next Step
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default AddOnsStep;


import React from "react";

const AddOnsStep = ({ selectedAddOns, handleAddOnChange, handleNext, handleBack }) => {
  const addOns = [
    {
      name: "Online Service",
      description: "Access to multiplayer games",
      price: "$1/mo",
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: "$2/mo",
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "$2/mo",
    },
  ];

  return (
    <>
      <div className="space-y-2">
        <p className="font-bold text-3xl">Add-Ons</p>
        <p className="text-sm sm:text-base">Enhance your gaming experience with these add-ons</p>
      </div>
      <form onSubmit={handleNext} className="py-7 space-y-6">
        <div className="flex flex-col gap-4">
          {addOns.map((addOn) => (
            <div
              key={addOn.name}
              className={`p-4 border rounded-md cursor-pointer  
              ${selectedAddOns.includes(addOn.name) ? "border-blue-900 bg-blue-100" : "border-gray-300"}
              hover:border-blue-700 hover:bg-blue-50`}
              onClick={() => handleAddOnChange(addOn.name)}
            >
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(addOn.name)}
                  onChange={() => handleAddOnChange(addOn.name)}
                  className="form-checkbox"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="text-lg font-bold">{addOn.name}</h3>
                    <p className="text-sm">{addOn.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{addOn.price}</p>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-8">
          <button
            type="button"
            className="w-16 p-1 rounded-md bg-blue-900 text-white"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-900 w-16 text-white p-1 rounded-md"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default AddOnsStep;

