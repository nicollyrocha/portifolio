import { useContextProject } from '../controller';
import brazil from '../images/brazil.png';
import usa from '../images/USA.png';

const NAV_LINKS = {
	BR: [
		{ href: '#sobre', label: 'Sobre' },
		{ href: '#experiencia', label: 'Experiência' },
		{ href: '#projetos', label: 'Projetos' },
		{ href: '#contato', label: 'Contato' },
	],
	US: [
		{ href: '#sobre', label: 'About' },
		{ href: '#experiencia', label: 'Experience' },
		{ href: '#projetos', label: 'Projects' },
		{ href: '#contato', label: 'Contact' },
	],
};

export const Header = () => {
	const { setLanguage, language } = useContextProject();
	const links = language === 'BR' ? NAV_LINKS.BR : NAV_LINKS.US;

	return (
		<header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100 shadow-sm'>
			<div className='max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 lg:px-10 py-3'>
				<a
					href='#topo'
					className='font-bold text-brand-600 tracking-tight text-lg whitespace-nowrap'
				>
					Nicolly Rocha
				</a>

				<nav className='hidden md:flex items-center gap-6'>
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className='text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors'
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className='flex flex-row items-center gap-1.5 bg-brand-50 rounded-full p-1'>
					<img
						onClick={() => setLanguage('BR')}
						className={`w-7 h-7 rounded-full object-cover cursor-pointer transition-all ${
							language === 'BR' ? 'ring-2 ring-brand-400 scale-105' : 'opacity-50 hover:opacity-80'
						}`}
						src={brazil}
						alt='brazil'
					/>
					<img
						onClick={() => setLanguage('US')}
						className={`w-7 h-7 rounded-full object-cover cursor-pointer transition-all ${
							language === 'US' ? 'ring-2 ring-brand-400 scale-105' : 'opacity-50 hover:opacity-80'
						}`}
						src={usa}
						alt='usa'
					/>
				</div>
			</div>
		</header>
	);
};
