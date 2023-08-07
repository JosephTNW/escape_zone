<script>
    import '$lib/css/search-bar.css';
    import { onMount } from 'svelte';

    export let color = "gray";
    export let width = "w-normal";
	export let search = "";

    onMount(() => {
		const close = document.querySelector('.bi-x-lg');
		const searchInput = document.querySelector('.search-input');

		searchInput.addEventListener('input', () => {
			if (searchInput.value == '') {
				close.style.visibility = 'hidden';
			} else {
				close.style.visibility = 'visible';
			}
		});
		close.addEventListener('click', () => {
			searchInput.value = '';
			close.style.visibility = 'hidden';
		});
	});
</script>

<form class="search-bar {color} {width}">
    <i class="bi bi-search-heart" />
    <input
	bind:value={search} class="search-input" placeholder="Search" type="text" />
    <i class="bi bi-x-lg" />
</form>