<script>
	import '$lib/css/profile-box.css';
	import profilePic from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';
	export let showLevel = true;
	export let showDetail = false;
	export let status = "Student"
	export let email = "vasco@gmail.com"
	export let username = 'Vasco';
	export let level = 100;
	export let size = "small";
	export let visib = 'visible';
</script>

<div style="visibility: {visib};" class="profile-box" on:click={() => window.location = "/profile"}>
	<img class="img-fluid avatar-image {size}" src={profilePic} alt="" />
	<div class="profile-info">
		<p class="{size}">{username}</p>
		{#if showLevel == 1}
		<p>Level {level}</p>
		{/if}

		{#if showDetail}
		<div class="detail">
			<p>{status}</p>
			<p>{email}</p>
		</div>
		{/if}
	</div>
</div>
