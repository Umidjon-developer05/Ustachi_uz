import { SignIn } from "@clerk/nextjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
 
export default function Page() {
  return (
  <div className="flex justify-center mt-32" >
     <SignIn />
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
