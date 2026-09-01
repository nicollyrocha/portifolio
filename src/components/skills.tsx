import { useContextProject } from '../controller';
import { CssSvg } from '../images/svg/css';
import { CypressSvg } from '../images/svg/cypress';
import { HtmlSvg } from '../images/svg/html';
import { JsSvg } from '../images/svg/js';
import { NextSvg } from '../images/svg/next';
import { NodeSvg } from '../images/svg/node';
import { ReactSvg } from '../images/svg/react';
import { TailwindSvg } from '../images/svg/tailwind';
import { TsSvg } from '../images/svg/ts';

const SKILLS = [
	{ label: 'HTML', Icon: HtmlSvg },
	{ label: 'CSS', Icon: CssSvg },
	{ label: 'JS', Icon: JsSvg },
	{ label: 'TS', Icon: TsSvg },
	{ label: 'React', Icon: ReactSvg },
	{ label: 'Tailwind', Icon: TailwindSvg },
	{ label: 'Cypress', Icon: CypressSvg },
	{ label: 'Node', Icon: NodeSvg },
	{ label: 'Next', Icon: NextSvg },
];

export const Skills = () => {
	const { language } = useContextProject();

	return (
		<div className='flex flex-col gap-4 w-full items-center lg:items-start'>
			<div className='flex gap-2 items-center'>
				<span className='material-icons text-brand-400'>code</span>
				<div className='font-semibold text-gray-800'>
					{language === 'BR' ? 'Habilidades' : 'Skills'}
				</div>
			</div>
			<div className='grid grid-cols-3 sm:grid-cols-3 gap-2 w-full'>
				{SKILLS.map(({ label, Icon }) => (
					<div
						key={label}
						className='flex flex-col items-center justify-center gap-1 bg-white border border-brand-100 hover:border-brand-300 hover:shadow-md transition-all rounded-xl py-3'
					>
						<Icon />
						<div className='text-[11px] font-medium text-gray-500'>{label}</div>
					</div>
				))}
			</div>
		</div>
	);
};
