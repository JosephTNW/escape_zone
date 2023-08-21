<script>
	import '$lib/css/tabs.css';
	import ProfileBox from './ProfileBox.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let items;
	export let activeItem;
	export let width = 'normal';
	export let gap;
	export let showProfile;
	export let role;
	export let userMode;
	export let username;
	export let lvl;
</script>

<div class="tabs result {width}">
	<ul class="{width} {gap}">
		{#each items as item}
			<li on:click={() => dispatch('tabChange', item)}>
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
		{#if showProfile}
			<ProfileBox {role} {username} {lvl} bind:userMode />
		{/if}
	</ul>
</div>
