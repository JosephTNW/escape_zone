<script>
	import '$lib/css/user-list.css';

	export let datas = [
		{
			level: 12,
			username: 'Joey Gabriel',
			point: 100
		}
	];
</script>

{#each datas as data}
	<div class="user-box">
		<div class="user-info">
			<p class="username">{data.name}</p>
			<p>Level {data.level}</p>
		</div>
		<p class="point">{data.points} points</p>
	</div>
{/each}
