export type ThemeMode = "light" | "dark";

export interface Palette {
  primary: string;
  background: string;
  surface: string;
  text: string;
  border: string;
  secondary: string;
}

export interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
}

export interface AppTheme {
  palette: Palette;
  breakpoints: Breakpoints;
}

const breakpoints: Breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "1024px",
};

export const lightTheme: AppTheme = {
  palette: {
    primary: "#203919",
    background: "rgb(231, 234, 241)",
    surface: "#f5f5f5",
    text: "#1a1a1a",
    border: "#e0e0e0",
    secondary: "#c0bebe",
  },
  breakpoints,
};

export const darkTheme: AppTheme = {
  palette: {
    primary: "#90caf9",
    background: "#282828",
    surface: "#1e1e1e",
    text: "#ffffff",
    border: "#333",
        secondary: "#c0bebe",
  },
  breakpoints,
};
export const getTheme = (mode: ThemeMode): AppTheme => {
  return mode === "dark" ? darkTheme : lightTheme;
};