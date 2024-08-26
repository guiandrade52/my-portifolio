import React, { useState, useEffect } from "react";
import Image from "next/image";

interface IProjects {
  id: number;
  title: string;
  description: string;
  url: string;
}

// Variáveis para você configurar com seus dados
const projectOwner: string = "Guilherme";
const yearsOfExperience: number = 5;
const jobDescription: string = "Full Stack Web Developer";
const age = 28;

// Altere aqui para mudar a lista dos seus projetos
const projects = [
  {
    id: 1,
    title: "Portal Stoque",
    description: "Plataforma para atendimentos de chamados de Service Desk .",
    url: "https://portal.stoque.com.br/",
  },
  {
    id: 2,
    title: "Condomínio Mobile",
    description: "App para gerenciamento de condomínios.",
    url: "https://github.com/guiandrade52/intranet-residencial",
  },
  {
    id: 3,
    title: "NextJs Personal Blog",
    description: "Blog pessoal desenvolvido em NextJs",
    url: "https://github.com/guiandrade52/nextjs_personal_blog_project",
  },
  {
    id: 4,
    title: "NLW - IA",
    description: "Projeto de integração com chat GPT",
    url: "https://github.com/guiandrade52/portal-stoque-frontend-latest",
  },
  {
    id: 5,
    title: "NLW - Journey",
    description: "Documentação do projeto e tals.",
    url: "https://github.com/guiandrade52/portal-stoque-frontend-latest",
  },
  {
    id: 6,
    title: "Portal de Serviços",
    description: "Plataforma de acesso de usuários para serviços internos.",
    url: "https://portal-servicos.stoque.com.br/",
  },
];

export default function Home() {
  return (
    <main
      id="main-div"
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="border-red-600 relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="rounded-full border-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/eu.png"
          alt="Next.js Logo"
          width={120}
          height={37}
          priority
        />
      </div>
      <p id="ola-boas-vindas" className="text-gray-700 mt-4">
        Olá, meu nome é <strong>{projectOwner}</strong> e tenho{" "}
        <strong>{age}</strong> anos.
      </p>
      <p id="job-description-and-experience" className="text-gray-700  ">
        Sou <strong>{jobDescription}</strong> com{" "}
        <strong>{yearsOfExperience}</strong> anos de experiência.
        <br />
        <p id="tools" className="text-center mb-2 mt-6 font-bold">
          {" "}
          Ferramentas que trabalho:
        </p>
        <br />
        <div id="job-icons" className="flex gap-10">
          <i className="devicon-nodejs-plain-wordmark text-2xl"></i>
          <i className="devicon-react-original-wordmark text-2xl"></i>
          <i className="devicon-javascript-plain text-2xl"></i>
          <i className="devicon-typescript-plain text-2xl"></i>
          <i className="devicon-tailwindcss-plain-wordmark text-4xl"></i>
          <i className="devicon-prisma-original-wordmark text-4xl"></i>
          <i className="devicon-csharp-plain text-2xl"></i>
          <i className="devicon-github-original-wordmark text-2xl"></i>
        </div>
      </p>
     
      <span
        id="project-section"
        className="font-bold text-lg mt-8 border-b-2 border-gray-500 p-4"
      >
        Lista de projetos
      </span>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left mt-12">
        {projects.map((element: IProjects) => (
          <>
            <a
              href={element.url}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {element.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {element.description}
              </p>
            </a>
          </>
        ))}
        
      </div>
      <p className="mt-10 border-2 border-purple-50 bg-white p-6 rounded-md">
        Quer usar esse template de portifólio? Acessa meu repositório e
        clone para usar!
      </p>
    </main>
  );
}
