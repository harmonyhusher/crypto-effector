import "@mantine/core/styles.css";
import { AppShell, ColorSchemeScript } from "@mantine/core";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { QueryProvider } from "@/app/providers/QueryProvider";
import "../../public/styles/globals.scss";

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
        <ThemeProvider>
          <QueryProvider>
            <AppShell
              header={{ height: 60, offset: false }}
              zIndex={0}
              layout="alt"
              padding="md"
            >
              {children}
            </AppShell>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
