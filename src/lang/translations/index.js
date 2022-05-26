export default {
	me: {
		name: 'Crnogorski',
		load: () => { return import('./me.json'); },
	},
	en: {
		name: 'English',
		load: () => { return import('./en.json'); },
	},
};
