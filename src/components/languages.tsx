import { useContextProject } from '../controller';

export const Languages = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-2 w-full bg-white border border-brand-100 rounded-xl p-4'>
			<div className='flex gap-2 items-center'>
				<span className='material-icons text-brand-400 text-xl'>language</span>
				<div className='font-semibold text-gray-800'>
					{language === 'BR' ? 'Idiomas' : 'Languages'}
				</div>
			</div>
			<div className='text-sm text-gray-600 flex flex-col gap-1'>
				{language === 'BR' ? (
					<>
						<div>Português (nativo)</div>
						<div>Inglês (avançado)</div>
					</>
				) : (
					<>
						<div>Portuguese (native)</div>
						<div>English (advanced)</div>
					</>
				)}
			</div>
		</div>
	);
};
