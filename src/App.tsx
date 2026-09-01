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
import { useContextProject } from './controller';

const Content = () => {
	const { language } = useContextProject();

	return (
		<div id='topo' className='min-h-screen bg-gradient-to-b from-brand-50/70 via-white to-white'>
			<Header />

			<main className='max-w-6xl mx-auto px-6 lg:px-10 flex flex-col gap-24 pt-16 pb-24'>
				<section id='sobre' className='scroll-mt-24 animate-fadeInUp'>
					<Informations />
				</section>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
					<div className='lg:col-span-2'>
						<Experience />
					</div>
					<div className='flex flex-col gap-5'>
						<Skills />
						<Languages />
						<Education />
					</div>
				</div>

				<Projects />

				<section
					id='contato'
					className='scroll-mt-24 bg-white border border-brand-100 shadow-sm rounded-3xl p-8 lg:p-12'
				>
					<div className='flex flex-col items-center text-center gap-2 mb-8'>
						<h2 className='text-2xl font-bold text-gray-800'>
							{language === 'BR' ? 'Vamos conversar?' : "Let's talk"}
						</h2>
						<p className='text-gray-500 max-w-md'>
							{language === 'BR'
								? 'Estou aberta a novas oportunidades, freelas e colaborações.'
								: "I'm open to new opportunities, freelance work and collaborations."}
						</p>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto'>
						<Contact />
						<div className='flex flex-col justify-center'>
							<Links />
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export const App = () => {
	return (
		<ContextProvider>
			<Content />
		</ContextProvider>
	);
};

export default App;
