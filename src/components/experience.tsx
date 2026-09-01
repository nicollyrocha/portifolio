import { useContextProject } from '../controller';
import { CardExperience } from './cardExperience';

const bulletClass = 'text-sm text-gray-600 space-y-1.5 list-disc list-inside marker:text-brand-400';

export const Experience = () => {
	const { language } = useContextProject();

	const experiencesBR = [
		{
			title: 'Estágio IBM',
			items: [
				'Desenvolvimento e manutenção de aplicações internas com React, JavaScript, HTML e CSS.',
				'Implementação de funcionalidades utilizando SQL e DB2.',
				'Suporte ao desenvolvimento de soluções corporativas.',
				'Migração de aplicações legadas de mainframe (PL/1) para tecnologias web.',
			],
		},
		{
			title: 'Software Engineer Jr @ Stark',
			items: [
				'Desenvolvimento de aplicações frontend com React e TypeScript.',
				'Implementação de interfaces modernas com Tailwind CSS.',
				'Integração com Firebase.',
				'Criação de testes automatizados com Jest e Cypress.',
			],
		},
		{
			title: 'Frontend developer @ Voltera',
			items: [
				'Desenvolvimento e manutenção de aplicações utilizando TypeScript e Svelte.',
				'Implementação de melhorias de UX e interfaces responsivas.',
				'Customização e suporte técnico em sites WordPress.',
				'Colaboração em equipe utilizando metodologias ágeis.',
			],
		},
		{
			title: 'Digital Innovation Assistant @ Voltalia',
			items: [
				'Desenvolvimento de aplicações web com TypeScript e Next.js.',
				'Criação de interfaces responsivas utilizando Tailwind CSS.',
				'Integração de aplicações frontend com serviços Azure.',
				'Manutenção e evolução de aplicações corporativas.',
			],
		},
		{
			title: 'Desenvolvedora Fullstack @ PACTO',
			items: [
				'Desenvolvimento de funcionalidades para o SIMPE, sistema do Ministério da Saúde.',
				'Construção de interfaces complexas utilizando Next.js, React e TypeScript.',
				'Implementação de layouts pixel-perfect a partir de protótipos Figma.',
				'Desenvolvimento de componentes reutilizáveis e responsivos com Tailwind CSS.',
			],
		},
	];

	const experiencesUS = [
		{
			title: 'IBM Internship',
			items: [
				'Developed and maintained internal applications using React, JavaScript, HTML, and CSS.',
				'Implemented features using SQL and DB2.',
				'Supported the development of internal corporate solutions.',
				'Migrated legacy applications from mainframe (PL/1) to web technologies.',
			],
		},
		{
			title: 'Software Engineer Jr @ Stark',
			items: [
				'Developed frontend applications using React and TypeScript.',
				'Built modern user interfaces with Tailwind CSS.',
				'Integrated applications with Firebase services.',
				'Created and maintained automated tests using Jest and Cypress.',
			],
		},
		{
			title: 'Frontend developer @ Voltera',
			items: [
				'Developed and maintained applications using TypeScript and Svelte.',
				'Implemented UX improvements and responsive interfaces.',
				'Customized and provided technical support for WordPress websites.',
				'Collaborated with cross-functional teams in an Agile environment.',
			],
		},
		{
			title: 'Digital Innovation Assistant @ Voltalia',
			items: [
				'Developed web applications using TypeScript and Next.js.',
				'Created responsive user interfaces with Tailwind CSS.',
				'Integrated frontend applications with Azure services.',
				'Maintained and enhanced corporate applications.',
			],
		},
		{
			title: 'Fullstack Developer @ PACTO',
			items: [
				"Developed new features for SIMPE, a healthcare system used by Brazil's Ministry of Health.",
				'Built complex user interfaces using Next.js, React, and TypeScript.',
				'Implemented pixel-perfect layouts based on Figma designs.',
				'Developed reusable and responsive components using Tailwind CSS.',
			],
		},
	];

	const experiences = language === 'BR' ? experiencesBR : experiencesUS;

	return (
		<section id='experiencia' className='flex flex-col gap-4 w-full scroll-mt-24'>
			<div className='flex gap-2 items-center'>
				<span className='material-icons text-brand-400'>work_outline</span>
				<div className='font-semibold text-lg text-gray-800'>
					{language === 'BR' ? 'Experiências' : 'Experience'}
				</div>
			</div>
			<div>
				{experiences.map((exp, index) => (
					<CardExperience
						key={exp.title}
						title={exp.title}
						last={index === experiences.length - 1}
					>
						<ul className={bulletClass}>
							{exp.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</CardExperience>
				))}
			</div>
		</section>
	);
};
