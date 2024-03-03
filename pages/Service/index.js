import React from "react";
import Card from "./_components/Card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Service = () => {
  return (
    <div className="mt-24">
      <Card />
    </div>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Service"])),
    },
  };
}
export default Service;
