import React, { useEffect, useState } from "react";
import GlobalsApi from "../../utils/GlobalsApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const getAllAbout = () => {
      GlobalsApi.getAllAboutPage().then((res) => setAbout(res));
    };
    getAllAbout();
  }, []);
  return (
    <div className="mt-24">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mx-2 mb-2">
        <>
          {about.abouts?.map((item, index) => (
            <div key={index} class="grid gap-2 about-item">
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={item?.imageAbout?.url}
                alt=""
              />
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


export default About;
