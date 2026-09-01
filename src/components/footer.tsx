import butterflies from '../images/butterflies.gif';
import { useContextProject } from '../controller';

export const Footer = () => {
	const { language } = useContextProject();

	return (
		<footer className='mt-16 border-t border-brand-100 bg-white/60'>
			<div
				className='hidden lg:block w-full h-16 xl:h-24 opacity-70'
				style={{
					backgroundImage: `url(${butterflies})`,
					backgroundRepeat: 'repeat-x',
					backgroundSize: 'auto 100%',
				}}
			/>
			<div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500'>
				<div>© {new Date().getFullYear()} Nicolly Rocha.</div>
				<div className='flex gap-4'>
					<a
						href='https://github.com/nicollyrocha'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-brand-500 transition-colors'
					>
						GitHub
					</a>
					<a
						href='https://www.linkedin.com/in/nicollyrochadacaldossantos/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-brand-500 transition-colors'
					>
						LinkedIn
					</a>
					<a href='#topo' className='hover:text-brand-500 transition-colors'>
						{language === 'BR' ? 'Voltar ao topo' : 'Back to top'}
					</a>
				</div>
			</div>
		</footer>
	);
};
