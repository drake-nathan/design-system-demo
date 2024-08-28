import { ThemeProvider } from "./theme-provider";

export const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};
