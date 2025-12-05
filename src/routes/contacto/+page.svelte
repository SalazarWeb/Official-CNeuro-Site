<script lang="ts">
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n';

	let currentLang = $state($language);
	let t = $derived(getTranslation(currentLang));

	$effect(() => {
		currentLang = $language;
	});

	let contactForm = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	function submitForm(e: Event) {
		e.preventDefault();

		// In a real app, this would make an API call
		alert(t.contact.form.success);

		// Reset form
		contactForm = { name: '', email: '', subject: '', message: '' };
	}
</script>
<!-- Header -->
<section class="bg-blue-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-bold md:text-5xl">
			{t.contact.title}
		</h1>
		<p class="mt-4 max-w-3xl text-lg text-blue-100">
			{t.contact.subtitle}
		</p>
	</div>
</section>

<section class="bg-gray-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Contact Form -->
			<div class="rounded-lg bg-white p-8 shadow-sm">
				<h2 class="mb-6 text-2xl font-bold text-gray-900">
					{t.contact.form.title}
				</h2>

				<form onsubmit={submitForm} class="space-y-6">
					<div>
						<label for="name" class="mb-2 block text-sm font-medium text-gray-700">
							{t.contact.form.name}
						</label>
						<input
							type="text"
							id="name"
							bind:value={contactForm.name}
							class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
							required
						/>
					</div>

					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-gray-700">
							{t.contact.form.email}
						</label>
						<input
							type="email"
							id="email"
							bind:value={contactForm.email}
							class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
							required
						/>
					</div>

					<div>
						<label for="subject" class="mb-2 block text-sm font-medium text-gray-700">
							{t.contact.form.subject}
						</label>
						<input
							type="text"
							id="subject"
							bind:value={contactForm.subject}
							class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
							required
						/>
					</div>

					<div>
						<label for="message" class="mb-2 block text-sm font-medium text-gray-700">
							{t.contact.form.message}
						</label>
						<textarea
							id="message"
							bind:value={contactForm.message}
							rows="6"
							class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
							required
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800"
					>
						{t.contact.form.send}
					</button>
				</form>
			</div>

			<!-- Contact Info & Map -->
			<div class="space-y-8">
				<!-- Contact Information -->
				<div class="rounded-lg bg-white p-8 shadow-sm">
					<h2 class="mb-6 text-2xl font-bold text-gray-900">
						{t.contact.info.title}
					</h2>

					<div class="space-y-6">
						<!-- Address -->
						<div class="flex gap-4">
							<div class="shrink-0">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
								>
									<svg
										class="h-5 w-5 text-blue-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										></path>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="mb-1 font-medium text-gray-900">
									{t.contact.info.address}
								</h3>
								<p class="text-gray-600">
									Avenida 25 #15202 e/ 158 y 190<br />
									Cubanacán, Playa<br />
									La Habana, CP 11600<br />
									Cuba
								</p>
							</div>
						</div>

						<!-- Phone -->
						<div class="flex gap-4">
							<div class="shrink-0">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
								>
									<svg
										class="h-5 w-5 text-blue-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="mb-1 font-medium text-gray-900">
									{t.contact.info.phone}
								</h3>
								<p class="text-gray-600">+53 7 271 6247</p>
								<p class="text-gray-600">+53 7 271 5353</p>
							</div>
						</div>

						<!-- Email -->
						<div class="flex gap-4">
							<div class="shrink-0">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
								>
									<svg
										class="h-5 w-5 text-blue-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="mb-1 font-medium text-gray-900">
									{t.contact.info.email}
								</h3>
								<p class="text-gray-600">contacto@cneuro.cu</p>
								<p class="text-gray-600">info@cneuro.cu</p>
							</div>
						</div>

						<!-- Hours -->
						<div class="flex gap-4">
							<div class="shrink-0">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
								>
									<svg
										class="h-5 w-5 text-blue-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="mb-1 font-medium text-gray-900">
									{t.contact.info.hours}
								</h3>
								<p class="text-gray-600">
									{t.contact.info.weekdays}: 8:00 AM - 5:00 PM
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Map -->
				<div class="overflow-hidden rounded-lg bg-white shadow-sm">
					<div class="aspect-video bg-gray-200">
						<iframe
							src="https://www.openstreetmap.org/export/embed.html?bbox=-82.45660096406938%2C23.07473986547188%2C-82.45454639196397%2C23.076047696237346&amp;layer=mapnik&amp;marker=23.07539378244437%2C-82.45557367801666"
							class="h-full w-full border-0 pointer-events-none"
							title={currentLang === 'es' ? 'Mapa de ubicación' : 'Location map'}
						></iframe>
					</div>
					<!-- <div class="p-4">
						<a
							href="https://www.openstreetmap.org/?mlat=23.075394&amp;mlon=-82.455574#map=19/23.075394/-82.455574"
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-blue-900 hover:underline"
						>
							{t.contact.info.mapLink}
						</a>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</section>
