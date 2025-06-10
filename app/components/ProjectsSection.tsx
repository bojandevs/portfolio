const ProjectsSection = () => {
	const projects = [
		{
			title: 'Portfolio Website',
			description:
				"You're looking at it! A personal website built with Next.js and TailwindCSS to showcase my work, deployed via Vercel.",
			tech: ['Next.js', 'TailwindCSS', 'Vercel'],
			link: 'https://yourname.vercel.app',
		},
		{
			title: 'Coming Soon!',
			description:
				"This will be for a next project im working on!.",
			tech: ['Next.js', 'TailwindCSS', 'Vercel'],
			link: 'https://yourname.vercel.app',
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Projects</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{projects.map((project) => (
						<div
							key={project.title}
							className="w-full sm:max-w-[334px] p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300"
						>
							<h4 className="text-md font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h4>
							<p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
							<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
								Tech: {project.tech.join(', ')}
							</p>
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-blue-500 hover:underline mt-1 inline-block"
								>
									View Project →
								</a>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
