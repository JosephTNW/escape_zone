<script>
    import '$lib/css/section-title.css';

	export let title = 'title';
	export let seeMore = false;
</script>

<div class="section-title">
	<h5>{title}</h5>
    {#if seeMore}
    <p>see more</p>
    {/if}
</div>
