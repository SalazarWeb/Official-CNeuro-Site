<script lang="ts">
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n';
	import { page } from '$app/stores';

	let currentLang = $state($language);
	let t = $derived(getTranslation(currentLang));
	let mobileMenuOpen = $state(false);

	$effect(() => {
		currentLang = $language;
	});

	const navItems = $derived([
		{ href: '/', label: t.nav.home },
		{ href: '/historia', label: t.nav.history },
		{ href: '/publicaciones', label: t.nav.publications },
		{ href: '/noticias', label: t.nav.news },
		{ href: '/investigaciones', label: t.nav.research },
		{ href: '/contacto', label: t.nav.contact }
	]);

	function toggleLanguage() {
		language.toggle();
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="border-b border-gray-200 bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3">
				<img src="/CNeuro.png" alt="CNeuro Logo" class="h-32 w-32 object-contain" />
				<div class="flex flex-col">
					<span class="text-lg font-bold text-blue-900">CNEURO</span>
					<span class="text-xs text-gray-600"
						>{currentLang === 'es'
							? 'Centro de Neurociencias'
							: 'Neuroscience Center'}</span
					>
				</div>
			</a>

			<!-- Navigation Links -->
			<div class="hidden items-center gap-1 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class="rounded-md px-4 py-2 text-sm font-medium transition-colors {$page.url
							.pathname === item.href
							? 'bg-blue-50 text-blue-900'
							: 'text-gray-700 hover:bg-gray-50 hover:text-blue-900'}"
					>
						{item.label}
					</a>
				{/each}

				<!-- Language Toggle -->
				<button
					onclick={toggleLanguage}
					class="ml-4 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
					aria-label="Toggle language"
				>
					{currentLang === 'es' ? 'EN' : 'ES'}
				</button>
			</div>

			<!-- Mobile menu button -->
			<button
				onclick={toggleMobileMenu}
				class="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				{:else}
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="border-t border-gray-200 pb-3 pt-2 md:hidden">
				<div class="space-y-1 px-2">
					{#each navItems as item}
						<a
							href={item.href}
							onclick={closeMobileMenu}
							class="block rounded-md px-3 py-2 text-base font-medium transition-colors {$page
								.url.pathname === item.href
								? 'bg-blue-50 text-blue-900'
								: 'text-gray-700 hover:bg-gray-50 hover:text-blue-900'}"
						>
							{item.label}
						</a>
					{/each}
					<button
						onclick={toggleLanguage}
						class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
					>
						{currentLang === 'es' ? 'English' : 'Español'}
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>
