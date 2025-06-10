const SkillsSection = () => {
	const skills = [
		{
			category: 'Languages',
			items: ['Java', 'C++', 'C', 'Python'],
			icon: (
				<svg className="w-4 h-4" fill="none" stroke="#9DA2AF" strokeWidth="1.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16M4 12h16M4 7h16" />
				</svg> // icon: code/text symbol
			),
		},
		{
			category: 'Frontend',
			items: ['HTML', 'CSS', 'JavaScript'],
			icon: (
				<svg className="w-4 h-4" fill="none" stroke="#9DA2AF" strokeWidth="1.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 20l-6-6h12l-6 6zM6 10l6-6 6 6" />
				</svg> // icon: layers/structure
			),
		},
		{
			category: 'Tools / Cloud / Misc',
			items: ['Git & GitHub', 'VS Code', 'Linux Bash'],
			icon: (
				<svg className="w-4 h-4" fill="none" stroke="#9DA2AF" strokeWidth="1.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3 7v13h18V7M8 3h8a2 2 0 012 2v2H6V5a2 2 0 012-2z" />
				</svg> // icon: terminal/tools
			),
		},
		{
			category: 'Backend / Databases',
			items: ['MySQL'],
			icon: (
				<svg className="w-4 h-4" fill="none" stroke="#9DA2AF" strokeWidth="1.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75C4.5 5.231 7.462 4 11 4s6.5 1.231 6.5 2.75-2.962 2.75-6.5 2.75S4.5 8.269 4.5 6.75zM4.5 6.75v10.5c0 1.519 2.962 2.75 6.5 2.75s6.5-1.231 6.5-2.75V6.75" />
				</svg> // icon: database
			),
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Core Skills</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category}>
							<div className="flex items-center space-x-2 mb-2">
								{skillGroup.icon}
								<h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">{skillGroup.category}</h4>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
