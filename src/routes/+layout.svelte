<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Cleanup Party</title>
</svelte:head>

{@render children?.()}
