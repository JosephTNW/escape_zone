<script>
	import '$lib/css/course-bubble.css';
	import courseImg from '$lib/images/portrait-mature-smiling-authoress-sitting-desk.jpg';

	export let rows = 2;
	export let showProg = undefined;
	export let showCert = undefined;
	export let finishAt = undefined;
	let bubbleContent = `bubble-content-${rows}`;

	export let datas = [
		{
			id: 1,
			category: 'Personal Finance',
			title: 'Three Pillars of a Healthy Finance',
			creator: 'Juan Sigit',
			progress: 50,
			duration: '2'
		},
		{
			id: 1,
			category: 'Personal Finance',
			title: 'Three Pillars of a Healthy Finance',
			creator: 'Juan Sigit',
			progress: 50,
			duration: '2'
		},
		{
			id: 1,
			category: 'Personal Finance',
			title: 'Three Pillars of a Healthy Finance',
			creator: 'Juan Sigit',
			progress: 50,
			duration: '2'
		},
		{
			id: 1,
			category: 'Personal Finance',
			title: 'Three Pillars of a Healthy Finance',
			creator: 'Juan Sigit',
			progress: 50,
			duration: '2'
		}
	];

	function formatDate(inputDate) {
		const date = new Date(inputDate);

		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();

		return `${day} - ${month} - ${year}`;
	}
</script>

{#each datas as data}
	<div
		class="bubble-content {bubbleContent}"
		on:click={() => (window.location = `/courses/${data.id}`)}
	>
		<img src={courseImg} alt="Course title" />
		<div class="bubble-info">
			<div class="top-sect">
				<p class="bubble-categ">{data.category}</p>
				{#if finishAt}
					<p>{formatDate(data.finishAt)}</p>
				{/if}
			</div>
			<p class="bubble-title">{data.title}</p>
			{#if showProg}
				<div class="progress-section">
					<div class="progress-bar">
						<div style="--prog: {data.progress}%;" class="completion-bar" />
					</div>
					<p>{data.progress}%</p>
				</div>
			{/if}
			{#if showCert}
				<a href="">Show Certification</a>
			{/if}
			<div class="publish-info">
				<p>{data.name}.</p>
				<p>{data.duration} hr</p>
			</div>
		</div>
	</div>
{/each}
