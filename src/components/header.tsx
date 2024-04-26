import { useContextProject } from '../controller';
import brazil from '../images/brazil.png';
import usa from '../images/USA.png';

export const Header = () => {
	const { setLanguage, language } = useContextProject();

	return (
		<div className='bg-pink-200 w-full py-2 shadow-sm flex flex-row items-center justify-between gap-5 px-7'>
			<div className='hidden sm:flex sm:w-2/12 lg:w-fit'></div>
			<div className='w-full sm:w-fit'>
				{language === 'BR'
					? 'Bem vindo(a) ao meu portfólio!'
					: 'Welcome to my portfolio!'}
			</div>
			<div className='flex flex-row gap-2'>
				<img
					onClick={() => setLanguage('BR')}
					className='w-8 sm:w-10 cursor-pointer'
					src={brazil}
					alt='brazil'
				/>
				<img
					onClick={() => setLanguage('US')}
					className='w-8 sm:w-10 cursor-pointer'
					src={usa}
					alt='usa'
				/>
			</div>
		</div>
	);
};
