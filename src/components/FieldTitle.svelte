<script>
	export let title = undefined;
	export let required = undefined;
</script>

{#if title !== ''}
	<div class="title">
		<h5>{title}</h5>
		{#if required}
			<h5><span>*</span></h5>
		{/if}
	</div>
{/if}
