import { useContextProject } from '../controller';
import whatsApp from '../images/whatsapp.png';

export const Contact = () => {
	const { language } = useContextProject();

	const copyContent = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			console.log('Content copied to clipboard');
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='font-semibold'>
				{language === 'BR' ? 'Contato' : 'Contact'}
			</div>
			<div
				onClick={() => window.open('https://wa.me/5521991198956')}
				className='flex flex-row gap-4 items-center justify-center cursor-pointer'
			>
				<div>+55 21 99119-8956</div>
				<img className='w-8' src={whatsApp} alt='whatsApp' />
			</div>
			<div className='flex gap-4 items-center'>
				<div
					onClick={() => window.open('mailto:nicollyrcs@gmail')}
					className='cursor-pointer'
				>
					nicollyrcs@gmail.com
				</div>
				<div
					onClick={() => copyContent('nicollyrcs@gmail')}
					className='material-icons cursor-pointer text-lg text-pink-400'
				>
					content_copy
				</div>
			</div>
		</div>
	);
};
