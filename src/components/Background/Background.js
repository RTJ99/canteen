import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-[#262B2C] dark:text-[#fff] transition-all">
      {children}
    </body>
  );
};

export default Background;
