import "@mantine/core/styles.css";
import React from "react";
import { ColorSchemeScript } from "@mantine/core";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { QueryProvider } from "./providers/QueryProvider";
import "../../public/styles/globals.scss";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
