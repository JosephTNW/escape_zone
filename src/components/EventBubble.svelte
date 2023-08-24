<script>
	import '$lib/css/event-bubble.css';
	import avatar1 from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';
	import avatar2 from '$lib/images/avatar/portrait-young-redhead-bearded-male.jpg';
	import avatar3 from '$lib/images/avatar/pretty-blonde-woman.jpg';
	import avatar4 from '$lib/images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg';

	export let events = [
		{
			title: 'Personal Finance Live: Three Pillar of a healthy finance',
			host: 'Juan Sigit',
			date: 'Nov 2nd 2023',
			time: '2.30 - 4.30 pm',
			platform: 'Google Meet'
		}
	];
</script>

{#each events as event}
	<div class="event-box">
		<p class="event-title">{event.title}</p>
		<p class="host">Hosted by {event.host}</p>
		<p class="attendee">Meeting Attendance</p>
		<div class="attendee-list">
			<img class="img-fluid avatar-image" src={avatar1} alt="" />
			<img class="img-fluid avatar-image" src={avatar2} alt="" />
			<img class="img-fluid avatar-image" src={avatar3} alt="" />
			<img class="img-fluid avatar-image" src={avatar4} alt="" />
		</div>
		<div class="event-info">
			<p>{event.date}</p>
			<div class="seperator" />
			<p>{event.time}</p>
			<div class="seperator" />
			<p>{event.platform}</p>
		</div>
	</div>
{/each}
