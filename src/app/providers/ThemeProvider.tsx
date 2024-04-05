import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const theme = createTheme({
    radius: {
      xs: "6px",
      sm: "8px",
      md: "10px",
      lg: "12px",
      xl: "14px",
    },
    colors: {
      blue: [
        "#0000FF",
        "#00008B",
        "#0000CD",
        "#4169E1",
        "#1E90FF",
        "#6495ED",
        "#4682B4",
        "#87CEEB",
        "#87CEFA",
        "#ADD8E6",
      ],
      deepBlue: [
        "#000080",
        "#191970",
        "#0000A0",
        "#006400",
        "#008080",
        "#2E8B57",
        "#000080",
        "#00008B",
        "#0000CD",
        "#4169E1",
      ],
      grey: [
        "#2e2e2e",
        "#A9A9A9",
        "#D3D3D3",
        "#696969",
        "#778899",
        "#708090",
        "#B0C4DE",
        "#F0F8FF",
        "#708090",
        "#B0C4DE",
      ],
    },
    shadows: {
      md: "1px 1px 3px rgba(34, 60, 80, 0.6)",
      xl: "5px 5px 3px rgba(34, 60, 80, 0.6)",
    },
    headings: {
      sizes: {
        h1: { fontSize: "32px", fontWeight: "700" },
      },
    },
    fontSizes: {
      xs: "8px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
    primaryColor: "grey",
    defaultRadius: "md",
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
};
