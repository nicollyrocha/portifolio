import { useContextProject } from '../controller';

export const Education = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-2 w-full bg-white border border-brand-100 rounded-xl p-4'>
			<div className='flex gap-2 items-center'>
				<span className='material-icons text-brand-400 text-xl'>school</span>
				<div className='font-semibold text-gray-800'>
					{language === 'BR' ? 'Formação Acadêmica' : 'Academic Education'}
				</div>
			</div>
			<div className='text-sm text-gray-600 flex flex-col gap-1'>
				{language === 'BR' ? (
					<>
						<div>Graduação em Sistemas de Informação — Estácio de Sá (03/2018 - 12/2022)</div>
						<div>Pós-graduação em Engenharia de Software — PUC Minas (11/2023 - 05/2025)</div>
					</>
				) : (
					<>
						<div>Undergraduate in Information Systems — Estácio de Sá (03/2018 - 12/2022)</div>
						<div>Postgraduate in Software Engineering — PUC Minas (11/2023 - 05/2025)</div>
					</>
				)}
			</div>
		</div>
	);
};
