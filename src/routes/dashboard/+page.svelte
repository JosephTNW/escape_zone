<script>
	import SideDashNav from '../../components/SideDashNav.svelte';
	import '$lib/css/dashboard.css';
	import PromoBox from '../../components/PromoBox.svelte';
	import Overview from '../../components/Overview.svelte';
	import CourseBubble from '../../components/CourseBubble.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import ProfileBox from '../../components/ProfileBox.svelte';
	import UserList from '../../components/UserList.svelte';
	import EventBubble from '../../components/EventBubble.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import Error from '../../components/Error.svelte';
	import Tabs from '../../components/Tabs.svelte';
	import ProfileField from '../../components/ProfileField.svelte';

	export let data;

	let promo,
		ongoingNum,
		completedNum,
		coin,
		username,
		lvl,
		xpInHand,
		totalXpToLvlUp,
		role,
		userMode,
		listLead,
		listEvent, mainSections;

	let items, activeItem;
	if (Object.keys(data).length !== 0) {
		const { user } = data;

		role = user.role;

		const { ongoing, completed, users, events } = data;
		ongoingNum = ongoing.length;
		completedNum = completed.length;
		coin = user.coin;
		username = user.name;
		lvl = user.level;
		xpInHand = user.expInHand;
		totalXpToLvlUp = user.totalExpToLvlUp;

		listLead = users;
		listEvent = events;

		if (role === 'ADMIN') {
			items = ['Course', 'Event', 'Item'];
			activeItem = 'Course';
			promo = false;
		} else {
			promo = user.premium < new Date();
		}
	}

	const tabChange = (e) => {
		activeItem = e.detail;
		console.log(listLead);
	};
</script>

{#if Object.keys(data).length === 0}
	<Error err_msg="403 Forbidden" />
{:else}
	<div class="profile">
		<ProfileBox {username} {lvl} {role} bind:userMode />
	</div>
	{#if role === 'BASIC' || userMode}
		<header>
			<SideDashNav {promo} />
		</header>

		<main>
			<section class="middle">
				<div class="middle-top">
					<div>
						<h2>Hi {username},</h2>
						<p>Let's learn something new today</p>
					</div>
					<SearchBar />
				</div>
				{#if promo}
					<PromoBox picture="true" />
				{/if}
				<div class="middle-center">
					<SectionTitle title="Overview" />
					<div class="overview">
						<Overview message="Course in Progress" number={ongoingNum} />
						<Overview message="Course Completed" number={completedNum} />
						<Overview message="Referral" number="1" />
						<Overview message="Coin" number={coin} />
					</div>
				</div>
				<div class="middle-bottom">
					{#if ongoingNum !== 0}
						<SectionTitle title="Continue Reading" seeMore="true" link="/courses/ongoing" />
						<div class="course-list">
							<CourseBubble datas={data.ongoing} />
						</div>
					{:else}
						<SectionTitle title="Start Reading" seeMore="true" link="/courses/ongoing" />
						<div class="course-list">
							<CourseBubble datas={data?.randomCourse} />
						</div>
					{/if}
				</div>
			</section>
			<div class="seperator" />
			<section class="side">
				<div class="side-top">
					<div class="notification">
						<i class="bi bi-bell fa-lg" />
					</div>
					<form class="logout" action="?/logout" method="POST">
						<button type="submit" class="bi bi-box-arrow-left" />
					</form>
				</div>
				<hr />
				<div class="side-middle">
					<SectionTitle title="Top Users" />
					<div class="section-user">
						<UserList datas={listLead} />
					</div>
				</div>
				<div class="side-bottom">
					<SectionTitle title="Events" />
					<EventBubble />
				</div>
			</section>
		</main>
	{:else if role === 'ADMIN'}
		<header class="admin-head">
			<nav class="admin-nav">
				<Tabs
					{items}
					{activeItem}
					width="entire"
					{role}
					{username}
					{lvl}
					showProfile
					gap="justify"
					on:tabChange={tabChange}
					bind:userMode
				/>
			</nav>
		</header>

		<main class="admin-main">
			{#if activeItem === items[0]}
				<section>
					<form action="">
						<div>
							<h4>Add Course</h4>
							<hr />
						</div>

						<ProfileField
							title="Course Title"
							content=""
							required
							placeholder="Enter your course title"
						/>

						<ProfileField
							title="Category"
							type="option"
							required
							choices={['Finance', 'Stocks', 'Crypto', '']}
						/>

						<ProfileField
							title="Duration"
							type="duration"
							required
							content=""
							desc="Your estimation on how long will it take to finish the course"
						/>
						
						<input type="text" style="display: none;" bind:value={mainSections}>
						<ProfileField
							title="Sections"
							type='dropdown'
							desc="The overall structure of your course"
							placeholder='Main Section'
							bind:mainSections
						/>
					</form>
				</section>
			{:else if activeItem === items[1]}
				<section />
			{:else if activeItem === items[2]}
				<section />
			{/if}
		</main>
	{/if}
{/if}
