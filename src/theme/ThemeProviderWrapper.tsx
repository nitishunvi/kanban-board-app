import { ThemeProvider } from "styled-components";
import { getTheme } from "./Theme";
import { createContext, useContext, useState } from "react";

export interface ThemeContextType {
  mode: "light" | "dark";
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: Props) {
  const [mode, setMode] = useState<"light" | "dark">("light");

 const toggleMode = () => {   setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
 }
  const value = { mode,  toggleMode};
  
  const theme = getTheme(mode);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}