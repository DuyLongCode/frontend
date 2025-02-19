import React, { useState } from 'react';

const ProgressSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Progress bar background */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
        
        {/* Active progress bar */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {/* Step circles */}
        <div className="relative flex justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`
                w-8 h-8 rounded-full flex items-center justify-center
                transition-all duration-300
                ${step <= currentStep ? 'bg-blue-500 text-white' : 'bg-white text-gray-500 border-2 border-gray-200'}
              `}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Step labels */}
      <div className="flex justify-between mt-4">
        <div className="text-center">Step 1</div>
        <div className="text-center">Step 2</div>
        <div className="text-center">Step 3</div>
        <div className="text-center">Step 4</div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`
            px-4 py-2 rounded
            ${currentStep === 1 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'}
          `}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === totalSteps}
          className={`
            px-4 py-2 rounded
            ${currentStep === totalSteps
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'}
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;