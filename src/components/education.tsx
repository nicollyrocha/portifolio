import { useContextProject } from '../controller';

export const Education = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-2 lg:w-fit items-center lg:items-start'>
			{language === 'BR' && (
				<>
					<div className='flex gap-2'>
						<div className='font-semibold'>Formação Acadêmica</div>
						<span className='material-icons text-pink-400'>school</span>
					</div>
					<div className='flex flex-wrap w-fit'>
						• Graduação em Sistemas de Informação - Estácio de Sá (03/2018 - 12/2022)
					</div>
					<div>
						• Pós graduação em Engenharia de Software - PUC Minas (11/2023 -
						atualmente)
					</div>
				</>
			)}
			{language === 'US' && (
				<>
					<div className='flex gap-2'>
						<div className='font-semibold'>Academic Education</div>
						<span className='material-icons text-pink-400'>school</span>
					</div>
					<div className='flex flex-wrap'>
						• Undergraduate course in Information Systems – Estácio de Sá (03/2018 -
						12/2022)
					</div>
					<div>
						• Post-graduate course in Software Engineering - PUC Minas (11/2023 - now)
					</div>
				</>
			)}
		</div>
	);
};
