<script>
	import '$lib/css/inventory.css';
	import SearchBar from '../../components/SearchBar.svelte';
	import SideDashNav from '../../components/SideDashNav.svelte';
	import SortByBar from '../../components/SortByBar.svelte';
	import Item from '../../components/Item.svelte';

	let sortItems = ['Quantity', 'A-Z'];
	let activeSort = 'Quantity';

	$: activeSort && console.log(activeSort);
</script>

<header>
	<SideDashNav menu="2" />
</header>

<main>
	<div class="item-query">
		<SearchBar color="white" width="w-small" />
		<SortByBar {sortItems} bind:activeSort />
	</div>

	<div class="item-section">
		<h2>Books</h2>
		<div class="item-container">
			<Item />
		</div>
	</div>
</main>
