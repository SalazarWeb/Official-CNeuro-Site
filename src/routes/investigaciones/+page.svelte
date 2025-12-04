<script lang="ts">
	import { language } from '$lib/stores/language';

	let currentLang = $state($language);

	$effect(() => {
		currentLang = $language;
	});

	interface Research {
		id: number;
		title: { es: string; en: string };
		summary: { es: string; en: string };
		image: string;
		team: string[];
		status: { es: string; en: string };
	}

	const researches: Research[] = [
		{
			id: 1,
			title: {
				es: 'Biomarcadores de Alzheimer mediante PET-MRI',
				en: 'Alzheimer Biomarkers through PET-MRI'
			},
			summary: {
				es: 'Identificación de biomarcadores tempranos de enfermedad de Alzheimer utilizando técnicas combinadas de tomografía por emisión de positrones y resonancia magnética funcional. Este estudio longitudinal busca mejorar el diagnóstico precoz y el seguimiento de la progresión de la enfermedad.',
				en: 'Identification of early Alzheimer\'s disease biomarkers using combined positron emission tomography and functional magnetic resonance imaging techniques. This longitudinal study aims to improve early diagnosis and monitoring of disease progression.'
			},
			image:
				'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop&q=80',
			team: ['Dra. María García Hernández', 'Dr. Juan Pérez', 'Dra. Ana Martínez'],
			status: { es: 'En progreso', en: 'In progress' }
		},
		{
			id: 2,
			title: {
				es: 'Rehabilitación Cognitiva Post-Ictus',
				en: 'Post-Stroke Cognitive Rehabilitation'
			},
			summary: {
				es: 'Desarrollo y validación de programas de rehabilitación cognitiva personalizados mediante realidad virtual para pacientes con secuelas de accidente cerebrovascular. Incluye evaluación neuropsicológica y seguimiento a largo plazo de la recuperación funcional.',
				en: 'Development and validation of personalized cognitive rehabilitation programs through virtual reality for patients with stroke sequelae. Includes neuropsychological assessment and long-term monitoring of functional recovery.'
			},
			image:
				'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
			team: ['Dr. Roberto Fernández', 'Dra. Laura Sánchez', 'Ing. Patricia Ruiz'],
			status: { es: 'En progreso', en: 'In progress' }
		},
		{
			id: 3,
			title: {
				es: 'Conectividad Cerebral en Trastornos del Espectro Autista',
				en: 'Brain Connectivity in Autism Spectrum Disorders'
			},
			summary: {
				es: 'Investigación de patrones de conectividad funcional y estructural en niños y adolescentes con TEA mediante técnicas avanzadas de neuroimagen. El objetivo es identificar marcadores neurobiológicos que faciliten el diagnóstico temprano y la intervención personalizada.',
				en: 'Research on functional and structural connectivity patterns in children and adolescents with ASD using advanced neuroimaging techniques. The goal is to identify neurobiological markers that facilitate early diagnosis and personalized intervention.'
			},
			image:
				'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop&q=80',
			team: ['Dra. Carmen Morales', 'Dr. Alberto Ruiz', 'Dra. Isabel Torres'],
			status: { es: 'En progreso', en: 'In progress' }
		},
		{
			id: 4,
			title: {
				es: 'Neurofarmacología de Compuestos Neuroprotectores',
				en: 'Neuropharmacology of Neuroprotective Compounds'
			},
			summary: {
				es: 'Investigación preclínica de nuevos compuestos sintéticos con potencial efecto neuroprotector en modelos experimentales de neurodegeneración. Evaluación de mecanismos de acción, eficacia y seguridad para su futura aplicación terapéutica.',
				en: 'Preclinical research on novel synthetic compounds with potential neuroprotective effects in experimental models of neurodegeneration. Evaluation of mechanisms of action, efficacy, and safety for future therapeutic application.'
			},
			image:
				'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&q=80',
			team: ['Dr. José Luis Ramírez', 'Dra. Beatriz Castro', 'Dr. Fernando Ortiz'],
			status: { es: 'Fase experimental', en: 'Experimental phase' }
		},
		{
			id: 5,
			title: {
				es: 'Neuroplasticidad y Envejecimiento Cognitivo',
				en: 'Neuroplasticity and Cognitive Aging'
			},
			summary: {
				es: 'Estudio longitudinal sobre la capacidad de neuroplasticidad en adultos mayores y su relación con el envejecimiento cognitivo saludable. Investigación de intervenciones que promuevan la reserva cognitiva y la resiliencia cerebral.',
				en: 'Longitudinal study on neuroplasticity capacity in older adults and its relationship with healthy cognitive aging. Research on interventions that promote cognitive reserve and brain resilience.'
			},
			image:
				'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80',
			team: ['Dra. Elena Suárez', 'Dr. Miguel Torres', 'Dra. Sofía Ramírez'],
			status: { es: 'En progreso', en: 'In progress' }
		},
		{
			id: 6,
			title: {
				es: 'Electrofisiología de los Trastornos del Sueño',
				en: 'Electrophysiology of Sleep Disorders'
			},
			summary: {
				es: 'Caracterización electrofisiológica de diferentes trastornos del sueño y su impacto en las funciones cognitivas. Desarrollo de protocolos de evaluación y tratamiento basados en evidencia neurofisiológica.',
				en: 'Electrophysiological characterization of different sleep disorders and their impact on cognitive functions. Development of assessment and treatment protocols based on neurophysiological evidence.'
			},
			image:
				'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop&q=80',
			team: ['Dr. Carlos Méndez', 'Dra. Patricia Vega', 'Dr. Alejandro Ruiz'],
			status: { es: 'En progreso', en: 'In progress' }
		}
	];
</script>

<svelte:head>
	<title>CNEURO - {currentLang === 'es' ? 'Investigaciones' : 'Research'}</title>
</svelte:head>

<!-- Header -->
<section class="bg-blue-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-bold md:text-5xl">
			{currentLang === 'es' ? 'Investigaciones Actuales' : 'Current Research'}
		</h1>
		<p class="mt-4 max-w-3xl text-lg text-blue-100">
			{currentLang === 'es'
				? 'Proyectos de investigación en curso y sus contribuciones al avance científico.'
				: 'Ongoing research projects and their contributions to scientific advancement.'}
		</p>
	</div>
</section>

<!-- Research Grid -->
<section class="bg-gray-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each researches as research}
				<article
					class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
				>
					<!-- Image -->
					<div class="aspect-video overflow-hidden bg-gray-200">
						<img
							src={research.image}
							alt={currentLang === 'es' ? research.title.es : research.title.en}
							class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>

					<!-- Content -->
					<div class="flex flex-1 flex-col p-6">
						<!-- Status Badge -->
						<div class="mb-3">
							<span
								class="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
							>
								{currentLang === 'es' ? research.status.es : research.status.en}
							</span>
						</div>

						<!-- Title -->
						<h2 class="mb-3 text-xl font-bold text-gray-900">
							{currentLang === 'es' ? research.title.es : research.title.en}
						</h2>

						<!-- Summary -->
						<p class="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
							{currentLang === 'es' ? research.summary.es : research.summary.en}
						</p>

						<!-- Team -->
						<div class="border-t border-gray-200 pt-4">
							<h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-700">
								{currentLang === 'es' ? 'Equipo Responsable' : 'Research Team'}
							</h3>
							<ul class="space-y-1">
								{#each research.team as member}
									<li class="text-sm text-gray-600">{member}</li>
								{/each}
							</ul>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
