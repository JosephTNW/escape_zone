<script>
	import '$lib/css/profile-box.css';
	import profilePic from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';
	export let showLevel = true;
	export let showDetail = false;
	export let status = 'Student';
	export let email = 'vasco@gmail.com';
	export let role = 'BASIC';
	export let username = 'Vasco';
	export let lvl = 100;
	export let size = 'small';
	export let visib = 'visible';
	export let userMode;


	export let display = false;
</script>

<button
	style="visibility: {visib};"
	class="profile-box"
	on:click={() => {
		if (role === 'ADMIN') {
			display = !display;
		} else {
			window.location = '/profile';
		}
	}}
>
	<div class="profile-content">
		<img class="img-fluid avatar-image {size}" src={profilePic} alt="" />
		<div class="profile-info">
			<p class={size}>{username}</p>
			{#if showLevel == 1}
				<p>Level {lvl}</p>
			{/if}

			{#if showDetail}
				<div class="detail">
					<p>{status}</p>
					<p>{email}</p>
				</div>
			{/if}
		</div>
	</div>
	{#if role === 'ADMIN'}
		{#if !display}
			<i class="bi bi-chevron-down" />
		{:else}
			<i class="bi bi-chevron-up" />
		{/if}
		<div class:block={display} class="action-opt">
			<button class="" on:click={() => (window.location = '/profile')}>Profile</button>
			<div class="select-mode">
				<p>Admin</p>
				<div class="buttoned-section">
					<label class="switch">
						<input type="checkbox" bind:checked={userMode}>
						<span class="slider round"></span>
					  </label>
				</div>
			</div>
		</div>
	{/if}
</button>
