<script>
	import { ExtensionsState } from '../state/ExtensionsState.svelte';
	let { extension, activeFilter } = $props();
	let { logo, name, description } = extension;

	const shouldShowExtension = () => {
		if (activeFilter.filter === 'all') return true;
		if (activeFilter.filter === 'active' && extension.isActive) return true;
		if (activeFilter.filter === 'inactive' && !extension.isActive) return true;
		return false;
	};

	const handleActiveChange = (e) => {
		const extensionIndex = ExtensionsState.findIndex((ext) => ext.name === extension.name);
		ExtensionsState[extensionIndex].isActive = !ExtensionsState[extensionIndex].isActive;
	};

	const handleRemove = (e) => {
		const extensionIndex = ExtensionsState.findIndex((ext) => ext.name === extension.name);
		ExtensionsState.splice(extensionIndex, 1);
	};
</script>

{#if shouldShowExtension()}
	<li class="flex min-h-40 flex-col justify-between gap-4 rounded-2xl bg-white p-4 shadow-md">
		<div class="flex gap-3">
			<img src={logo} alt={`${name} logo`} class="h-12" />
			<div>
				<h3 class="font-bold">{name}</h3>
				<p class="text-sm text-neutral-500">{description}</p>
			</div>
		</div>
		<div class="flex justify-between">
			<button
				type="button"
				class="cursor-pointer rounded-full border border-neutral-200 px-3 py-1 text-sm hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-red-700"
				onclick={handleRemove}>Remove</button
			>
			<label class="group relative flex cursor-pointer items-center justify-between p-2">
				<span class="sr-only">{`This extension is ${extension.isActive ? '' : 'not'} active`}</span>
				<input
					type="checkbox"
					checked={extension.isActive}
					onchange={handleActiveChange}
					class="peer absolute appearance-none"
				/>
				<span
					class="flex h-5 w-8 flex-shrink-0 items-center rounded-full bg-gray-300 p-[2px] duration-300 ease-in-out peer-checked:bg-red-700 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-md after:duration-300 peer-checked:after:translate-x-[12px]"
				></span>
			</label>
		</div>
	</li>
{/if}
