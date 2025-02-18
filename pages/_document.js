import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "../@/components/ui/toaster";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/Home_logo-removebg-preview.png"
          type="image/x-icon"
        />
        
        {/* Stylesheets */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
        />
        
        {/* SEO meta tags */}
        <title>Ustachi.uz - Usta topishning oson yo‘li</title>
        <meta name="description" content="Ustachi.uz - Sizga yaqin va ishonchli usta topishning eng qulay platformasi. Usta chaqirish, xizmatlar va narxlar haqida batafsil ma'lumot oling." />
        <meta name="keywords" content="usta, xizmatlar, ta'mirlash, qurilish, texnik xizmat, elektrik, santexnik, usta topish, yaqin usta, eng yaxshi usta, ishonchli usta, ta'mir xizmatlari, qurilish xizmatlari" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Ustachi.uz - Usta topishning oson yo‘li" />
        <meta property="og:description" content="Ustachi.uz - Sizga yaqin va ishonchli usta topishning eng qulay platformasi." />
        <meta property="og:image" content="/ustachi-preview.png" />
        <meta property="og:url" content="https://ustachi.uz" />
        <meta property="og:type" content="website" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ustachi.uz - Usta topishning oson yo‘li" />
        <meta name="twitter:description" content="Ustachi.uz - Sizga yaqin va ishonchli usta topishning eng qulay platformasi." />
        <meta name="twitter:image" content="/ustachi-preview.png" />
      </Head>
      <body>
        <Toaster />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
