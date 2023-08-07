<script>
	import SideDashNav from '../../components/SideDashNav.svelte';
	import '$lib/css/dashboard.css';
	import { onMount } from 'svelte';
	import PromoBox from '../../components/PromoBox.svelte';
	import Overview from '../../components/Overview.svelte';
	import CourseBubble from '../../components/CourseBubble.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import ProfileBox from '../../components/ProfileBox.svelte';
	import UserList from '../../components/UserList.svelte';
	import EventBubble from '../../components/EventBubble.svelte';
	import SearchBar from '../../components/SearchBar.svelte';

	const username = 'Joseph';
</script>

<header>
	<SideDashNav />
</header>

<main>
	<section class="middle">
		<div class="middle-top">
			<div>
				<h2>Hi {username},</h2>
				<p>Let's learn something new today</p>
			</div>
			<SearchBar/>
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
	<div class="seperator"></div>
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
