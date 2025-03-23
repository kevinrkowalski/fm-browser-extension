<script>
	import Extensions from '../components/Extensions.svelte';
	let activeFilter = $state('all');
	const activeFilterClasses = 'bg-red-700 text-white';
	const nonActiveFilterClasses = 'bg-white hover:bg-neutral-0';

	const handleChangeFilter = (e) => {
		const filter = e.target.dataset.filter;
		activeFilter = filter;
	};
</script>

<main class="container mx-auto px-4 xl:px-48">
	<div class="mt-8 mb-20 flex justify-between rounded-2xl bg-white p-3 shadow-sm">
		<img src="images/logo.svg" class="" alt="extensions logo" />
		<button
			type="button"
			class="cursor-pointer rounded-xl bg-neutral-100 p-3 hover:bg-neutral-300 focus:outline-red-700"
		>
			<img src="images/icon-moon.svg" alt="moon" />
		</button>
	</div>
	<div class="">
		<div class="flex flex-wrap justify-center gap-4 md:justify-between">
			<h2 class="text-center text-3xl font-bold">Extension List</h2>
			<div class="flex items-center gap-3">
				<button
					type="button"
					class={`cursor-pointer rounded-full px-4 py-2 shadow-sm focus:outline-red-700 ${activeFilter === 'all' ? activeFilterClasses : nonActiveFilterClasses}`}
					data-filter="all"
					onclick={handleChangeFilter}
				>
					All
				</button>
				<button
					type="button"
					class={`cursor-pointer rounded-full px-4 py-2 shadow-sm focus:outline-red-700 ${activeFilter === 'active' ? activeFilterClasses : nonActiveFilterClasses}`}
					data-filter="active"
					onclick={handleChangeFilter}
				>
					Active
				</button>
				<button
					type="button"
					class={`cursor-pointer rounded-full px-4 py-2 shadow-sm focus:outline-red-700 ${activeFilter === 'inactive' ? activeFilterClasses : nonActiveFilterClasses}`}
					data-filter="inactive"
					onclick={handleChangeFilter}
				>
					Inactive
				</button>
			</div>
		</div>
		<Extensions filter={activeFilter} />
	</div>
</main>
