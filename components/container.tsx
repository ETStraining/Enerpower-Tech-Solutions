// Container.tsx
"use client";
import React, { FC } from "react";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {


  return (
    <div className={`w-full mx-auto `}>
      {children}
    </div>
  );
};

export default Container;
