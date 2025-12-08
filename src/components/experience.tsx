import { useContextProject } from "../controller";
import { CardExperience } from "./cardExperience";

export const Experience = () => {
  const { language } = useContextProject();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-2 items-center">
        <div className="font-semibold">
          {language === "BR" ? "Experiências" : "Experience"}
        </div>
        <span className="material-icons text-pink-400">work_outline</span>
      </div>
      {language === "BR" && (
        <>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Estágio IBM</div>
              <hr className="w-full border-pink-300" />
              <div>
                Estagiei durante 2 anos na IBM, fazendo a migração de aplicações
                mainframe (PL/1) para web, utilizando HTML, CSS, Js, Ts, React,
                Node, SQL, DB2...
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Software Engineer Jr @ Stark</div>
              <hr className="w-full border-pink-300" />
              <div>
                Trabalhei como software engineer jr na Stark por 1 ano e 4
                meses. Desenvolvi telas, testes, funções e componentes.
                Trabalhei com HTML, CSS, Js, React, Tailwind, Firebase...
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Frontend developer @ Voltera</div>
              <hr className="w-full border-pink-300" />
              <div>
                Trabalhei como frontend developer na Voltera por 1 ano.
                Desenvolvi telas, funções e componentes. Utilizei HTML, CSS, Js,
                Svelte, Wordpress...
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Digital Innovation Assistant @ Voltalia</div>
              <hr className="w-full border-pink-300" />
              <div>
                Trabalhei como digital innovation assistant na Voltalia por 3
                meses. Desenvolvi telas, funções e componentes. Utilizei HTML,
                CSS, Js, Next, Wordpress...
              </div>
            </div>
          </CardExperience>
        </>
      )}
      {language === "US" && (
        <>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>IBM Internship</div>
              <hr className="w-full border-pink-300" />
              <div>
                I was an intern at IBM for 2 years, migrating mainframe
                applications (PL/1) to web, using HTML, CSS, Js, Ts, React,
                Node, SQL, DB2...
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Software Engineer Jr @ Stark</div>
              <hr className="w-full border-pink-300" />
              <div>
                I worked as a junior software engineer at Stark for 1 year and 4
                months. Developed screens, tests, functions and components. I
                worked with HTML, CSS, Js, Ts, React, Tailwind, Firebase,
                Cypress...
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Frontend developer @ Voltera</div>
              <hr className="w-full border-pink-300" />
              <div>
                I worked as a frontend developer at Voltera for 1 year.
                Developed screens, functions and components. I used HTML, CSS,
                Js, Ts, Svelte, Wordpress...
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Digital Innovation Assistant @ Voltalia</div>
              <hr className="w-full border-pink-300" />
              <div>
                I worked as a digital innovation assistant at Voltalia for 3
                months. Developed screens, functions and components. I used
                HTML, CSS, Js, Ts, Next, Wordpress...
              </div>
            </div>
          </CardExperience>
        </>
      )}
    </div>
  );
};
