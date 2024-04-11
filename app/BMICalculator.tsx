"use client";
import React, { useState } from "react";

const BMICalculator = () => {
  const [showMsg, setShowMsg] = useState("");

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div>BMI Calculator</div>
      <div className="flex flex-col gap-8">
        <div>
          Height: <input type="number" />
        </div>
        <div>
          Weight: <input type="number" />
        </div>
        <div>
          <button>Calculate</button>
        </div>
        <div>{showMsg}</div>
      </div>
    </div>
  );
};

export default BMICalculator;
