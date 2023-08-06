<script>
	import '$lib/css/bootstrap-icons.css';
	import '$lib/css/bootstrap.min.css';
	import '$lib/css/style.css';
	import '$lib/css/side-nav.css';
	import PromoBox from './PromoBox.svelte';

	export let menu = 0;
</script>

<nav class="side-nav">
	<h3 class="p-4">
		<i class="navbar-brand-icon bi-book me-2" />
		<span>Escape Zone</span>
	</h3>
	<div class="nav-content">
		<ul>
			{#if menu == 0}
				<li class="active">
					<button class="active">
						<i class="bi bi-house" />
						<h5 class="active">Dashboard</h5>
					</button>
				</li>
			{:else}
				<li>
					<button
                    on:click={() => window.location = '/dashboard'}>
						<i class="bi bi-house" />
						<h5>Dashboard</h5>
					</button>
				</li>
			{/if}
			{#if menu == 1}
				<li class="active">
					<button class="active">
						<i class="bi bi-book" />
						<h5 class="active">Courses</h5>
					</button>
				</li>
			{:else}
				<li>
					<button
                    on:click={() => window.location = '/courses'}>
						<i class="bi bi-book" />
						<h5>Courses</h5>
					</button>
				</li>
			{/if}
			{#if menu == 2}
				<li class="active">
					<button class="active">
						<i class="bi bi-inboxes" />
						<h5 class="active">Inventory</h5>
					</button>
				</li>
			{:else}
				<li>
					<button
                    on:click={() => window.location = '/inventory'}>
						<i class="bi bi-inboxes" />
						<h5>Inventory</h5>
					</button>
				</li>
			{/if}

			{#if menu == 3}
				<li class="active">
					<button class="active">
						<i class="bi bi-search" />
						<h5 class="active">Search</h5>
					</button>
				</li>
			{:else}
				<li>
					<button
                    on:click={() => window.location = 'search'}>
						<i class="bi bi-search" />
						<h5>Search</h5>
					</button>
				</li>
			{/if}

			{#if menu == 4}
				<li class="active">
					<button class="active">
						<i class="bi bi-people" />
						<h5 class="active">Communities</h5>
					</button>
				</li>
			{:else}
				<li>
					<button
                    on:click={() => window.location = '/communities'}>
						<i class="bi bi-people" />
						<h5>Communities</h5>
					</button>
				</li>
			{/if}

			{#if menu == 5}
				<li class="active">
					<button class="active">
						<i class="bi bi-gear" />
						<h5 class="active">Settings</h5>
					</button>
				</li>
			{:else}
				<li>
					<button
                    on:click={() => window.location = 'settings'}>
						<i class="bi bi-gear" />
						<h5>Settings</h5>
					</button>
				</li>
			{/if}
		</ul>

		<PromoBox />
	</div>
</nav>
