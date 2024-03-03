import React from "react";
import Card from "./_components/Card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Service = () => {
  return (
<<<<<<< HEAD
    <div className="mt-24">
      <Card />
=======
    <div
    className='mt-24'
    >
 
      <Card/>

      
>>>>>>> origin/master
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
<<<<<<< HEAD
export default Service;
=======

export default Service
>>>>>>> origin/master
