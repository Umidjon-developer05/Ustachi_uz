import { Html, Head, Main, NextScript } from "next/document";
import { useTranslations } from "next-intl";
import { Toaster } from "../@/components/ui/toaster";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Toaster />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
