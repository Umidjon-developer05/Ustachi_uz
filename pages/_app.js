import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../components/theme-provider";
import "../styles/globals.css";
import Navbar from "./component/Navbar/Navbar";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider {...pageProps}>
          <Navbar />
          <Component {...pageProps} />
      </ClerkProvider>
    </ThemeProvider>
  );
}
export default appWithTranslation(App);