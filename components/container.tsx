// Container.tsx
"use client";
import React, { FC } from "react";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {


  return (
    <div className={`container mx-auto px-4`}>
      {children}
    </div>
  );
};

export default Container;
