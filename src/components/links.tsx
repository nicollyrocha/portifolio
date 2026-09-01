import { useContextProject } from '../controller';

export const Links = () => {
	const { language } = useContextProject();

	const resumeLink =
		language === 'BR'
			? 'https://drive.google.com/file/d/1nIGVtTxaWt2oVXxzldyTcupRSC9Do59i/view?usp=sharing'
			: 'https://drive.google.com/file/d/1xwtes0v_7d1J0MNjKWdOoHjrnaYX_ick/view?usp=sharing';

	return (
		<div className='flex flex-col gap-3 w-full'>
			<button
				onClick={() => window.open('https://github.com/nicollyrocha', '_blank', 'noopener,noreferrer')}
				className='flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl px-4 py-3 text-sm font-medium text-gray-700'
			>
				<span className='material-icons text-base'>code</span>
				GitHub
			</button>
			<button
				onClick={() =>
					window.open(
						'https://www.linkedin.com/in/nicollyrochadacaldossantos/',
						'_blank',
						'noopener,noreferrer',
					)
				}
				className='flex items-center gap-3 bg-sky-50 hover:bg-sky-100 transition-colors rounded-xl px-4 py-3 text-sm font-medium text-sky-700'
			>
				<span className='material-icons text-base'>business_center</span>
				LinkedIn
			</button>
			<button
				onClick={() => window.open(resumeLink, '_blank', 'noopener,noreferrer')}
				className='flex items-center gap-3 bg-brand-50 hover:bg-brand-100 transition-colors rounded-xl px-4 py-3 text-sm font-medium text-brand-700'
			>
				<span className='material-icons text-base'>description</span>
				{language === 'BR' ? 'Currículo' : 'Resume'}
			</button>
		</div>
	);
};
