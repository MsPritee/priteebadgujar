"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function AppThemeProvider({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </NextThemesProvider>
  );
}
