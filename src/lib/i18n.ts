export type Language = 'es' | 'en';

export const translations = {
	es: {
		nav: {
			home: 'Inicio',
			history: 'Historia',
			publications: 'Publicaciones',
			news: 'Noticias',
			research: 'Investigaciones',
			contact: 'Contacto'
		},
		home: {
			hero: {
				title: 'Centro de Neurociencias de Cuba',
				subtitle: 'Investigación científica de excelencia en neurociencias',
				cta: 'Conocer más'
			},
			stats: {
				years: 'Años de investigación',
				publications: 'Publicaciones',
				researchers: 'Investigadores',
				projects: 'Proyectos activos'
			},
			areas: {
				title: 'Áreas de investigación',
				cognitive: {
					title: 'Neurociencias cognitivas',
					description: 'Estudio de los procesos cognitivos y su base neuronal.'
				},
				clinical: {
					title: 'Neurología clínica',
					description: 'Investigación aplicada en enfermedades neurológicas.'
				},
				imaging: {
					title: 'Neuroimagen',
					description: 'Desarrollo de técnicas avanzadas de imagen cerebral.'
				}
			}
		},
		footer: {
			rights: 'Todos los derechos reservados',
			address: 'Dirección',
			phone: 'Teléfono',
			email: 'Correo electrónico',
			follow: 'Síguenos'
		}
	},
	en: {
		nav: {
			home: 'Home',
			history: 'History',
			publications: 'Publications',
			news: 'News',
			research: 'Research',
			contact: 'Contact'
		},
		home: {
			hero: {
				title: 'Cuban Neuroscience Center',
				subtitle: 'Excellence in neuroscience research',
				cta: 'Learn more'
			},
			stats: {
				years: 'Years of research',
				publications: 'Publications',
				researchers: 'Researchers',
				projects: 'Active projects'
			},
			areas: {
				title: 'Research Areas',
				cognitive: {
					title: 'Cognitive Neuroscience',
					description: 'Study of cognitive processes and their neural basis.'
				},
				clinical: {
					title: 'Clinical Neurology',
					description: 'Applied research in neurological diseases.'
				},
				imaging: {
					title: 'Neuroimaging',
					description: 'Development of advanced brain imaging techniques.'
				}
			}
		},
		footer: {
			rights: 'All rights reserved',
			address: 'Address',
			phone: 'Phone',
			email: 'Email',
			follow: 'Follow us'
		}
	}
} as const;

export function getTranslation(lang: Language) {
	return translations[lang];
}
