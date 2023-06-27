"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { useLanguage } from "@/hooks/useLanguage"

interface NavItem {
  label: string
  nome: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    nome: "Home",
    page: "home",
  },
  {
    label: "About",
    nome: "Sobre",
    page: "about",
  },
  {
    label: "Projects",
    nome: "Projetos",
    page: "projects",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const { isEnglish, changeLanguage } = useLanguage()
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">João Vaz</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`h-80 md:h-auto flex-1 justify-self-center pb-2 mt-4 md:block md:pb-1 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {isEnglish ? item.label : item.nome}
                  </Link>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
              {isEnglish ? (
                <button
                  onClick={() => changeLanguage()}
                  className="bg-slate-100 p-2.5 rounded-xl dark:text-stone-900"
                >
                  PT
                </button>
              ) : (
                <button
                  onClick={() => changeLanguage()}
                  className="bg-slate-100 p-2.5 rounded-xl dark:text-stone-900"
                >
                  EN
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
