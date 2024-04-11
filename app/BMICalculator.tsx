"use client";
import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showMsg, setShowMsg] = useState("show msg state");

  return (
    <div className="flex flex-col justify-center h-screen items-center ">
      <div className="px-12 py-20 border-amber-400 border-4 rounded-2xl text-center">
        <div className="pb-10">BMI Calculator</div>
        <div className="flex flex-col gap-8">
          <div>
            Height:{" "}
            <input
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
              type="number"
              placeholder="in kgs"
              onChange={(e) => {
                setWeight(Number(e.target.value));
              }}
            />
          </div>
          <div>
            <button>Calculate</button>
          </div>
          <div>{showMsg}</div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
