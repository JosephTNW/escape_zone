<script>
	import '$lib/css/community-list.css';

	export let commData = [
		{
			name: 'DausMaju'
		},
		{
			name: 'DausTerus'
		},
		{
			name: 'DausBae'
		}
	];
</script>

{#each commData as data}
	<div class="comm">
        {data.name}
    </div>
{/each}
