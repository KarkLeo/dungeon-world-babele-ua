
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'dungeon-world-babele-ua',
			lang: 'uk',
			dir: 'compendium'
		});
	}
});