<script lang="ts">
	import { language } from '$lib/stores/language';

	let currentLang = $state($language);

	$effect(() => {
		currentLang = $language;
	});

	const news = [
		{
			id: 1,
			title: {
				es: 'Nueva colaboración internacional con el Instituto Karolinska',
				en: 'New international collaboration with Karolinska Institute'
			},
			date: '2025-11-15',
			category: {
				es: 'Colaboraciones',
				en: 'Collaborations'
			},
			excerpt: {
				es: 'CNEURO establece una alianza estratégica con el prestigioso Instituto Karolinska de Suecia para investigar nuevos tratamientos en enfermedades neurodegenerativas.',
				en: 'CNEURO establishes a strategic alliance with the prestigious Karolinska Institute of Sweden to research new treatments in neurodegenerative diseases.'
			},
			content: {
				es: 'El Centro de Neurociencias de Cuba ha firmado un acuerdo de colaboración con el Instituto Karolinska, uno de los centros de investigación médica más prestigiosos del mundo. Esta alianza permitirá el intercambio de investigadores, el desarrollo conjunto de proyectos y el acceso a tecnologías de vanguardia en el estudio de enfermedades neurodegenerativas.',
				en: 'The Cuban Neuroscience Center has signed a collaboration agreement with the Karolinska Institute, one of the most prestigious medical research centers in the world. This alliance will enable researcher exchanges, joint project development, and access to cutting-edge technologies in the study of neurodegenerative diseases.'
			}
		},
		{
			id: 2,
			title: {
				es: 'Proyecto de IA para diagnóstico temprano de Alzheimer',
				en: 'AI project for early diagnosis of Alzheimer\'s'
			},
			date: '2025-10-28',
			category: {
				es: 'Proyectos',
				en: 'Projects'
			},
			excerpt: {
				es: 'Investigadores del CNEURO desarrollan un sistema de inteligencia artificial capaz de predecir el riesgo de Alzheimer con años de anticipación.',
				en: 'CNEURO researchers develop an artificial intelligence system capable of predicting Alzheimer\'s risk years in advance.'
			},
			content: {
				es: 'Un equipo multidisciplinario de investigadores ha desarrollado un innovador sistema de inteligencia artificial que analiza patrones en neuroimágenes y datos clínicos para predecir el riesgo de desarrollar enfermedad de Alzheimer hasta 5 años antes de la aparición de síntomas clínicos. El sistema ha demostrado una precisión del 89% en estudios preliminares.',
				en: 'A multidisciplinary team of researchers has developed an innovative artificial intelligence system that analyzes patterns in neuroimaging and clinical data to predict the risk of developing Alzheimer\'s disease up to 5 years before the onset of clinical symptoms. The system has demonstrated 89% accuracy in preliminary studies.'
			}
		},
		{
			id: 3,
			title: {
				es: 'Inauguración del nuevo laboratorio de electrofisiología',
				en: 'Inauguration of the new electrophysiology laboratory'
			},
			date: '2025-09-10',
			category: {
				es: 'Infraestructura',
				en: 'Infrastructure'
			},
			excerpt: {
				es: 'CNEURO inaugura un laboratorio de última generación equipado con tecnología de punta para estudios electrofisiológicos.',
				en: 'CNEURO inaugurates a state-of-the-art laboratory equipped with cutting-edge technology for electrophysiological studies.'
			},
			content: {
				es: 'El nuevo laboratorio de electrofisiología cuenta con equipos de última generación para el registro y análisis de la actividad eléctrica cerebral. Las instalaciones permitirán avanzar en la investigación de procesos cognitivos, trastornos del sueño y epilepsia, entre otras áreas.',
				en: 'The new electrophysiology laboratory features state-of-the-art equipment for recording and analyzing brain electrical activity. The facilities will advance research in cognitive processes, sleep disorders, and epilepsy, among other areas.'
			}
		},
		{
			id: 4,
			title: {
				es: 'Estudio pionero sobre neuroplasticidad en adultos mayores',
				en: 'Pioneering study on neuroplasticity in older adults'
			},
			date: '2025-08-22',
			category: {
				es: 'Investigación',
				en: 'Research'
			},
			excerpt: {
				es: 'Resultados preliminares muestran que la estimulación cognitiva intensiva puede revertir parcialmente el deterioro cognitivo leve.',
				en: 'Preliminary results show that intensive cognitive stimulation can partially reverse mild cognitive impairment.'
			},
			content: {
				es: 'Un estudio longitudinal de 3 años con 150 participantes ha demostrado que programas de estimulación cognitiva intensiva y personalizada pueden mejorar significativamente las funciones ejecutivas y la memoria en adultos mayores con deterioro cognitivo leve. Los resultados sugieren que el cerebro conserva una notable capacidad de plasticidad incluso en edades avanzadas.',
				en: 'A 3-year longitudinal study with 150 participants has demonstrated that intensive and personalized cognitive stimulation programs can significantly improve executive functions and memory in older adults with mild cognitive impairment. The results suggest that the brain retains remarkable plasticity even in advanced ages.'
			}
		}
	];
</script>

<svelte:head>
	<title>CNEURO - {currentLang === 'es' ? 'Noticias' : 'News'}</title>
</svelte:head>

<!-- Header -->
<section class="bg-blue-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-bold md:text-5xl">
			{currentLang === 'es' ? 'Noticias' : 'News'}
		</h1>
		<p class="mt-4 max-w-3xl text-lg text-blue-100">
			{currentLang === 'es'
				? 'Últimas novedades sobre nuestros proyectos y avances científicos.'
				: 'Latest news about our projects and scientific advances.'}
		</p>
	</div>
</section>

<!-- News Grid -->
<section class="bg-gray-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-2">
			{#each news as item}
				<article class="rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
					<!-- Category & Date -->
					<div class="border-b border-gray-100 px-6 pt-6">
						<div class="mb-4 flex items-center justify-between">
							<span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-900">
								{currentLang === 'es' ? item.category.es : item.category.en}
							</span>
							<time class="text-sm text-gray-500">
								{new Date(item.date).toLocaleDateString(
									currentLang === 'es' ? 'es-ES' : 'en-US',
									{ year: 'numeric', month: 'long', day: 'numeric' }
								)}
							</time>
						</div>
					</div>

					<!-- Content -->
					<div class="p-6">
						<h2 class="mb-3 text-xl font-bold text-gray-900">
							{currentLang === 'es' ? item.title.es : item.title.en}
						</h2>
						<p class="mb-4 text-gray-600">
							{currentLang === 'es' ? item.excerpt.es : item.excerpt.en}
						</p>
						<p class="mb-4 text-gray-700">
							{currentLang === 'es' ? item.content.es : item.content.en}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
