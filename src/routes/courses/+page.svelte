<script>
	import '$lib/css/course.css';
	import SideDashNav from '../../components/SideDashNav.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import SortByBar from '../../components/SortByBar.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import CourseBubble from '../../components/CourseBubble.svelte';

	let sortItems = ['Recent', 'A-Z', 'Duration'];
	let activeSort = 'Recent';

	$: activeSort && console.log(activeSort);
</script>

<header>
	<SideDashNav menu="1" />
</header>

<main>
	<div class="course-query">
		<SearchBar color="white" width="w-small" />
		<SortByBar {sortItems} bind:activeSort />
	</div>

	<div class="course-content">
		<div class="ongoing-course">
			<SectionTitle title="Continue Reading" seeMore="true" />
			<div class="course-list">
				<CourseBubble showProg />
			</div>
		</div>

		<div class="finished-course">
			<SectionTitle title="Finished Reading" seeMore="true" link="/courses/completed"/>
			<div class="course-list">
				<CourseBubble showCert />
			</div>
		</div>
	</div>
</main>
