import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    tailwind,
    vue,
    vscode,
    git,
    postman,
    python,
    postgresql,
    linux,
    java,
    bash
    } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <p className="text-content py-2 lg:max-w-3xl">
        Back-end
      </p>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={python} title="python" alt="" />
        <img src={postgresql} title="postgresql" alt="" />
        <img src={java} title="java" alt="" />
        <img src={bash} title="bash" alt="" />
      </section>
      <p className="text-content py-2 lg:max-w-3xl">
        Front-end
      </p>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={vue} title="Vue" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={linux} title="Linux" alt="Linux" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
