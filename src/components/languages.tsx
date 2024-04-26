import { useContextProject } from '../controller';

export const Languages = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-4 w-full lg:items-start items-center'>
			{language === 'BR' && (
				<>
					<div className='flex gap-2 text-center lg:text-left'>
						<div className='font-semibold'>Idiomas</div>
						<span className='material-icons text-pink-400'>language</span>
					</div>
					<div>• Português (nativo)</div>
					<div>• Inglês (avançado)</div>
				</>
			)}
			{language === 'US' && (
				<>
					<div className='flex gap-2'>
						<div className='font-semibold'>Languages</div>
						<span className='material-icons text-pink-400'>language</span>
					</div>
					<div>• Portuguese (native)</div>
					<div>• English (advanced)</div>
				</>
			)}
		</div>
	);
};
