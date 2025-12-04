<script lang="ts">
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n';

	let currentLang = $state($language);
	let t = $derived(getTranslation(currentLang));

	$effect(() => {
		currentLang = $language;
	});

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 bg-gray-50">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="mb-8 flex justify-center md:justify-start">
			<img src="/CNeuro.png" alt="CNeuro Logo" class="h-32 w-32 object-contain" />
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
					{t.footer.address}
				</h3>
				<p class="text-sm text-gray-600">
					Centro de Neurociencias de Cuba<br />
					Avenida 25 #15202 e/ 158 y 190<br />
					Cubanacán, Playa<br />
					La Habana, CP 11600, Cuba
				</p>
			</div>

			<!-- Contact Details -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
					Contacto
				</h3>
				<div class="space-y-2 text-sm text-gray-600">
					<p>
						<span class="font-medium">{t.footer.phone}:</span> +53 7 271 6247
					</p>
					<p>
						<span class="font-medium">{t.footer.email}:</span> contacto@cneuro.cu
					</p>
				</div>
			</div>

			<!-- Social Links -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
					{t.footer.follow}
				</h3>
				<div class="flex gap-4">
					<a
						href="#"
						class="text-gray-500 transition-colors hover:text-blue-900"
						aria-label="Twitter"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							></path>
						</svg>
					</a>
					<a
						href="#"
						class="text-gray-500 transition-colors hover:text-blue-900"
						aria-label="LinkedIn"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-200 pt-8 text-center">
			<p class="text-sm text-gray-500">
				© {currentYear} Centro de Neurociencias de Cuba. {t.footer.rights}.
			</p>
		</div>
	</div>
</footer>
