<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>ChoreMate</title>
</svelte:head>

{@render children?.()}
