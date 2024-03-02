import React, { useEffect, useState } from 'react';
import GlobalsApi from '../../utils/GlobalsApi';
import { Button } from '../../@/components/ui/button';

const Main = () => {
  const [main, setMain] = useState([]);
  
  useEffect(() => {
    const getAllMainPage = () => {
      GlobalsApi.getAllMain()
        .then((resp) => {
          setMain(resp);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    getAllMainPage();
  }, []);

  return (
    <>
        <div className='Main'>
          <div className='flex h-[100%] justify-center items-center'>
            {main.mains?.map((item, index) => (
              <div key={index} className='flex justify-center flex-col gap-4 items-center'>
                <h1 className='sm:text-[30px] font-serif'>{item?.title}</h1>
                <p className='sm:text-[17px] text-center'>{item?.description}</p>
                <Button className='bg-blue-500 hover:bg-blue-700 text-white w-40 font-bold py-2 px-4 rounded'>
                    Biz bilan bog&apos;lanish
                </Button>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Main;
