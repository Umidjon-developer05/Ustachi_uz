import { ClerkProvider } from "@clerk/nextjs";

import "../styles/globals.css";
import { Navbar } from "./component/Navbar/Navbar";
import { ThemeProvider } from "../components/theme-provider";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <ClerkProvider {...pageProps}>
      <Navbar/>
      <Component {...pageProps} />
   </ClerkProvider>
    </ThemeProvider>
  )
  ;
}
