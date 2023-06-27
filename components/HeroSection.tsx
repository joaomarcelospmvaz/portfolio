"use client" // this is a client component
import React, { useState } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useLanguage } from "@/hooks/useLanguage"

export default function HeroSection() {
  const { isEnglish } = useLanguage()
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">{isEnglish ? "Hi, I'm João!" : "Olá, eu sou o João!"}</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            {isEnglish ? " I'm a" : "Sou um"}{" "}
            <span className="font-semibold text-teal-600">
              {isEnglish ? "Software Engineer" : "Engenheiro de Software"}{" "}
            </span>
            {isEnglish ? "based in Rio de Janeiro, Brasil. Working towards creating software thatmakes life easier and more meaningful." : "do Rio de Janeiro, Brasil. Trabalho para criar softwares que tornem a vida mais fácil e significativa."}
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
