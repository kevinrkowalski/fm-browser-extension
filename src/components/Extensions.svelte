<script>
	import Extension from './Extension.svelte';
	import { ExtensionsState } from '../state/State.svelte';

	let activeFilter = $props();
</script>

{#if ExtensionsState && ExtensionsState.length >= 1}
	<ul class="my-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each ExtensionsState as extension (extension.name)}
			<Extension {extension} {activeFilter} />
		{/each}
	</ul>
{/if}
