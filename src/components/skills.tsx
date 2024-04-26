import { useContextProject } from '../controller';
import { CssSvg } from '../images/svg/css';
import { CypressSvg } from '../images/svg/cypress';
import { HtmlSvg } from '../images/svg/html';
import { JsSvg } from '../images/svg/js';
import { NodeSvg } from '../images/svg/node';
import { ReactSvg } from '../images/svg/react';
import { TailwindSvg } from '../images/svg/tailwind';
import { TsSvg } from '../images/svg/ts';

export const Skills = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-4 lg:items-start items-center'>
			<div className='flex gap-2'>
				<div className='font-semibold'>
					{language === 'BR' ? 'Habilidades' : 'Skills'}
				</div>
				<span className='material-icons text-pink-400'>code</span>
			</div>
			<div className='lg:flex grid grid-cols-3 lg:flex-row lg:flex-wrap gap-2'>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<HtmlSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						HTML
					</div>
				</div>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<CssSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						CSS
					</div>
				</div>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<JsSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						JS
					</div>
				</div>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<TsSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						TS
					</div>
				</div>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<ReactSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						React
					</div>
				</div>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<TailwindSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						Tailwind
					</div>
				</div>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<CypressSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						Cypress
					</div>
				</div>
				<div className='hover:bg-pink-300 h-fit w-14 p-2 rounded-md hover:transition hover:ease-in-out hover:duration-500 flex flex-col group items-center'>
					<NodeSvg />
					<div className='text-xs opacity-0 group-hover:opacity-100 text-white'>
						Node
					</div>
				</div>
			</div>
		</div>
	);
};
