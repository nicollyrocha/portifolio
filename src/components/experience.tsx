import { useContextProject } from '../controller'
import { CardExperience } from './cardExperience'

export const Experience = () => {
  const { language } = useContextProject()

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-2 items-center">
        <div className="font-semibold">
          {language === 'BR' ? 'Experiências' : 'Experience'}
        </div>
        <span className="material-icons text-pink-400">work_outline</span>
      </div>
      {language === 'BR' && (
        <>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Estágio IBM</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Desenvolvimento e manutenção de aplicações internas com React,
                JavaScript, HTML e CSS. <br />
                ● Implementação de funcionalidades utilizando SQL e DB2. <br />
                ● Suporte ao desenvolvimento de soluções corporativas. <br />●
                Migração de aplicações legadas de mainframe (PL/1) para
                tecnologias web.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Software Engineer Jr @ Stark</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Desenvolvimento de aplicações frontend com React e TypeScript.{' '}
                <br />
                ● Implementação de interfaces modernas com Tailwind CSS. <br />
                ● Integração com Firebase. <br />● Criação de testes
                automatizados com Jest e Cypress.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Frontend developer @ Voltera</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Desenvolvimento e manutenção de aplicações utilizando
                TypeScript e Svelte. <br />
                ● Implementação de melhorias de UX e interfaces responsivas.{' '}
                <br />
                ● Customização e suporte técnico em sites WordPress. <br />●
                Colaboração em equipe utilizando metodologias ágeis.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Digital Innovation Assistant @ Voltalia</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Desenvolvimento de aplicações web com TypeScript e Next.js.{' '}
                <br />
                ● Criação de interfaces responsivas utilizando Tailwind CSS.{' '}
                <br />
                ● Integração de aplicações frontend com serviços Azure. <br />●
                Manutenção e evolução de aplicações corporativas.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Desenvolvedora Fullstack @ PACTO</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Desenvolvimento de funcionalidades para o SIMPE, sistema do
                Ministério da Saúde. <br />
                ● Construção de interfaces complexas utilizando Next.js, React e
                TypeScript. <br />
                ● Implementação de layouts pixel-perfect a partir de protótipos
                Figma. <br />● Desenvolvimento de componentes reutilizáveis e
                responsivos com Tailwind CSS.
              </div>
            </div>
          </CardExperience>
        </>
      )}
      {language === 'US' && (
        <>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>IBM Internship</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Developed and maintained internal applications using React,
                JavaScript, HTML, and CSS. <br /> ● Implemented features using
                SQL and DB2. <br /> ● Supported the development of internal
                corporate solutions. <br /> ● Migrated legacy applications from
                mainframe (PL/1) to web technologies.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Software Engineer Jr @ Stark</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Developed frontend applications using React and TypeScript.
                <br />
                ● Built modern user interfaces with Tailwind CSS. <br />
                ● Integrated applications with Firebase services. <br />●
                Created and maintained automated tests using Jest and Cypress.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Frontend developer @ Voltera</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Developed and maintained applications using TypeScript and
                Svelte.
                <br />
                ● Implemented UX improvements and responsive interfaces.
                <br />
                ● Customized and provided technical support for WordPress
                websites.
                <br />● Collaborated with cross-functional teams in an Agile
                environment.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Digital Innovation Assistant @ Voltalia</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Developed web applications using TypeScript and Next.js.
                <br />
                ● Created responsive user interfaces with Tailwind CSS.
                <br />
                ● Integrated frontend applications with Azure services.
                <br />● Maintained and enhanced corporate applications.
              </div>
            </div>
          </CardExperience>
          <CardExperience>
            <div className="flex flex-col gap-4">
              <div>Fullstack Developer @ PACTO</div>
              <hr className="w-full border-pink-300" />
              <div>
                ● Developed new features for SIMPE, a healthcare system used by
                Brazil's Ministry of Health. <br />● Built complex user
                interfaces using Next.js, React, and TypeScript.
                <br /> ● Implemented pixel-perfect layouts based on Figma
                designs.
                <br /> ● Developed reusable and responsive components using
                Tailwind CSS.
              </div>
            </div>
          </CardExperience>
        </>
      )}
    </div>
  )
}
