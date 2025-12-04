<script lang="ts">
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n';

	let currentLang = $state($language);

	$effect(() => {
		currentLang = $language;
	});

	const timeline = [
		{
			year: 1990,
			es: 'Fundación del Centro de Neurociencias de Cuba como institución de investigación científica.',
			en: 'Foundation of the Cuban Neuroscience Center as a scientific research institution.'
		},
		{
			year: 1995,
			es: 'Primeras publicaciones internacionales en revistas de alto impacto.',
			en: 'First international publications in high-impact journals.'
		},
		{
			year: 2000,
			es: 'Establecimiento del programa de doctorado en neurociencias.',
			en: 'Establishment of the doctoral program in neurosciences.'
		},
		{
			year: 2008,
			es: 'Inauguración del laboratorio de neuroimagen con equipos de resonancia magnética.',
			en: 'Inauguration of the neuroimaging laboratory with MRI equipment.'
		},
		{
			year: 2015,
			es: 'Reconocimiento internacional por contribuciones en el estudio de enfermedades neurodegenerativas.',
			en: 'International recognition for contributions in the study of neurodegenerative diseases.'
		},
		{
			year: 2020,
			es: 'Expansión de colaboraciones internacionales con más de 30 instituciones.',
			en: 'Expansion of international collaborations with over 30 institutions.'
		},
		{
			year: 2025,
			es: 'Desarrollo de nuevas líneas de investigación en inteligencia artificial aplicada a neurociencias.',
			en: 'Development of new research lines in artificial intelligence applied to neurosciences.'
		}
	];
</script>

<svelte:head>
	<title>CNEURO - {currentLang === 'es' ? 'Historia' : 'History'}</title>
</svelte:head>

<!-- Header -->
<section class="bg-blue-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-bold md:text-5xl">
			{currentLang === 'es' ? 'Nuestra Historia' : 'Our History'}
		</h1>
		<p class="mt-4 max-w-3xl text-lg text-blue-100">
			{currentLang === 'es'
				? 'Más de tres décadas dedicadas a la investigación científica de excelencia.'
				: 'Over three decades dedicated to scientific research excellence in neurosciences.'}
		</p>
	</div>
</section>

<!-- About Introduction -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="rounded-lg bg-white p-8 shadow-sm md:p-12">
			{#if currentLang === 'es'}
				<p class="mb-6 text-lg leading-relaxed text-gray-700">
					Cómo surgen la inteligencia y el comportamiento a partir de interacciones complejas e
					intrincadas dentro del cerebro sigue siendo un misterio profundo y sin resolver,
					fundamental para una apasionante área de investigación interdisciplinaria. La última
					década ha presenciado un rápido progreso en herramientas experimentales que ahora permiten
					monitorizar y manipular los circuitos cerebrales con un detalle sin precedentes. Esta
					evolución presenta desafíos y oportunidades tanto para los experimentalistas como para los
					teóricos, ya que la compleja algoritmia de la función cerebral y las intrincadas
					interacciones entre neuronas no pueden abordarse únicamente mediante experimentos. La
					teoría matemática es fundamental para el surgimiento de perspectivas y marcos teóricos que
					pueden ayudar a guiar el trabajo experimental e identificar los principios unificadores de
					la función cerebral.
				</p>
				<p class="text-lg leading-relaxed text-gray-700">
					Con el objetivo de poner el conocimiento de vanguardia al alcance de estudiantes e
					investigadores interesados ​​de todo el mundo, los organizadores decidieron crear CNeuro
					en 2018. Cada año, elaboran un programa de verano del más alto nivel, invitando a un
					selecto grupo de brillantes científicos líderes en su campo. El profesorado seleccionado
					comparte su experiencia y los últimos avances de investigación con los participantes.
				</p>
			{:else}
				<p class="mb-6 text-lg leading-relaxed text-gray-700">
					How intelligence and behavior arise from complex and intricate interactions within the
					brain remains a profound and unresolved mystery, fundamental to an exciting area of
					interdisciplinary research. The last decade has witnessed rapid progress in experimental
					tools that now allow monitoring and manipulating brain circuits with unprecedented detail.
					This evolution presents challenges and opportunities for both experimentalists and
					theorists, as the complex algorithms of brain function and intricate interactions between
					neurons cannot be addressed solely through experiments. Mathematical theory is fundamental
					to the emergence of insights and theoretical frameworks that can help guide experimental
					work and identify the unifying principles of brain function.
				</p>
				<p class="text-lg leading-relaxed text-gray-700">
					With the goal of making cutting-edge knowledge accessible to interested students and
					researchers from around the world, the organizers decided to create CNeuro in 2018. Each
					year, they develop a summer program of the highest level, inviting a select group of
					brilliant scientists who are leaders in their field. The selected faculty share their
					expertise and the latest research advances with participants.
				</p>
			{/if}
		</div>
	</div>
</section>

<!-- Mission & Vision -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 md:grid-cols-2">
			<div>
				<div class="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50 p-3">
					<svg
						class="h-6 w-6 text-blue-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900">
					{currentLang === 'es' ? 'Misión' : 'Mission'}
				</h2>
				<p class="text-gray-600">
					{currentLang === 'es'
						? 'Realizar investigaciones científicas de excelencia, contribuyendo al conocimiento fundamental del sistema nervioso y al desarrollo de soluciones innovadoras para problemas de salud relacionados con el cerebro y el sistema nervioso.'
						: 'To conduct scientific research of excellence in the field of neurosciences, contributing to fundamental knowledge of the nervous system and developing innovative solutions for brain and nervous system health problems.'}
				</p>
			</div>
			<div>
				<div class="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50 p-3">
					<svg
						class="h-6 w-6 text-blue-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						></path>
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900">
					{currentLang === 'es' ? 'Visión' : 'Vision'}
				</h2>
				<p class="text-gray-600">
					{currentLang === 'es'
						? 'Ser reconocidos como un centro de referencia internacional en investigación neurocientífica, liderando el avance del conocimiento y formando investigadores de excelencia que contribuyan al bienestar de la sociedad.'
						: 'To be recognized as an international reference center in neuroscientific research, leading the advancement of knowledge and training excellent researchers who contribute to the well-being of society.'}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Timeline -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-12 text-center text-3xl font-bold text-gray-900">
			{currentLang === 'es' ? 'Cronología' : 'Timeline'}
		</h2>
		<div class="space-y-8">
			{#each timeline as event}
				<div class="relative flex gap-6 pb-8">
					<!-- Timeline line -->
					<div class="absolute left-[31px] top-12 h-full w-0.5 bg-blue-200"></div>
					
					<!-- Year badge -->
					<div
						class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white shadow-lg"
					>
						<span class="text-sm font-bold">{event.year}</span>
					</div>
					
					<!-- Content -->
					<div class="flex-1 rounded-lg bg-white p-6 shadow-sm">
						<p class="text-gray-700">
							{currentLang === 'es' ? event.es : event.en}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
