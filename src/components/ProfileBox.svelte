<script>
	import '$lib/css/profile-box.css';
	import profilePic from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';
	export let showLevel = 1;
	export let username = 'Vasco';
	export let level = 100;
</script>

<div class="profile-box" on:click={() => window.location = "/profile"}>
	<img class="img-fluid avatar-image" src={profilePic} alt="" />
	<div class="profile-info">
		<p>{username}</p>
		{#if showLevel == 1}
		<p>Level {level}</p>
		{/if}
	</div>
</div>
