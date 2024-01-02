'use client';
import React from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Google Ads" },
]

const AboutSection = () => {
  const { isEnglish } = useLanguage()
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          {isEnglish ? "About Me" : "Sobre Mim"}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              {isEnglish ? "Get to know me!" : "Conheça-me!"}
            </h1>
            <p>
              {isEnglish ? "Hi, my name is João and I am a" : "Olá, meu nome é João e eu sou um Engenheiro de Software "}{" "}
              <span className="font-bold">{isEnglish ? "highly ambitious" : "ambicioso"}</span>,
              <span className="font-bold">{isEnglish ? " self-motivated" : " autodisciplinado "}</span> {isEnglish ? "and" : "e"}
              <span className="font-bold">{isEnglish ? " driven" : " muito focado,"}</span> {isEnglish ? "software engineer based in Rio de Janeiro, Brasil." : "morador do Rio de Janeiro, Brasil."}
            </p>
            <br />
            <p>
              {isEnglish ? "I'm graduating from Estácio University, Brasil and will finish the graduation in 2025 with a BS in Software Engineering and have been working in the field since 2019." : "Estou me graduando como Bacharel em Engenharia de Software pela Universidade Estácio e estou trabalhando na área desde 2019."}
            </p>
            <br />
            <p>
              {isEnglish ? "I have a wide range of hobbies and passions that keep me busy. From reading, playing sports, traveling, to games, I am always seeking new experiences and love to keep myself engaged and learning new things." : "Eu tenho uma ampla variedade de hobbies e paixões que me mantém ocupado. Desde a leitura, prática de esportes, viagens, até jogos, sempre estou em busca de novas experiências e adoro me manter envolvido e aprendendo coisas novas."}
            </p>
            <br />
            <p>
              {isEnglish ? "I believe that you should" : "Eu acredito que"}{" "}
              <span className="font-bold text-teal-500">
                {isEnglish ? "never stop growing" : "nunca se deve parar de crescer"}
              </span>{isEnglish ? " " : ""}
              {isEnglish ? "and that's what I strive to do, I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities. 🚀" : ", e é isso que me esforço para fazer. Tenho paixão por tecnologia e um desejo constante de ultrapassar os limites do que é possível. Estou empolgado para ver onde minha carreira me levará e estou sempre aberto a novas oportunidades. 🚀"}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">{isEnglish ? "My Skills" : "Minhas Habilidades"}</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
