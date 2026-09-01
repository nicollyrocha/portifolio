interface IUiCard extends React.ComponentProps<'div'> {
	title: string;
	last?: boolean;
}

export const CardExperience = ({ title, last, children, ...props }: IUiCard) => {
	return (
		<div className='relative pl-8'>
			{!last && (
				<span className='absolute left-[5px] top-4 bottom-0 w-px bg-brand-200' />
			)}
			<span className='absolute left-0 top-1.5 w-3 h-3 rounded-full bg-brand-400 ring-4 ring-brand-100' />
			<div
				{...props}
				className='bg-white border border-brand-100 shadow-sm hover:shadow-md transition-shadow rounded-xl p-4 mb-6'
			>
				<div className='font-semibold text-gray-800 mb-2'>{title}</div>
				{children}
			</div>
		</div>
	);
};
