import { useContextProject } from '../controller';

export const Links = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-2 items-center lg:items-start'>
			<div className='flex gap-2'>
				<div className='font-semibold'>Links</div>
				<span className='material-icons text-pink-400'>link</span>
			</div>
			<div className='flex flex-row gap-4'>
				<div
					className='cursor-pointer underline text-pink-400'
					onClick={() => window.open('https://github.com/nicollyrocha')}
				>
					Github
				</div>
				<div
					className='cursor-pointer underline text-pink-400'
					onClick={() =>
						window.open('https://www.linkedin.com/in/nicollyrochadacaldossantos/')
					}
				>
					Linkedin
				</div>
				{language === 'BR' && (
					<div
						className='cursor-pointer underline text-pink-400'
						onClick={() =>
							window.open(
								'https://drive.google.com/file/d/1WEj70AiqI6Jx7E-ggByh8hj7jLsCnYkw/view?usp=sharing'
							)
						}
					>
						Currículo
					</div>
				)}
				{language === 'US' && (
					<div
						className='cursor-pointer underline text-pink-400'
						onClick={() =>
							window.open(
								'https://drive.google.com/file/d/1WEj70AiqI6Jx7E-ggByh8hj7jLsCnYkw/view?usp=sharing'
							)
						}
					>
						Resume
					</div>
				)}
			</div>
		</div>
	);
};
