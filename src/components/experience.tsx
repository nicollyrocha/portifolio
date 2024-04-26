import { useContextProject } from '../controller';
import { CardExperience } from './cardExperience';

export const Experience = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-4 w-full'>
			<div className='flex gap-2 items-center'>
				<div className='font-semibold'>
					{language === 'BR' ? 'Experiências' : 'Experience'}
				</div>
				<span className='material-icons text-pink-400'>work_outline</span>
			</div>
			{language === 'BR' && (
				<>
					<CardExperience>
						<div className='flex flex-col gap-4'>
							<div>Estágio IBM</div>
							<hr className='w-full border-pink-300' />
							<div>
								Estagiei durante 2 anos na IBM, fazendo a migração de aplicações
								mainframe (PL/1) para web, utilizando HTML, CSS, Js, Ts, React, Node,
								SQL, DB2...
							</div>
						</div>
					</CardExperience>
					<CardExperience>
						<div className='flex flex-col gap-4'>
							<div>Software Engineer Jr @ Stark</div>
							<hr className='w-full border-pink-300' />
							<div>
								Trabalhei como software engineer jr na Stark por 1 ano e 4 meses.
								Desenvolvi telas, testes, funções e componentes. Trabalhei com HTML,
								CSS, Js, React, Tailwind, Firebase...
							</div>
						</div>
					</CardExperience>
				</>
			)}
			{language === 'US' && (
				<>
					<CardExperience>
						<div className='flex flex-col gap-4'>
							<div>IBM Internship</div>
							<hr className='w-full border-pink-300' />
							<div>
								I was an intern at IBM for 2 years, migrating mainframe applications
								(PL/1) to web, using HTML, CSS, Js, Ts, React, Node, SQL, DB2...
							</div>
						</div>
					</CardExperience>
					<CardExperience>
						<div className='flex flex-col gap-4'>
							<div>Software Engineer Jr @ Stark</div>
							<hr className='w-full border-pink-300' />
							<div>
								I worked as a junior software engineer at Stark for 1 year and 4 months.
								Developed screens, tests, functions and components. I worked with HTML,
								CSS, Js, React, Tailwind, Firebase...
							</div>
						</div>
					</CardExperience>
				</>
			)}
		</div>
	);
};
