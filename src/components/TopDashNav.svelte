<script>
	import '$lib/css/bootstrap-icons.css';
	import '$lib/css/bootstrap.min.css';
	import '$lib/css/top-dash-nav.css';
	import '$lib/css/style.css';
	import '$lib/css/side-nav.css';
	import ProfileBox from './ProfileBox.svelte';

	export let color = 'blue';
	export let profileVisib = "visible";
</script>

<nav class={color}>
	<div class="nav-left">
		<h3 class="p-4">
			<i class="navbar-brand-icon bi-book me-2" />
			<span>Escape Zone</span>
		</h3>
		<ul>
			<li on:click={() => (window.location = '/dashboard')}>
				<i class="bi bi-house" />
				Home
			</li>
			<li on:click={() => (window.location = '/courses')}>
				<i class="bi bi-book" />
				Courses
			</li>
			<li on:click={() => (window.location = '/inventory')}>
				<i class="bi bi-inboxes" />
				Inventory
			</li>
		</ul>
	</div>
	<div class="nav-right">
		<ul>
			<li>About us</li>
			<li>Contact us</li>
			<li>Blogs</li>
		</ul>
		<div class="nav-end">
			<div class="icon">
				<i class="bi bi-search-heart" />
			</div>
			<div class="icon">
				<i class="bi bi-bell fa-lg" />
			</div>
			<ProfileBox showLevel="0" visib={profileVisib}/>
		</div>
	</div>
</nav>
