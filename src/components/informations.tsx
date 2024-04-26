import { useContextProject } from '../controller';
import { currentAge } from '../functions/currentAge';
import profile from '../images/profile.jpg';

export const Informations = () => {
	const { language } = useContextProject();

	return (
		<div className='h-fit flex items-center bg-pink-200/50 border-2 border-solid border-pink-200 shadow-md rounded-md justify-center w-full'>
			<div className='flex flex-col gap-4 items-center justify-center my-5'>
				<div className='-rotate-45 bg-white h-32 w-32 lg:h-44 lg:w-44 rounded-full overflow-hidden border-pink-500 border border-solid flex items-center'>
					<img
						alt='me'
						loading='lazy'
						className='h-auto w-full object-fill'
						src={profile}
					/>
				</div>
				<div className='w-full flex justify-center'>
					Nicolly Rocha, {currentAge()} {language === 'BR' ? 'anos.' : 'y/o'}
				</div>
				<div className='w-full flex justify-center'>Niterói, RJ.</div>
				<div className='w-full flex justify-center'>
					{language === 'BR' ? 'Desenvolvedora frontend.' : 'Frontend developer.'}
				</div>
			</div>
		</div>
	);
};
