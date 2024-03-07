"use client";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../../../@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
const language = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ru",
    name: "Russia",
    country_code: "ru",
  },
  {
    code: "uz",
    name: "Uzbekistan",
    country_code: "uz",
  },
];
const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
  </svg>
);
const Navbar = () => {
  const [lang, setLang] = useState(false);
  const [menu, setMenu] = useState(false);
  const { user } = useUser();
  const { setTheme, resolvedTheme } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();
  function Language() {
    setLang(!lang);
  }
  function Menu() {
    setMenu(!menu);
  }
  return (
    <>
      <div>
        <nav className="bg-white dark:bg-gray-900 fixed w-full  top-0  z-20 start-0 border-b border-gray-200 shadow">
          <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
            <Link href={"/"} className="flex items-center ">
              <Image
                width={1000}
                height={1000}
                src={"/Home_logo-removebg-preview.png"}
                className="w-14 h-14 "
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Home
              </span>
            </Link>
            <div className="flex items-center z-50 md:order-2 space-x-3  rtl:space-x-reverse">
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  data-bs-toggle="dropdown"
                  onClick={() => Language()}
                >
                  <GlobeIcon />
                </button>
                {lang && (
                  <ul className="dropdown-menu">
                    <div
                      className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md  shadow-lg ring-1 p-2 ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      {language?.map((item, index) => (
                        <div key={index}>
                          <Link
                            href={router.pathname}
                            locale={item?.code}
                            onClick={() => setLang(false)}
                          >
                            <div className="py-1" role="none">
                              <span
                                className={`fi fi-${item.country_code}`}
                              ></span>{" "}
                              &nbsp;
                              {item.name}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </ul>
                )}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="rounded-lg">
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem]  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className={`' p-3 z-20 rounded-sm ${
                    resolvedTheme === "dark" ? " bg-slate-950 " : " bg-white "
                  } '`}
                >
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {user ? (
                <UserButton
                  className={`' ${
                    resolvedTheme == "dark" ? " bg-slate-950 " : " bg-black "
                  } '`}
                   afterSignOutUrl='/'
                />
              ) : (
                <Link href={"/sign-in"}>
                  <Button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Get started
                  </Button>
                </Link>
              )}
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={() => Menu()}
              >
                {!menu ? (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                )}
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href={"/"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("navbar.title1")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/About"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("navbar.title2")}
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/Contact"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("navbar.title3")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {menu && (
        <div
          className={`" h-screen  fixed top-0 bottom-0 md:hidden    z-20 w-60  mx-0 ${
            resolvedTheme == "dark" ? "bg-gray-900" : "bg-white"
          }   "`}
          style={{
            display: `' ${menu ? " block " : " none "} '`,
          }}
        >
          <div className="sidebar  lg:left-0 p-2  overflow-y-auto text-center ">
            <div className=" text-xl">
              <div className=" mt-4 flex items-center justify-center">
                <h1>
                  <Link
                    href={"/"}
                    className="font-bold  text-[20px] flex items-center  ml-3 "
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src={"/Home_logo-removebg-preview.png"}
                      className="w-14 h-14 "
                      alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      Home
                    </span>
                  </Link>
                </h1>
                <i
                  className="bi bi-x cursor-pointer ml-28 lg:hidden"
                  onclick="openSidebar()"
                ></i>
              </div>
              <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>

            <div className="flex gap-5 flex-col justify-center h-[500px]">
              <Link href={"/"} onClick={() => setMenu(false)}>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                  <span className="text-[20px] ml-4 font-bold">
                    {" "}
                    {t("navbar.title1")}
                  </span>
                </div>
              </Link>
              <Link href={"/About"} onClick={() => setMenu(false)}>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layout-grid group-hover:animate-bounce"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                  <span class="text-[20px] ml-4  font-bold">
                    {t("navbar.title2")}
                  </span>
                </div>
              </Link>
              <Link href={"/Contact"} onClick={() => setMenu(false)}>
                <div
                  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white "
                  onclick="dropdown()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                  <div className="flex justify-between w-full items-center">
                    <span className="text-[20px]  ml-4 font-bold">
                      {t("navbar.title3")}
                    </span>
                    <span className="text-sm rotate-180" id="arrow">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
