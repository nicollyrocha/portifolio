import { useContextProject } from '../controller';
import { projects } from '../data/projects';

export const Projects = () => {
	const { language } = useContextProject();

	return (
		<div className='bg-pink-200/20 border border-solid border-pink-200 flex flex-col gap-4 overflow-content shadow-md rounded-md p-4 w-full'>
			<div className='font-semibold text-lg flex self-center'>
				{language === 'BR' ? 'Projetos' : 'Projects'}
			</div>
			{projects.map((project) => (
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<div className='font-semibold break-normal'>
							{language === 'BR' ? project.name : project.nameEnglish}:{' '}
						</div>
						<div className='flex gap-1'>
							<div className='font-semibold'>Link:</div>
							<div
								className={`${
									project.link ? 'cursor-pointer underline' : ''
								}  text-pink-400 break-all`}
								onClick={() => (project.link ? window.open(project.link) : {})}
							>
								{project.link ? project.link : '-'}
							</div>
						</div>
						<div className='flex gap-1'>
							<div className='font-semibold'>Github:</div>
							<div
								className='cursor-pointer underline text-pink-400 break-all'
								onClick={() => window.open(project.github)}
							>
								{project.github.length > 15
									? project.github.slice(0, 35) + '...'
									: project.github}
							</div>
						</div>
					</div>
					<hr className='w-full border-pink-300' />
				</div>
			))}

			<hr />
		</div>
	);
};
