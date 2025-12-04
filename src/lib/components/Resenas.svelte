<script lang="ts">
	import { language } from '$lib/stores/language';

	let currentLang = $state($language);

	$effect(() => {
		currentLang = $language;
	});

	interface Review {
		id: number;
		name: string;
		comment: string;
		date: string;
	}

	// Estado local para las reseñas
	let reviews = $state<Review[]>([
		{
			id: 1,
			name: 'Dr. Michael Anderson',
			comment:
				'Impressive research facilities and highly qualified team. The collaborative environment fosters excellent scientific work.',
			date: '2025-11-28'
		},
		{
			id: 2,
			name: 'Dra. Carmen Silva',
			comment:
				'Excelente centro de investigación con proyectos de gran impacto científico. El equipo demuestra un alto nivel de profesionalismo y dedicación.',
			date: '2025-11-20'
		},
		{
			id: 3,
			name: 'Prof. John Peterson',
			comment:
				'Outstanding contributions to neuroscience research. The interdisciplinary approach and advanced methodologies are commendable.',
			date: '2025-11-15'
		},
		{
			id: 4,
			name: 'Dra. María González',
			comment:
				'Las instalaciones son de primer nivel y el personal altamente capacitado. Es un orgullo colaborar con este centro de excelencia.',
			date: '2025-11-10'
		}
	]);

	// Estado del formulario
	let formData = $state({
		name: '',
		comment: ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();

		if (!formData.name.trim() || !formData.comment.trim()) {
			alert(
				currentLang === 'es'
					? 'Por favor complete todos los campos'
					: 'Please complete all fields'
			);
			return;
		}

		// Crear nueva reseña
		const newReview: Review = {
			id: reviews.length + 1,
			name: formData.name.trim(),
			comment: formData.comment.trim(),
			date: new Date().toISOString().split('T')[0]
		};

		// Agregar al inicio de la lista
		reviews = [newReview, ...reviews];

		// Limpiar formulario
		formData = { name: '', comment: '' };

		// Mensaje de confirmación
		alert(
			currentLang === 'es'
				? 'Gracias por su reseña. Ha sido publicada exitosamente.'
				: 'Thank you for your review. It has been successfully published.'
		);
	}
</script>

<div class="space-y-8">
	<!-- Title -->
	<div class="text-center">
		<h2 class="text-3xl font-bold text-gray-900">
			{currentLang === 'es' ? 'Reseñas de Visitantes' : 'Visitor Reviews'}
		</h2>
		<p class="mt-2 text-gray-600">
			{currentLang === 'es'
				? 'Opiniones de colaboradores y visitantes sobre nuestro centro'
				: 'Opinions from collaborators and visitors about our center'}
		</p>
	</div>

	<!-- Reviews List -->
	<div class="space-y-4">
		{#if reviews.length === 0}
			<div class="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
				<p class="text-gray-500">
					{currentLang === 'es'
						? 'Aún no hay reseñas. ¡Sé el primero en dejar tu opinión!'
						: 'No reviews yet. Be the first to leave your opinion!'}
				</p>
			</div>
		{:else}
			{#each reviews as review (review.id)}
				<article class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
					<div class="mb-3 flex items-start justify-between">
						<div>
							<h3 class="font-semibold text-gray-900">{review.name}</h3>
							<time class="text-sm text-gray-500">
								{new Date(review.date).toLocaleDateString(
									currentLang === 'es' ? 'es-ES' : 'en-US',
									{ year: 'numeric', month: 'long', day: 'numeric' }
								)}
							</time>
						</div>
						<div class="flex items-center gap-1">
							<svg class="h-5 w-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								></path>
							</svg>
						</div>
					</div>
					<p class="leading-relaxed text-gray-700">{review.comment}</p>
				</article>
			{/each}
		{/if}
	</div>

	<!-- Review Form -->
	<div class="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
		<h3 class="mb-6 text-xl font-bold text-gray-900">
			{currentLang === 'es' ? 'Deja tu Reseña' : 'Leave Your Review'}
		</h3>

		<form onsubmit={handleSubmit} class="space-y-6">
			<!-- Name Field -->
			<div>
				<label for="name" class="mb-2 block text-sm font-medium text-gray-700">
					{currentLang === 'es' ? 'Nombre completo' : 'Full name'}
					<span class="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					placeholder={currentLang === 'es'
						? 'Ej: Dr. Juan Pérez'
						: 'E.g.: Dr. John Smith'}
					class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
					required
				/>
			</div>

			<!-- Comment Field -->
			<div>
				<label for="comment" class="mb-2 block text-sm font-medium text-gray-700">
					{currentLang === 'es' ? 'Comentario' : 'Comment'}
					<span class="text-red-500">*</span>
				</label>
				<textarea
					id="comment"
					bind:value={formData.comment}
					rows="5"
					placeholder={currentLang === 'es'
						? 'Comparta su experiencia y opinión sobre nuestro centro...'
						: 'Share your experience and opinion about our center...'}
					class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
					required
				></textarea>
				<p class="mt-1 text-xs text-gray-500">
					{currentLang === 'es'
						? 'Su reseña será visible públicamente'
						: 'Your review will be publicly visible'}
				</p>
			</div>

			<!-- Submit Button -->
			<div class="flex items-center gap-4">
				<button
					type="submit"
					class="rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					{currentLang === 'es' ? 'Enviar Reseña' : 'Submit Review'}
				</button>
				<span class="text-sm text-gray-500">
					{currentLang === 'es'
						? '* Campos obligatorios'
						: '* Required fields'}
				</span>
			</div>
		</form>
	</div>
</div>
