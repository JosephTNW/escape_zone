<script>
    import '$lib/css/dark-shade.css';
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let displayDetail = "d-none";
</script>

<div class="dark-shade {displayDetail}" on:click={() => dispatch('clicked')}></div>