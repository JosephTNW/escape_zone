<script>
	import '$lib/css/sort-by-bar.css';

	export let sortItems = ['Quantity', 'A-Z'];
	export let activeSort;
</script>

<div class="sort-content">
	<p>Sort by:</p>
	<select name="category" id="categ" bind:value={activeSort}>
		{#each sortItems as categ}
			<option on:click={dispatch('sortChange', categ)} value={categ}>{categ}</option>
		{/each}
	</select>
</div>
