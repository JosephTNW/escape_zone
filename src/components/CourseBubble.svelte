<script>
	import '$lib/css/course-bubble.css';
	import courseImg from '$lib/images/portrait-mature-smiling-authoress-sitting-desk.jpg';

	export let rows = 2;
	export let showProg = undefined;
	export let showCert = undefined;
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
</script>

{#each datas as data}
	<div class="bubble-content {bubbleContent}"
	on:click={() => window.location = `/courses/${data.id}`}>
		<img src={courseImg} alt="Course title" />
		<div class="bubble-info">
			<p class="bubble-categ">{data.category}</p>
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
				<p>{data.creator}.</p>
				<p>{data.duration} hr</p>
			</div>
		</div>
	</div>
{/each}
