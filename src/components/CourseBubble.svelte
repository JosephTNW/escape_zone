<script>
	import '$lib/css/course-bubble.css';
	import courseImg from '$lib/images/portrait-mature-smiling-authoress-sitting-desk.jpg';

	export let category = 'Personal Finance';
	export let title = 'Three Pillars of a Healthy Finance';
	export let creator = 'Juan Sigit';
	export let duration = '2';
</script>

<div class="bubble-content">
	<img src={courseImg} alt="Course title" />
	<div class="bubble-info">
		<p class="bubble-categ">{category}</p>
        <p class="bubble-title">{title}</p>
        <div class="publish-info">
            <p>{creator}.</p>
            <p>{duration} hr</p>
        </div>
	</div>
</div>
