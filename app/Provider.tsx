"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
