<script lang="ts">
	import { language } from '$lib/stores/language';

	let currentLang = $state($language);

	$effect(() => {
		currentLang = $language;
	});

	interface Review {
		id: number;
		author: string;
		rating: number;
		comment: string;
		date: string;
	}

	interface Research {
		id: number;
		title: { es: string; en: string };
		description: { es: string; en: string };
		leader: string;
		team: string[];
		status: { es: string; en: string };
		startDate: string;
		funding: string;
		reviews: Review[];
	}

	const researches: Research[] = [
		{
			id: 1,
			title: {
				es: 'Biomarcadores de Alzheimer mediante PET-MRI',
				en: 'Alzheimer Biomarkers through PET-MRI'
			},
			description: {
				es: 'Identificación de biomarcadores tempranos de enfermedad de Alzheimer utilizando técnicas combinadas de tomografía por emisión de positrones y resonancia magnética.',
				en: 'Identification of early Alzheimer\'s disease biomarkers using combined positron emission tomography and magnetic resonance imaging techniques.'
			},
			leader: 'Dra. María García Hernández',
			team: ['Dr. Juan Pérez', 'Dra. Ana Martínez', 'Dr. Carlos López'],
			status: { es: 'En progreso', en: 'In progress' },
			startDate: '2023-01',
			funding: 'NIH Grant R01NS123456',
			reviews: [
				{
					id: 1,
					author: 'Dr. Robert Smith',
					rating: 5,
					comment:
						'Groundbreaking research with excellent methodology. The team has made significant contributions to the field.',
					date: '2024-11-10'
				},
				{
					id: 2,
					author: 'Prof. Elena Rodríguez',
					rating: 5,
					comment:
						'Innovador enfoque que combina técnicas de vanguardia. Los resultados preliminares son muy prometedores.',
					date: '2024-10-22'
				}
			]
		},
		{
			id: 2,
			title: {
				es: 'Rehabilitación cognitiva post-ictus mediante realidad virtual',
				en: 'Post-stroke cognitive rehabilitation through virtual reality'
			},
			description: {
				es: 'Desarrollo y validación de un programa de rehabilitación cognitiva basado en realidad virtual para pacientes con secuelas de accidente cerebrovascular.',
				en: 'Development and validation of a virtual reality-based cognitive rehabilitation program for patients with stroke sequelae.'
			},
			leader: 'Dr. Roberto Fernández',
			team: ['Dra. Laura Sánchez', 'Dr. Miguel Díaz', 'Ing. Patricia Ruiz'],
			status: { es: 'En progreso', en: 'In progress' },
			startDate: '2024-03',
			funding: 'European Commission H2020',
			reviews: [
				{
					id: 3,
					author: 'Dr. James Wilson',
					rating: 4,
					comment:
						'Promising approach to cognitive rehabilitation. The VR platform is well-designed and user-friendly.',
					date: '2024-09-15'
				}
			]
		},
		{
			id: 3,
			title: {
				es: 'Conectividad cerebral en trastornos del espectro autista',
				en: 'Brain connectivity in autism spectrum disorders'
			},
			description: {
				es: 'Estudio de patrones de conectividad funcional y estructural en niños y adolescentes con trastornos del espectro autista mediante técnicas avanzadas de neuroimagen.',
				en: 'Study of functional and structural connectivity patterns in children and adolescents with autism spectrum disorders using advanced neuroimaging techniques.'
			},
			leader: 'Dra. Carmen Morales',
			team: ['Dr. Alberto Ruiz', 'Dra. Isabel Torres', 'Dra. Sofía Ramírez'],
			status: { es: 'En progreso', en: 'In progress' },
			startDate: '2023-09',
			funding: 'Autism Speaks Grant',
			reviews: [
				{
					id: 4,
					author: 'Prof. Michael Chen',
					rating: 5,
					comment:
						'Exceptional work with important implications for understanding autism. The longitudinal design is a major strength.',
					date: '2024-08-30'
				},
				{
					id: 5,
					author: 'Dra. Francesca Rossi',
					rating: 4,
					comment:
						'Ricerca di alta qualità con metodologia rigorosa. I risultati potrebbero avere impatto significativo sulla diagnosi precoce.',
					date: '2024-07-18'
				}
			]
		},
		{
			id: 4,
			title: {
				es: 'Neurofarmacología de nuevos compuestos neuroprotectores',
				en: 'Neuropharmacology of novel neuroprotective compounds'
			},
			description: {
				es: 'Investigación preclínica de nuevos compuestos sintéticos con potencial efecto neuroprotector en modelos de neurodegeneración.',
				en: 'Preclinical research on novel synthetic compounds with potential neuroprotective effects in neurodegeneration models.'
			},
			leader: 'Dr. José Luis Ramírez',
			team: ['Dra. Beatriz Castro', 'Dr. Fernando Ortiz', 'Dra. Claudia Vega'],
			status: { es: 'Fase experimental', en: 'Experimental phase' },
			startDate: '2024-01',
			funding: 'CITMA Cuba',
			reviews: []
		}
	];

	// Review form state
	let selectedResearch = $state<number | null>(null);
	let reviewForm = $state({
		author: '',
		rating: 5,
		comment: ''
	});

	function submitReview(researchId: number) {
		if (!reviewForm.author || !reviewForm.comment) {
			alert(
				currentLang === 'es'
					? 'Por favor complete todos los campos'
					: 'Please complete all fields'
			);
			return;
		}

		// In a real app, this would make an API call
		alert(
			currentLang === 'es'
				? 'Gracias por su reseña. Será revisada antes de publicarse.'
				: 'Thank you for your review. It will be reviewed before publication.'
		);

		// Reset form
		reviewForm = { author: '', rating: 5, comment: '' };
		selectedResearch = null;
	}
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

