export interface Project {
	name: string;
	nameEnglish: string;
	description: string;
	descriptionEnglish: string;
	stack: string[];
	link: string;
	github: string;
}

export const projects: Project[] = [
	{
		name: 'Sistema CRM',
		nameEnglish: 'CRM System',
		description:
			'Alicerce de um CRM completo: autenticação (login, recuperação de senha, troca de email), conta de usuário e landing page, pronto para receber as funcionalidades de contatos e funil de vendas.',
		descriptionEnglish:
			'Foundation for a full CRM: complete authentication (login, password recovery, email change), user account and landing page, ready to receive contacts and sales-pipeline features.',
		stack: ['Next.js', 'TypeScript', 'Postgres', 'Drizzle ORM', 'Tailwind'],
		link: 'https://sistema-crm-alpha.vercel.app',
		github: 'https://github.com/nicollyrocha/sistema-crm',
	},
	{
		name: 'Sistema Kanban',
		nameEnglish: 'Kanban System',
		description:
			'Quadro kanban para organizar projetos e tarefas com colunas, cartões, etiquetas coloridas, prazos e arrastar-e-soltar.',
		descriptionEnglish:
			'Kanban board to organize projects and tasks with columns, cards, color-coded labels, deadlines and drag-and-drop.',
		stack: ['Next.js', 'TypeScript', 'Tailwind'],
		link: 'https://sistema-kanban-flame.vercel.app',
		github: 'https://github.com/nicollyrocha/sistema-kanban',
	},
	{
		name: 'Feed de Posts',
		nameEnglish: 'Post Feed',
		description:
			'Rede social simples para criar, editar e excluir posts em um feed compartilhado, feita como teste técnico para a CodeLeap.',
		descriptionEnglish:
			'Simple social feed to create, edit and delete posts, built as a technical test for CodeLeap.',
		stack: ['React', 'TypeScript'],
		link: 'https://codeleap-frontend-test-beta.vercel.app',
		github: 'https://github.com/nicollyrocha/codeleap-frontend-test',
	},
	{
		name: 'Caixa de Entrada Inteligente',
		nameEnglish: 'Smart Inbox',
		description:
			'Interface de caixa de entrada com organização inteligente de mensagens, filtros e leitura facilitada.',
		descriptionEnglish:
			'Inbox interface with smart message organization, filters and a streamlined reading experience.',
		stack: ['React', 'TypeScript', 'Tailwind'],
		link: 'https://smart-inbox-ui.vercel.app',
		github: 'https://github.com/nicollyrocha/smart-inbox-ui',
	},
	{
		name: 'Loja Virtual',
		nameEnglish: 'Virtual Store',
		description:
			'E-commerce com catálogo de produtos, carrinho de compras e checkout, desenvolvido como teste técnico para a MKS Sistemas.',
		descriptionEnglish:
			'E-commerce with product catalog, shopping cart and checkout, built as a technical test for MKS Sistemas.',
		stack: ['Next.js', 'TypeScript'],
		link: 'https://mks-sistemas-loja.vercel.app',
		github: 'https://github.com/nicollyrocha/mks-sistemas-loja',
	},
	{
		name: 'Controle de Ponto',
		nameEnglish: 'Time Tracking',
		description:
			'Sistema de controle de ponto para registrar e acompanhar a jornada de trabalho, com testes automatizados end-to-end.',
		descriptionEnglish:
			'Time-tracking system to log and monitor work hours, with end-to-end automated tests.',
		stack: ['React', 'TypeScript', 'Cypress'],
		link: 'https://controle-ponto-ui.vercel.app',
		github: 'https://github.com/nicollyrocha/controle-ponto-ui',
	},
	{
		name: 'Holiday Plan',
		nameEnglish: 'Holiday Plan',
		description:
			'Planejador de viagens e feriados com roteiro próprio, integrado a uma API dedicada em Node.js.',
		descriptionEnglish:
			'Trip and holiday planner with its own itinerary, backed by a dedicated Node.js API.',
		stack: ['React', 'TypeScript', 'Node.js'],
		link: 'https://holiday-plan-pi.vercel.app',
		github: 'https://github.com/nicollyrocha/holiday-plan',
	},
	{
		name: 'Ramen Go',
		nameEnglish: 'Ramen Go',
		description:
			'Landing page de um serviço fictício de delivery de ramen personalizável, com montagem de caldo e acompanhamentos.',
		descriptionEnglish:
			'Landing page for a fictional customizable ramen delivery service, with a broth and topping builder.',
		stack: ['HTML', 'CSS', 'JavaScript'],
		link: 'https://ramen-go-one.vercel.app',
		github: 'https://github.com/nicollyrocha/ramen-go',
	},
	{
		name: 'Sistema SAAS de Mensageria',
		nameEnglish: 'SaaS Messaging System',
		description:
			'Sistema de disparo e gerenciamento de mensagens em massa para pequenos negócios.',
		descriptionEnglish:
			'Bulk messaging dispatch and management system for small businesses.',
		stack: ['React', 'TypeScript', 'Firebase'],
		link: 'https://sendflow-test-533e0.web.app/',
		github: 'https://github.com/nicollyrocha/sendflow-test',
	},
	{
		name: 'Lista de Heróis',
		nameEnglish: 'Heroes List',
		description:
			'Consumo de API pública para listar, buscar e favoritar super-heróis.',
		descriptionEnglish:
			'Public API consumption to list, search and favorite superheroes.',
		stack: ['React', 'JavaScript'],
		link: '',
		github: 'https://github.com/nicollyrocha/heroes-list',
	},
];
