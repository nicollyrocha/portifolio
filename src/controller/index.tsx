import { createContext, useContext, useEffect, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

/**
 * I'm using a controller to not have to pass states through all the components. It starts with a _ because it's private
 * */
export const _useController = () => {
	const [language, setLanguage] = useState('BR');
	return { language, setLanguage };
};

const _Controller = createContext({} as ReturnType<typeof _useController>);

export const useContextProject = () => useContext(_Controller);

export const ContextProvider: React.FC<Props> = ({ children }) => {
	const controller = _useController();
	return (
		<_Controller.Provider value={controller}>{children}</_Controller.Provider>
	);
};
