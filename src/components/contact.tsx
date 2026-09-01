import { useState } from 'react';
import { useContextProject } from '../controller';
import whatsApp from '../images/whatsapp.png';

export const Contact = () => {
	const { language } = useContextProject();
	const [copied, setCopied] = useState(false);

	const copyContent = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	return (
		<div className='flex flex-col gap-3 w-full'>
			<button
				onClick={() => window.open('https://wa.me/5521991198956', '_blank', 'noopener,noreferrer')}
				className='flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100 transition-colors rounded-xl px-4 py-3 text-left'
			>
				<img className='w-6 h-6' src={whatsApp} alt='WhatsApp' />
				<span className='text-sm font-medium text-gray-700'>+55 21 99119-8956</span>
			</button>

			<button
				onClick={() => window.open('mailto:nicollyrcs.dev@gmail.com')}
				className='flex items-center justify-between gap-3 bg-brand-50 hover:bg-brand-100 transition-colors rounded-xl px-4 py-3 text-left'
			>
				<div className='flex items-center gap-3'>
					<span className='material-icons text-brand-500'>mail</span>
					<span className='text-sm font-medium text-gray-700'>nicollyrcs.dev@gmail.com</span>
				</div>
				<span
					onClick={(e) => {
						e.stopPropagation();
						e.preventDefault();
						copyContent('nicollyrcs.dev@gmail.com');
					}}
					className='material-icons text-base text-brand-400 hover:text-brand-600'
					title={language === 'BR' ? 'Copiar email' : 'Copy email'}
				>
					{copied ? 'check' : 'content_copy'}
				</span>
			</button>
		</div>
	);
};