<!-- Research Projects -->
<section class="bg-gray-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-8">
			{#each researches as research}
				<article class="rounded-lg bg-white shadow-sm">
					<!-- Header -->
					<div class="border-b border-gray-200 p-6">
						<div class="mb-4 flex items-start justify-between">
							<h2 class="text-2xl font-bold text-gray-900">
								{currentLang === 'es' ? research.title.es : research.title.en}
							</h2>
							<span
								class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
							>
								{currentLang === 'es' ? research.status.es : research.status.en}
							</span>
						</div>
						
						<p class="mb-4 text-gray-700">
							{currentLang === 'es' ? research.description.es : research.description.en}
						</p>

						<!-- Details -->
						<div class="grid gap-4 text-sm md:grid-cols-2">
							<div>
								<span class="font-medium text-gray-900">
									{currentLang === 'es' ? 'Investigador Principal:' : 'Principal Investigator:'}
								</span>
								<span class="text-gray-600"> {research.leader}</span>
							</div>
							<div>
								<span class="font-medium text-gray-900">
									{currentLang === 'es' ? 'Financiamiento:' : 'Funding:'}
								</span>
								<span class="text-gray-600"> {research.funding}</span>
							</div>
							<div class="md:col-span-2">
								<span class="font-medium text-gray-900">
									{currentLang === 'es' ? 'Equipo:' : 'Team:'}
								</span>
								<span class="text-gray-600"> {research.team.join(', ')}</span>
							</div>
						</div>
					</div>

					<!-- Reviews Section -->
					<div class="p-6">
						<h3 class="mb-4 text-lg font-semibold text-gray-900">
							{currentLang === 'es' ? 'Reseñas de colaboradores' : 'Collaborator Reviews'}
							({research.reviews.length})
						</h3>

						{#if research.reviews.length > 0}
							<div class="mb-6 space-y-4">
								{#each research.reviews as review}
									<div class="rounded-lg border border-gray-200 p-4">
										<div class="mb-2 flex items-center justify-between">
											<span class="font-medium text-gray-900">{review.author}</span>
											<div class="flex items-center gap-1">
												{#each Array(5) as _, i}
													<svg
														class="h-4 w-4 {i < review.rating
															? 'text-yellow-400'
															: 'text-gray-300'}"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
														></path>
													</svg>
												{/each}
											</div>
										</div>
										<p class="text-sm text-gray-700">{review.comment}</p>
										<p class="mt-2 text-xs text-gray-500">
											{new Date(review.date).toLocaleDateString(
												currentLang === 'es' ? 'es-ES' : 'en-US',
												{ year: 'numeric', month: 'long', day: 'numeric' }
											)}
										</p>
									</div>
								{/each}
							</div>
						{/if}

						<!-- Add Review Button/Form -->
						{#if selectedResearch === research.id}
							<div class="rounded-lg border border-gray-300 bg-gray-50 p-4">
								<h4 class="mb-4 font-medium text-gray-900">
									{currentLang === 'es' ? 'Agregar reseña' : 'Add review'}
								</h4>
								<form
									onsubmit={(e) => {
										e.preventDefault();
										submitReview(research.id);
									}}
									class="space-y-4"
								>
									<div>
										<label for="author-input" class="mb-1 block text-sm font-medium text-gray-700">
											{currentLang === 'es' ? 'Nombre' : 'Name'}
										</label>
										<input
											id="author-input"
											type="text"
											bind:value={reviewForm.author}
											class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
											required
										/>
									</div>
									<div>
										<label for="rating-select" class="mb-1 block text-sm font-medium text-gray-700">
											{currentLang === 'es' ? 'Calificación' : 'Rating'}
										</label>
										<select
											id="rating-select"
											bind:value={reviewForm.rating}
											class="rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
										>
											{#each [5, 4, 3, 2, 1] as rating}
												<option value={rating}>{rating} ★</option>
											{/each}
										</select>
									</div>
									<div>
										<label for="comment-textarea" class="mb-1 block text-sm font-medium text-gray-700">
											{currentLang === 'es' ? 'Comentario' : 'Comment'}
										</label>
										<textarea
											id="comment-textarea"
											bind:value={reviewForm.comment}
											rows="4"
											class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
											required
										></textarea>
									</div>
									<div class="flex gap-2">
										<button
											type="submit"
											class="rounded-lg bg-blue-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800"
										>
											{currentLang === 'es' ? 'Enviar' : 'Submit'}
										</button>
										<button
											type="button"
											onclick={() => (selectedResearch = null)}
											class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
										>
											{currentLang === 'es' ? 'Cancelar' : 'Cancel'}
										</button>
									</div>
								</form>
							</div>
						{:else}
							<button
								onclick={() => (selectedResearch = research.id)}
								class="rounded-lg border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-blue-900 transition-colors hover:bg-blue-50"
							>
								{currentLang === 'es' ? 'Dejar una reseña' : 'Leave a review'}
							</button>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
