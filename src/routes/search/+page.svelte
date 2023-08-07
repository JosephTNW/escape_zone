<script>
	import TopDashNav from '../../components/TopDashNav.svelte';
	import '$lib/css/search.css';
	import SearchBar from '../../components/SearchBar.svelte';
	import Tabs from '../../components/Tabs.svelte';

	let searchContent = "";

	//tabs
	let items = ["Courses", "Slides", "Learners", "Blogs"];
	let activeItem = "Courses";

	const tabChange = (e) => {
		activeItem = e.detail;
	}
</script>

<header>
	<TopDashNav />
</header>

<main>
	<section class="search-section">
		<div class="words">
			<h2>Finding Course Made Easy</h2>
			<div class="tagline">
				<p>Search.</p>
				<p>Explore.</p>
				<p>Learn.</p>
			</div>
		</div>
		<SearchBar color="white" width="w-long" bind:search={searchContent}/>
	</section>
	{#if searchContent !== ""}
	<section class="result-section">
		<div class="result">
			<p>Search Results for "<span>{searchContent}</span>"</p>
		</div>

		<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	</section>
	{/if}
</main>
