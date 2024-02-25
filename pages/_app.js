import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "./component/Navbar/Navbar";
import { ThemeProvider } from "../components/theme-provider";
import "../styles/globals.css";
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
