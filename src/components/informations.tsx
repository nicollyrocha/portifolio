import { useContextProject } from '../controller';
import { currentAge } from '../functions/currentAge';
import profile from '../images/profile.jpeg';

export const Informations = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full'>
			<div className='relative shrink-0'>
				<div className='absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-300 to-brand-500 opacity-30 blur-xl' />
				<div className='relative bg-white h-40 w-40 sm:h-52 sm:w-52 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-brand-200'>
					<img
						alt='Nicolly Rocha'
						loading='lazy'
						className='h-full w-full object-cover'
						src={profile}
					/>
				</div>
			</div>

			<div className='flex flex-col gap-4 items-center lg:items-start text-center lg:text-left'>
				<div className='inline-flex items-center gap-2 bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 w-fit'>
					<span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
					{language === 'BR' ? 'Disponível para novos projetos' : 'Available for new projects'}
				</div>

				<h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>
					Nicolly Rocha
				</h1>

				<p className='text-lg text-brand-500 font-medium'>
					{language === 'BR' ? 'Desenvolvedora Fullstack' : 'Fullstack Developer'}
				</p>

				<p className='text-gray-600 max-w-xl leading-relaxed'>
					{language === 'BR'
						? `${currentAge()} anos, Niterói/RJ. Apaixonada por transformar interfaces complexas em experiências simples, usando React, TypeScript e Next.js.`
						: `${currentAge()} y/o, based in Niterói, Brazil. Passionate about turning complex interfaces into simple experiences, using React, TypeScript and Next.js.`}
				</p>

				<div className='flex flex-wrap items-center gap-3 pt-2'>
					<a
						href='#projetos'
						className='bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-full px-5 py-2.5 transition-colors shadow-sm shadow-brand-200'
					>
						{language === 'BR' ? 'Ver projetos' : 'View projects'}
					</a>
					<a
						href='#contato'
						className='border border-brand-300 text-brand-600 hover:bg-brand-50 font-medium rounded-full px-5 py-2.5 transition-colors'
					>
						{language === 'BR' ? 'Falar comigo' : 'Get in touch'}
					</a>
				</div>
			</div>
		</div>
	);
};
