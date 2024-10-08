// Container.tsx
"use client";
import React, { FC } from "react";
import { useTheme } from '../component/themeContent'; // Adjust the path as needed

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`container mx-auto px-4`}>
      {children}
    </div>
  );
};

export default Container;
