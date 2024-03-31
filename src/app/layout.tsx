"use client";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { QueryProvider } from "./providers/QueryProvider";
import "../../public/styles/globals.scss";
import { motion } from "framer-motion";

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
      <motion.body dragConstraints={{ top: 10, bottom: 0 }}>
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
      </motion.body>
    </html>
  );
}
