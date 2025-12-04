<script lang="ts">
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n';

	let currentLang = $state($language);
	let t = $derived(getTranslation(currentLang));

	$effect(() => {
		currentLang = $language;
	});

	interface Publication {
		id: number;
		title: string;
		authors: string;
		journal: string;
		year: number;
		doi: string;
		pdf?: string;
	}

	const publications: Publication[] = [
		{
			id: 1,
			title: 'Neural mechanisms of cognitive aging: A longitudinal study',
			authors: 'García M, Rodríguez L, Fernández J, López A',
			journal: 'Nature Neuroscience',
			year: 2024,
			doi: '10.1038/nn.2024.12345',
			pdf: '/papers/garcia-2024.pdf'
		},
		{
			id: 2,
			title:
				'Machine learning approaches for early detection of neurodegenerative diseases',
			authors: 'Martínez P, Díaz C, Pérez R',
			journal: 'Brain: A Journal of Neurology',
			year: 2024,
			doi: '10.1093/brain/awz234'
		},
		{
			id: 3,
			title: 'Neuroplasticity in post-stroke rehabilitation: Clinical implications',
			authors: 'González S, Hernández M, Jiménez F',
			journal: 'The Lancet Neurology',
			year: 2023,
			doi: '10.1016/S1474-4422(23)00123-4',
			pdf: '/papers/gonzalez-2023.pdf'
		},
		{
			id: 4,
			title: 'Functional connectivity patterns in mild cognitive impairment',
			authors: 'Torres A, Ramírez E, Castro D',
			journal: 'Journal of Neuroscience',
			year: 2023,
			doi: '10.1523/JNEUROSCI.2023.1234'
		},
		{
			id: 5,
			title: 'Biomarkers for Alzheimer disease: A comprehensive review',
			authors: 'Suárez L, Morales N, Vega K',
			journal: 'JAMA Neurology',
			year: 2022,
			doi: '10.1001/jamaneurol.2022.3456',
			pdf: '/papers/suarez-2022.pdf'
		},
		{
			id: 6,
			title: 'Neuroinflammation and cognitive decline in aging',
			authors: 'Delgado R, Ortiz V, Campos I',
			journal: 'Neurobiology of Aging',
			year: 2022,
			doi: '10.1016/j.neurobiolaging.2022.789'
		},
		{
			id: 7,
			title: 'Deep learning for automated EEG analysis in epilepsy',
			authors: 'Méndez C, Ruiz A, Silva P',
			journal: 'Clinical Neurophysiology',
			year: 2024,
			doi: '10.1016/j.clinph.2024.567'
		},
		{
			id: 8,
			title: 'Virtual reality-based cognitive rehabilitation protocols',
			authors: 'Fernández R, Sánchez L, Díaz M',
			journal: 'Neurorehabilitation and Neural Repair',
			year: 2023,
			doi: '10.1177/15459683231234567',
			pdf: '/papers/fernandez-2023.pdf'
		},
		{
			id: 9,
			title: 'Brain connectivity in autism spectrum disorders: A meta-analysis',
			authors: 'Morales C, Ruiz A, Torres I, Ramírez S',
			journal: 'Molecular Autism',
			year: 2023,
			doi: '10.1186/s13229-023-00567-8'
		},
		{
			id: 10,
			title: 'Neuroprotective compounds in Parkinson disease models',
			authors: 'Ramírez JL, Castro B, Ortiz F, Vega C',
			journal: 'Movement Disorders',
			year: 2022,
			doi: '10.1002/mds.29123'
		}
	];

	let searchQuery = $state('');
	let selectedYear = $state<number | null>(null);

	const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);

	const filteredPublications = $derived(
		publications.filter((pub) => {
			const matchesSearch =
				searchQuery === '' ||
				pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
				pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesYear = selectedYear === null || pub.year === selectedYear;
			return matchesSearch && matchesYear;
		})
	);
</script>

<svelte:head>
	<title>CNEURO - {t.publications.title}</title>
</svelte:head>

<!-- Header -->
<section class="bg-blue-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-bold md:text-5xl">
			{t.publications.title}
		</h1>
		<p class="mt-4 max-w-3xl text-lg text-blue-100">
			{t.publications.subtitle}
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
					placeholder={t.publications.search}
					class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
				/>
			</div>

			<!-- Year filter -->
			<select
				bind:value={selectedYear}
				class="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
			>
				<option value={null}>
					{t.publications.allYears}
				</option>
				{#each years as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</div>
	</div>
</section>

<!-- Publications Table -->
<section class="bg-gray-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if filteredPublications.length === 0}
			<div class="rounded-lg bg-white p-12 text-center shadow-sm">
				<p class="text-lg text-gray-500">
					{t.publications.noResults}
				</p>
			</div>
		{:else}
			<div class="overflow-hidden rounded-lg bg-white shadow-sm">
				<!-- Desktop: Table View -->
				<div class="hidden lg:block">
					<table class="w-full">
						<thead class="bg-gray-50">
							<tr class="border-b border-gray-200">
								<th
									class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-700"
								>
									{t.publications.year}
								</th>
								<th
									class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-700"
								>
									Título
								</th>
								<th
									class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-700"
								>
									{t.publications.authors}
								</th>
								<th
									class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-700"
								>
									{t.publications.journal}
								</th>
								<th
									class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-700"
								>
									Enlaces
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							{#each filteredPublications as pub}
								<tr class="transition-colors hover:bg-gray-50">
									<td class="px-6 py-4">
										<span
											class="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900"
										>
											{pub.year}
										</span>
									</td>
									<td class="px-6 py-4">
										<p class="font-medium text-gray-900">{pub.title}</p>
									</td>
									<td class="px-6 py-4">
										<p class="text-sm text-gray-600">{pub.authors}</p>
									</td>
									<td class="px-6 py-4">
										<p class="text-sm italic text-gray-700">{pub.journal}</p>
									</td>
									<td class="px-6 py-4">
										<div class="flex gap-3">
											<a
												href="https://doi.org/{pub.doi}"
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-1 text-sm font-medium text-blue-900 hover:underline"
											>
												DOI
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
											{#if pub.pdf}
												<a
													href={pub.pdf}
													target="_blank"
													rel="noopener noreferrer"
													class="inline-flex items-center gap-1 text-sm font-medium text-blue-900 hover:underline"
												>
													PDF
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
															d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
														></path>
													</svg>
												</a>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<!-- Mobile: Card View -->
				<div class="divide-y divide-gray-200 lg:hidden">
					{#each filteredPublications as pub}
						<article class="p-6">
							<div class="mb-3 flex items-center justify-between">
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900"
								>
									{pub.year}
								</span>
							</div>
							<h3 class="mb-2 font-semibold text-gray-900">{pub.title}</h3>
							<p class="mb-2 text-sm text-gray-600">{pub.authors}</p>
							<p class="mb-3 text-sm italic text-gray-700">{pub.journal}</p>
							<div class="flex gap-3">
								<a
									href="https://doi.org/{pub.doi}"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 text-sm font-medium text-blue-900 hover:underline"
								>
									DOI
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
								{#if pub.pdf}
									<a
										href={pub.pdf}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 text-sm font-medium text-blue-900 hover:underline"
									>
										PDF
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
												d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											></path>
										</svg>
									</a>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
