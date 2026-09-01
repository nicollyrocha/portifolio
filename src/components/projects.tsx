import { useContextProject } from '../controller';
import { projects } from '../data/projects';

export const Projects = () => {
	const { language } = useContextProject();

	return (
		<section id='projetos' className='w-full scroll-mt-24'>
			<div className='flex flex-col items-center gap-2 mb-10'>
				<div className='text-brand-500 font-semibold tracking-wide uppercase text-sm'>
					{language === 'BR' ? 'Meus trabalhos' : 'My work'}
				</div>
				<h2 className='text-3xl font-bold text-gray-800'>
					{language === 'BR' ? 'Projetos' : 'Projects'}
				</h2>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
				{projects.map((project) => (
					<div
						key={project.github}
						className='group flex flex-col gap-4 bg-white border border-brand-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6'
					>
						<div className='flex items-start justify-between gap-2'>
							<h3 className='font-semibold text-lg text-gray-800'>
								{language === 'BR' ? project.name : project.nameEnglish}
							</h3>
							<span className='material-icons text-brand-300 group-hover:text-brand-500 transition-colors'>
								folder_open
							</span>
						</div>

						<p className='text-sm text-gray-600 leading-relaxed flex-1'>
							{language === 'BR'
								? project.description
								: project.descriptionEnglish}
						</p>

						<div className='flex flex-wrap gap-2'>
							{project.stack.map((tech) => (
								<span
									key={tech}
									className='text-xs font-medium bg-brand-50 text-brand-600 rounded-full px-3 py-1'
								>
									{tech}
								</span>
							))}
						</div>

						<div className='flex items-center gap-3 pt-2 border-t border-brand-50'>
							{project.link ? (
								<button
									onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
									className='flex items-center gap-1 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 transition-colors rounded-full px-4 py-1.5'
								>
									<span className='material-icons text-sm'>open_in_new</span>
									{language === 'BR' ? 'Ver projeto' : 'Live demo'}
								</button>
							) : (
								<span className='text-sm text-gray-400 italic px-1'>
									{language === 'BR' ? 'Sem deploy' : 'No live demo'}
								</span>
							)}
							<button
								onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
								className='flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors rounded-full px-3 py-1.5 border border-brand-200 hover:bg-brand-50'
							>
								<span className='material-icons text-sm'>code</span>
								GitHub
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
