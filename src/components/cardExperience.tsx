interface IUiCard extends React.ComponentProps<'div'> {
	classname?: string;
}

export const CardExperience = (props: IUiCard) => {
	return (
		<div
			{...props}
			className='bg-pink-200/20 border-2 border-solid border-pink-200 shadow-md w-fit rounded-md p-4'
		/>
	);
};
