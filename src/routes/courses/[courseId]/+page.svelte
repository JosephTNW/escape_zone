<script>
	import { page } from '$app/stores';
	import '$lib/css/style.css';
	import '$lib/css/course-item.css';
	import '$lib/css/bootstrap-icons.css';
	import { onMount } from 'svelte';

	const courseId = $page.params.courseId;
	export let title = 'Investment';
	export let roadmap = [
		{
			title: 'Getting Started',
			subTopics: [
				{
					title: 'Welcome to the course',
					link: 'https://www.youtube.com/watch?v=oIYWenB637c',
					content: 'Hi! I am Bruce Wayne, your investment course....'
				},
				{
					title: 'What is Investment?'
				}
			]
		},
		{
			title: 'Investment refresher',
			subTopics: [
				{
					title: 'Banking',
					link: ''
				}
			]
		}
	];

	export let activeItem = roadmap[0].subTopics.title;
	let activeMenu = 0;

	const switchCollapse = (index) => {
		const icon = document.querySelector(`.btn-${index}`);
		if (icon.classList.contains('bi-caret-down-fill')) {
			icon.classList.replace('bi-caret-down-fill', 'bi-caret-up-fill');
		} else {
			icon.classList.replace('bi-caret-up-fill', 'bi-caret-down-fill');
		}

		const content = document.querySelector(`.roadmap-content-${index}`);
		content.classList.toggle('d-block');
		content.classList.toggle('d-none');
	};

	let contentTitle = 'Welcome to the course';

	let content = `Welcome to Introduction to Investment Fundamentals! This course is designed to provide you with a comprehensive understanding of the world of investments, empowering you to make informed financial decisions and build a strong foundation for your financial future. Whether you're a novice seeking to enter the realm of investing or someone with prior knowledge looking to refine your investment strategies, this course will equip you with essential knowledge and practical insights.

Course Description:
In today's dynamic and interconnected global economy, the ability to effectively manage and grow your finances is paramount. Investments play a crucial role in securing your financial well-being, whether you're aiming for short-term gains, long-term growth, or planning for retirement. This course is carefully structured to introduce you to the key concepts, principles, and strategies that drive successful investment decisions.`;
</script>

<header>
	<nav>
		<div class="corner-top">
			<button class="bi bi-chevron-left"
			on:click={() => history.back()}></button>
			<h6>{title}</h6>
		</div>
		<div class="roadmap">
			{#each roadmap as section, index}
				<button
					class="collapsible"
					on:click={() => {
						switchCollapse(index);
					}}
				>
					<h5>{section.title}</h5>
					{#if index === activeMenu}
						<i class="bi bi-caret-up-fill btn-{index}" />
					{:else}
						<i class="bi bi-caret-down-fill btn-{index}" />
					{/if}
				</button>
				{#if index === activeMenu}
					<div class="content roadmap-content-{index} d-block">
						{#each roadmap[index].subTopics as subTopic, index}
							<p on:click={() => {}}>{subTopic.title}</p>
						{/each}
					</div>
				{:else}
					<div class="content roadmap-content-{index} d-none">
						{#each roadmap[index].subTopics as subTopic}
							<p on:click={() => {}}>{subTopic.title}</p>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	</nav>
</header>

<main>
	<div class="top-panel">
		<div class="top-panel-left">
			<button class="btn-prev">Prev</button>
		</div>
		<div class="top-panel-right">
			<button class="btn-next">Next</button>
			<button class="btn-complete">Mark as complete</button>
		</div>
	</div>

	<h4>{contentTitle}</h4>

	<iframe width="960" height="540" src="https://www.youtube.com/embed/Ki_0iES2cGI" />

	<div class="material">
		{content}
	</div>
</main>
