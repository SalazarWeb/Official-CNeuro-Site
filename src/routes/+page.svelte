<script lang="ts">
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n';

	let currentLang = $state($language);
	let t = $derived(getTranslation(currentLang));

	$effect(() => {
		currentLang = $language;
	});
</script>

<svelte:head>
	<title>CNEURO - {t.nav.home}</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-linear-to-br from-blue-50 to-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<div class="mb-8 flex justify-center">
				<img src="/CNeuro.png" alt="CNeuro Logo" class="h-32 w-32 object-contain md:h-40 md:w-40" />
			</div>
			<h1 class="mb-6 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl lg:text-6xl">
				{t.home.hero.title}
			</h1>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
				{t.home.hero.subtitle}
			</p>
			<a
				href="/historia"
				class="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-800"
			>
				{t.home.hero.cta}
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					></path>
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="border-y border-gray-200 bg-white py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			<a href="/historia" class="text-center transition-opacity hover:opacity-80">
				<div class="text-4xl font-bold text-blue-900">30+</div>
				<div class="mt-2 text-sm text-gray-600">
					{t.home.stats.years}
				</div>
			</a>
			<a href="/publicaciones" class="text-center transition-opacity hover:opacity-80">
				<div class="text-4xl font-bold text-blue-900">100+</div>
				<div class="mt-2 text-sm text-gray-600">
					{t.home.stats.publications}
				</div>
			</a>
			<div class="text-center">
				<div class="text-4xl font-bold text-blue-900">50+</div>
				<div class="mt-2 text-sm text-gray-600">
					{t.home.stats.researchers}
				</div>
			</div>
			<a href="/noticias" class="text-center transition-opacity hover:opacity-80">
				<div class="text-4xl font-bold text-blue-900">15+</div>
				<div class="mt-2 text-sm text-gray-600">
					{t.home.stats.projects}
				</div>
			</a>
		</div>
	</div>
</section>

<!-- Featured Areas -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-12 text-center text-3xl font-bold text-gray-900">
			{t.home.areas.title}
		</h2>
		<div class="grid gap-8 md:grid-cols-3">
			<div class="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
				<h3 class="mb-3 text-xl font-semibold text-blue-900">
					{t.home.areas.cognitive.title}
				</h3>
				<p class="text-gray-600">
					{t.home.areas.cognitive.description}
				</p>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
				<h3 class="mb-3 text-xl font-semibold text-blue-900">
					{t.home.areas.clinical.title}
				</h3>
				<p class="text-gray-600">
					{t.home.areas.clinical.description}
				</p>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
				<h3 class="mb-3 text-xl font-semibold text-blue-900">
					{t.home.areas.imaging.title}
				</h3>
				<p class="text-gray-600">
					{t.home.areas.imaging.description}
				</p>
			</div>
		</div>
	</div>
</section>
