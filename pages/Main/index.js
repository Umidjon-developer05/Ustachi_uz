import React from "react";
import { Button } from "../../@/components/ui/button";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Main = () => {
    const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <div className="Main">
        <div className="flex h-[100%] justify-center items-center">
          <div className="flex justify-center flex-col gap-4 items-center">
            <h1 className="sm:text-[30px] font-serif"> {t("main.title")}</h1>
            
            <p className="sm:text-[17px] text-center">{t("main.desc")}</p>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white w-40 font-bold py-2 px-4 rounded">{t("main.button")}</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default Main;
