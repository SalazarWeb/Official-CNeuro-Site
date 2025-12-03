<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta
		name="description"
		content="Centro de Neurociencias de Cuba - Investigación científica de excelencia"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navigation />
	
	<main class="flex-1">
		{@render children()}
	</main>
	
	<Footer />
</div>
