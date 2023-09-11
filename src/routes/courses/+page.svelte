<script>
	import '$lib/css/course.css';
	import SideDashNav from '../../components/SideDashNav.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import SortByBar from '../../components/SortByBar.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import CourseBubble from '../../components/CourseBubble.svelte';
	import Tabs from '../../components/Tabs.svelte';

	export let data;

	let sortItems = ['Recent', 'A-Z', 'Duration'];
	let activeSort = 'Recent';

	let items = ['Ongoing', 'Finished'];
	let activeItem = 'Ongoing';

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	$: activeSort && console.log(activeSort);
</script>

<header>
	<SideDashNav menu="1" />
</header>

<main>
	<!-- <div class="course-query">
		<SearchBar color="white" width="w-small" />
		<SortByBar {sortItems} bind:activeSort />
	</div> -->

	<Tabs {items} {activeItem} width='entire' gap='justify' on:tabChange={tabChange} />

	<div class="course-content">
		{#if activeItem === items[0]}
			<div class="ongoing-course">
				<SectionTitle title="Continue Reading" seeMore="true" />
				<div class="course-list">
					<CourseBubble
						showProg
						datas={data.ongoing.map((item) => {
							const temp = {
								id: item.course.id,
								title: item.course.title,
								category: item.course.category,
								duration: item.course.duration,
								name: item.course.author.name,
								progress: Math.ceil(
									(item.progress.match(/(\d+)\s*\/\s*(\d+)/)[1] * 1 * 100) /
										(item.progress.match(/(\d+)\s*\/\s*(\d+)/)[2] * 1)
								)
							};

							return temp;
						})}
					/>
				</div>
			</div>
		{/if}

		{#if activeItem === items[1]}
		<div class="finished-course">
			<SectionTitle title="Finished Reading" seeMore="true" link="/courses/completed" />
			<div class="course-list">
				<CourseBubble
					showCert
					finishAt
					datas={data.completed.map((item) => {
						const temp = {
							id: item.course.id,
							title: item.course.title,
							category: item.course.category,
							duration: item.course.duration,
							name: item.course.author.name,
							finishAt: item.finishAt
						};

						return temp;
					})}
				/>
			</div>
		</div>
		{/if}

		
	</div>
</main>
