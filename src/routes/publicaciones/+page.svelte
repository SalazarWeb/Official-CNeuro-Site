<script lang="ts">
	import { language } from '$lib/stores/language';

	let currentLang = $state($language);

	$effect(() => {
		currentLang = $language;
	});

	const publications = [
		{
			title:
				'Neural mechanisms of cognitive aging: A longitudinal study',
			authors: 'García M, Rodríguez L, Fernández J, López A',
			journal: 'Nature Neuroscience',
			year: 2024,
			doi: '10.1038/nn.2024.12345',
			abstract: {
				es: 'Estudio longitudinal de los mecanismos neurales del envejecimiento cognitivo en una cohorte de 200 participantes durante 10 años.',
				en: 'Longitudinal study of neural mechanisms of cognitive aging in a cohort of 200 participants over 10 years.'
			}
		},
		{
			title:
				'Machine learning approaches for early detection of neurodegenerative diseases',
			authors: 'Martínez P, Díaz C, Pérez R',
			journal: 'Brain: A Journal of Neurology',
			year: 2024,
			doi: '10.1093/brain/awz234',
			abstract: {
				es: 'Desarrollo de algoritmos de aprendizaje automático para la detección temprana de enfermedades neurodegenerativas mediante análisis de neuroimágenes.',
				en: 'Development of machine learning algorithms for early detection of neurodegenerative diseases through neuroimaging analysis.'
			}
		},
		{
			title:
				'Neuroplasticity in post-stroke rehabilitation: Clinical implications',
			authors: 'González S, Hernández M, Jiménez F',
			journal: 'The Lancet Neurology',
			year: 2023,
			doi: '10.1016/S1474-4422(23)00123-4',
			abstract: {
				es: 'Revisión sistemática de la neuroplasticidad en la rehabilitación post-ictus y sus implicaciones clínicas.',
				en: 'Systematic review of neuroplasticity in post-stroke rehabilitation and its clinical implications.'
			}
		},
		{
			title:
				'Functional connectivity patterns in mild cognitive impairment',
			authors: 'Torres A, Ramírez E, Castro D',
			journal: 'Journal of Neuroscience',
			year: 2023,
			doi: '10.1523/JNEUROSCI.2023.1234',
			abstract: {
				es: 'Análisis de patrones de conectividad funcional en pacientes con deterioro cognitivo leve mediante resonancia magnética funcional.',
				en: 'Analysis of functional connectivity patterns in patients with mild cognitive impairment using functional MRI.'
			}
		},
		{
			title:
				'Biomarkers for Alzheimer disease: A comprehensive review',
			authors: 'Suárez L, Morales N, Vega K',
			journal: 'JAMA Neurology',
			year: 2022,
			doi: '10.1001/jamaneurol.2022.3456',
			abstract: {
				es: 'Revisión exhaustiva de biomarcadores para la enfermedad de Alzheimer, incluyendo biomarcadores de neuroimagen, líquido cefalorraquídeo y sangre.',
				en: 'Comprehensive review of biomarkers for Alzheimer disease, including neuroimaging, cerebrospinal fluid, and blood biomarkers.'
			}
		},
		{
			title:
				'Neuroinflammation and cognitive decline in aging',
			authors: 'Delgado R, Ortiz V, Campos I',
			journal: 'Neurobiology of Aging',
			year: 2022,
			doi: '10.1016/j.neurobiolaging.2022.789',
			abstract: {
				es: 'Investigación sobre el papel de la neuroinflamación en el declive cognitivo asociado al envejecimiento.',
				en: 'Investigation of the role of neuroinflammation in cognitive decline associated with aging.'
			}
		}
	];

	let searchQuery = $state('');
	let selectedYear = $state<number | null>(null);

	const years = Array.from(new Set(publications.map((p) => p.year))).sort(
		(a, b) => b - a
	);

	const filteredPublications = $derived(
		publications.filter((pub) => {
			const matchesSearch =
				searchQuery === '' ||
				pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				pub.authors.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesYear = selectedYear === null || pub.year === selectedYear;
			return matchesSearch && matchesYear;
		})
	);
</script>

<svelte:head>
	<title>CNEURO - {currentLang === 'es' ? 'Publicaciones' : 'Publications'}</title>
</svelte:head>

<!-- Header -->
<section class="bg-blue-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-bold md:text-5xl">
			{currentLang === 'es' ? 'Publicaciones Científicas' : 'Scientific Publications'}
		</h1>
		<p class="mt-4 max-w-3xl text-lg text-blue-100">
			{currentLang === 'es'
				? 'Nuestra producción científica en revistas de alto impacto internacional.'
				: 'Our scientific production in high-impact international journals.'}
		</p>
	</div>
</section>

<!-- Filters -->
<section class="border-b border-gray-200 bg-white py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-4 md:flex-row md:items-center">
			<!-- Search -->
			<div class="flex-1">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder={currentLang === 'es'
						? 'Buscar por título o autor...'
						: 'Search by title or author...'}
					class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
				/>
			</div>
			
			<!-- Year filter -->
			<select
				bind:value={selectedYear}
				class="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
			>
				<option value={null}>
					{currentLang === 'es' ? 'Todos los años' : 'All years'}
				</option>
				{#each years as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</div>
	</div>
</section>

<!-- Publications List -->
<section class="bg-gray-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if filteredPublications.length === 0}
			<div class="text-center py-12">
				<p class="text-gray-500 text-lg">
					{currentLang === 'es'
						? 'No se encontraron publicaciones.'
						: 'No publications found.'}
				</p>
			</div>
		{:else}
			<div class="space-y-6">
				{#each filteredPublications as pub}
					<article class="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
						<div class="mb-2 flex items-start justify-between gap-4">
							<h2 class="text-xl font-semibold text-gray-900">
								{pub.title}
							</h2>
							<span
								class="flex-shrink-0 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900"
							>
								{pub.year}
							</span>
						</div>
						
						<p class="mb-3 text-sm text-gray-600">
							{pub.authors}
						</p>
						
						<p class="mb-3 text-sm font-medium text-blue-900">
							{pub.journal}
						</p>
						
						<p class="mb-4 text-gray-700">
							{currentLang === 'es' ? pub.abstract.es : pub.abstract.en}
						</p>
						
						<div class="flex items-center gap-4">
							<a
								href="https://doi.org/{pub.doi}"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-sm font-medium text-blue-900 hover:underline"
							>
								DOI: {pub.doi}
								<svg
									class="h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									></path>
								</svg>
							</a>
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>
