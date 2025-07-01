const config = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/stories/**/*.stories.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'slide-in': 'slide-in 0.3s ease-out',
			},
			keyframes: {
				'slide-in': {
					'0%': { opacity: 0, transform: 'translateX(100%)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
			},
		},
	},
	plugins: [],
};

export default config;
