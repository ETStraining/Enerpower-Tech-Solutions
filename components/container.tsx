// Container.tsx
"use client";
import React, { FC } from "react";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {


  return (
    <div className={`container px-16`}>
      {children}
    </div>
  );
};

export default Container;
