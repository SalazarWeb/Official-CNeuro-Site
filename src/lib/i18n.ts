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
				subtitle: 'Investigación científica de excelencia',
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
		publications: {
			title: 'Publicaciones Científicas',
			subtitle: 'Nuestra producción científica en revistas de alto impacto internacional',
			search: 'Buscar por título o autor...',
			allYears: 'Todos los años',
			noResults: 'No se encontraron publicaciones',
			authors: 'Autores',
			journal: 'Revista',
			year: 'Año'
		},
		contact: {
			title: 'Contacto y Ubicación',
			subtitle: 'Estamos aquí para responder sus consultas y establecer colaboraciones',
			form: {
				title: 'Envíenos un mensaje',
				name: 'Nombre completo',
				email: 'Correo electrónico',
				subject: 'Asunto',
				message: 'Mensaje',
				send: 'Enviar mensaje',
				success: 'Gracias por contactarnos. Le responderemos pronto.'
			},
			info: {
				title: 'Información de contacto',
				address: 'Dirección',
				phone: 'Teléfono',
				email: 'Correo electrónico',
				hours: 'Horario de atención',
				weekdays: 'Lunes a Viernes',
				saturday: 'Sábados',
				mapLink: 'Ver mapa más grande'
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
		publications: {
			title: 'Scientific Publications',
			subtitle: 'Our scientific production in high-impact international journals',
			search: 'Search by title or author...',
			allYears: 'All years',
			noResults: 'No publications found',
			authors: 'Authors',
			journal: 'Journal',
			year: 'Year'
		},
		contact: {
			title: 'Contact and Location',
			subtitle: 'We are here to answer your questions and establish collaborations',
			form: {
				title: 'Send us a message',
				name: 'Full name',
				email: 'Email',
				subject: 'Subject',
				message: 'Message',
				send: 'Send message',
				success: 'Thank you for contacting us. We will respond soon.'
			},
			info: {
				title: 'Contact information',
				address: 'Address',
				phone: 'Phone',
				email: 'Email',
				hours: 'Business hours',
				weekdays: 'Monday to Friday',
				saturday: 'Saturday',
				mapLink: 'View larger map'
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

// Helper function for translations
export function t(lang: Language, key: string): string {
	const keys = key.split('.');
	let value: any = translations[lang];
	
	for (const k of keys) {
		value = value?.[k];
		if (value === undefined) return key;
	}
	
	return typeof value === 'string' ? value : key;
}
