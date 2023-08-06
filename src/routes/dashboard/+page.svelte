<script>
	import DashNav from '../../components/DashNav.svelte';
	import '$lib/css/dashboard.css';
	import { onMount } from 'svelte';
	import PromoBox from '../../components/PromoBox.svelte';
	import Overview from '../../components/Overview.svelte';
	import CourseBubble from '../../components/CourseBubble.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import ProfileBox from '../../components/ProfileBox.svelte';
	import UserList from '../../components/UserList.svelte';
	import EventBubble from '../../components/EventBubble.svelte';

	const username = 'Joseph';

	onMount(() => {
		const close = document.querySelector('.bi-x-lg');
		const searchInput = document.querySelector('.search-input');

		searchInput.addEventListener('input', () => {
			if (searchInput.value == '') {
				close.style.visibility = 'hidden';
			} else {
				close.style.visibility = 'visible';
			}
		});
		close.addEventListener('click', () => {
			searchInput.value = '';
			close.style.visibility = 'hidden';
		});
	});
</script>

<header>
	<DashNav />
</header>

<main>
	<section class="middle">
		<div class="middle-top">
			<div>
				<h2>Hi {username},</h2>
				<p>Let's learn something new today</p>
			</div>
			<form class="search-bar">
				<i class="bi bi-search-heart" />
				<input class="search-input" placeholder="Search" type="text" />
				<i class="bi bi-x-lg" />
			</form>
		</div>
		<PromoBox picture="true" />
		<div class="middle-center">
			<SectionTitle title="Overview" />
			<div class="overview">
				<Overview message="Course in Progress" number="0" />
				<Overview message="Course Completed" number="0" />
				<Overview message="Referral" number="1" />
				<Overview message="Coin" number="199" />
			</div>
		</div>
		<div class="middle-bottom">
			<SectionTitle title="Continue Reading" seeMore="true" />
			<div class="course-list">
				<CourseBubble />
				<CourseBubble />
				<CourseBubble />
				<CourseBubble />
			</div>
		</div>
	</section>
	<section class="side">
		<div class="side-top">
			<div class="notification">
				<i class="bi bi-bell fa-lg" />
			</div>
			<ProfileBox />
		</div>
		<hr />
		<div class="side-middle">
			<SectionTitle title="Top Users" />
			<div class="section-user">
				<UserList />
				<UserList />
				<UserList />
			</div>
		</div>
		<div class="side-bottom">
			<SectionTitle title="Events" />
			<EventBubble />
			<EventBubble />
		</div>
	</section>
</main>
