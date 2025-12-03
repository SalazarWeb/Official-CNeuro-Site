import { writable } from 'svelte/store';
import type { Language } from '$lib/i18n';

function createLanguageStore() {
	const { subscribe, set } = writable<Language>('es');

	return {
		subscribe,
		setLanguage: (lang: Language) => set(lang),
		toggle: () => {
			let current: Language;
			subscribe((value) => (current = value))();
			set(current === 'es' ? 'en' : 'es');
		}
	};
}

export const language = createLanguageStore();
