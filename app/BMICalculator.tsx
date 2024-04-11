"use client";
import React, { useState } from "react";

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showMsg, setShowMsg] = useState("KNOW YOUR BMI!!");

  const handleBMI = () => {
    console.log(height);
    console.log(weight);

    var BMI: number = weight / Math.pow(height / 100, 2);
    console.log(BMI);
    if (BMI < 18) {
      setShowMsg("Time to grab a bite!");
    } else if (BMI >= 18 && BMI <= 25) {
      setShowMsg("Greate Shape");
    } else {
      setShowMsg("Time to run!!");
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center font-mono">
      <div className="px-12 py-20 border-amber-400 border-4 rounded-2xl text-center">
        <div className="pb-10 text-4xl font-semibold underline underline-offset-8">
          BMI Calculator
        </div>
        <div className="flex flex-col gap-8 ">
          <div>
            Height:{" "}
            <input
              className="text-black p-2 rounded"
              type="number"
              placeholder="in cms"
              onChange={(e) => {
                setHeight(Number(e.target.value));
              }}
            />
          </div>
          <div>
            Weight:{" "}
            <input
              className="text-black p-2 rounded"
              type="number"
              placeholder="in kgs"
              onChange={(e) => {
                setWeight(Number(e.target.value));
              }}
            />
          </div>
          <div>
            <button
              onClick={handleBMI}
              className="bg-red-600 hover:bg-red-500 w-full p-2 rounded-md text-black uppercase"
            >
              Calculate
            </button>
          </div>
          <div>{showMsg}</div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
