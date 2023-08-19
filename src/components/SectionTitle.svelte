<script>
    import '$lib/css/section-title.css';

	export let title = 'title';
	export let seeMore = false;
    export let link = "/courses/ongoing";
</script>

<div class="section-title">
	<h5>{title}</h5>
    {#if seeMore}
    <p
    on:click={() => window.location = link}
    >see more</p>
    {/if}
</div>
