import './App.css';
import { Informations } from './components/informations';
import { Header } from './components/header';
import { ContextProvider } from './controller';
import { Experience } from './components/experience';
import { Skills } from './components/skills';
import { Contact } from './components/contact';
import { Languages } from './components/languages';
import { Education } from './components/education';
import { Projects } from './components/projects';
import { Links } from './components/links';
import { Footer } from './components/footer';
export const App = () => {
	return (
		<ContextProvider>
			<div className='mb-10 lg:mb-0'>
				<Header />
				<div className='flex flex-col lg:flex-row gap-12 mt-14 px-14'>
					<div className='flex flex-col gap-10 w-full lg:w-3/12 items-center lg:items-center'>
						<Informations />
						<Contact />
					</div>
					<div className='w-full lg:w-3/12 '>
						<Experience />
					</div>
					<div className='flex flex-col gap-3 w-full lg:w-3/12 items-center lg:items-start'>
						<Skills />
						<Languages />
						<Education />
						<Links />
					</div>
					<div className='w-full lg:w-3/12'>
						<Projects />
					</div>
				</div>
				<Footer />
			</div>
		</ContextProvider>
	);
};

export default App;
