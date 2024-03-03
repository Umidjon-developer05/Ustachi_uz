import Main from "./Main/Main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
   

  return (
    <div>
      <main>
        <Main />
      </main>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}