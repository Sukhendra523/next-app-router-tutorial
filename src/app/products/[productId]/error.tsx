'use client'

import React from "react";

const ErrorBoundary = ({
  error , reset
}: {
   error: { message: string },
   reset: ()=> void;
}) => {
  return (
    <div>
         <div className="text-red-600">{`Sorry! try again later something went wrong showing message:  ${error.message}`}
   
    </div>
    <button onClick={reset} className=" bg-black text-white p-2">
        Try gain
    </button>
    </div>
   
  );
};

export default ErrorBoundary;
