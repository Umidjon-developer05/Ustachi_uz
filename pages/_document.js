import { Html, Head, Main, NextScript } from "next/document";
import { useTranslations } from "next-intl";
import { Toaster } from "../@/components/ui/toaster";

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="icon"
        href="/Home_logo-removebg-preview.png"
        type="image/x-icon"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
      />
      <title>ustachi.uz</title>
      <Head />
      <body>
        <Toaster />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
