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
	import FieldTitle from '../../components/FieldTitle.svelte';

	import { contentArray, qArray } from './store';
	import { onMount } from 'svelte';

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
		listEvent,
		addQMode = false;

	let items, activeItem;

	let stars = [1, 0, 0, 0, 0];

	if (Object.keys(data).length !== 0) {
		const { user } = data;

		role = user.role;

		const { onGoingCount, completedCount, users, events } = data;
		ongoingNum = onGoingCount;
		completedNum = completedCount;
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
	} else {
		console.log(data);
	}

	const tabChange = (e) => {
		activeItem = e.detail;
		console.log(listLead);
	};

	onMount(() => {
		if (localStorage.getItem('user_mode')) {
			userMode = localStorage.getItem('user_mode');

			userMode = userMode !== 'false';
		}
	});

	const addMainSection = () => {
		$contentArray = [
			...$contentArray,
			{
				name: ''
			}
		];
		$contentArray[$contentArray.length - 1].subArray = [{ name: '', content: '' }];
		console.log($contentArray);
		console.log($contentArray);
	};

	const deleteMainSection = (index) => {
		$contentArray.splice(index, 1);
		$contentArray = [...$contentArray];
		console.log($contentArray);
	};

	const addSubSection = (index) => {
		$contentArray[index].subArray = [
			...$contentArray[index].subArray,
			{ name: '', content: '', hidden: false }
		];
		console.log($contentArray);
	};

	const deleteSubSection = (subIndex, mainIndex) => {
		$contentArray[mainIndex].subArray.splice(subIndex, 1);
		$contentArray = [...$contentArray];
	};

	const addQ = () => {
		$qArray = [
			...$qArray,
			{
				question: '',
				hidden: false,
				answers: ['', '', '', ''],
				correctPos: 0
			}
		];

		console.log($qArray);
	};

	const deleteQ = (qIndex) => {
		$qArray.splice(qIndex, 1);
		$qArray = [...$qArray];
	};

	const addA = (qIndex) => {
		$qArray[qIndex].answers = [...$qArray[qIndex].answers, ''];
	};

	const deleteA = (qIndex, aIndex) => {
		if ($qArray[qIndex].correctPos === aIndex) {
			$qArray[qIndex].correctPos = 0;
		}

		$qArray[qIndex].answers.splice(aIndex, 1);
		$qArray = [...$qArray];
	};

	const setStars = (index) => {
		for (let i = index; i >= 0; i--) {
			stars[i] = 1;
		}

		for (let i = index+1; i < 5; i++) {
			stars[i] = 0;
		}
	};

	console.log(data);
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
					{#if ongoingNum != 0}
						<SectionTitle title="Continue Reading" seeMore="true" link="/courses/ongoing" />
						<div class="course-list">
							<CourseBubble
								datas={data.ongoing.map((item) => {
									const temp = {
										id: item.course.id,
										title: item.course.title,
										category: item.course.category,
										duration: item.course.duration,
										name: item.course.author.name
									};

									return temp;
								})}
								ongoing
							/>
						</div>
					{:else}
						<SectionTitle title="Start Reading" seeMore="true" link="/courses/ongoing" />
						<div class="course-list">
							<CourseBubble datas={data.randomCourse} />
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
				/>
			</nav>
		</header>

		<main class="admin-main">
			<!-- Course, Event, Items -->
			{#if activeItem === items[0]}
				<section>
					<form action="?/addCourse" method="post">
						<div>
							<h4>Add Course</h4>
							<hr />
						</div>

						<ProfileField
							title="Course Title"
							content=""
							required
							placeholder="Enter your course title"
							name="title"
						/>

						<ProfileField
							title="Category"
							type="option"
							required
							name="categ"
							choices={['Finance', 'Stocks', 'Crypto', '']}
						/>

						<ProfileField
							title="Duration"
							type="duration"
							required
							content=""
							desc="Your estimation on how long will it take to finish the course"
						/>

						<input
							type="text"
							name="courseContent"
							style="display: none;"
							value={JSON.stringify($contentArray)}
						/>

						<div>
							<FieldTitle title="Course Content" required />
							<p>To add videos or photos, simply input the youtube link</p>
						</div>
						<div class="main-sections">
							{#each $contentArray as main, mainIndex}
								<div class="main-parent">
									<input
										type="text"
										bind:value={main.name}
										placeholder="Main Section {mainIndex + 1}"
									/>

									<button
										type="button"
										class="bi bi-chevron-down"
										class:bi-chevron-down={main.hidden}
										class:bi-chevron-up={!main.hidden}
										on:click={() => (main.hidden = !main.hidden)}
									/>

									{#if mainIndex > 0}
										<button
											type="button"
											class="bi bi-trash btn-main-section-1"
											on:click={() => deleteMainSection(mainIndex)}
										/>
									{/if}

									<div class="main-child" class:display-none={main.hidden}>
										{#each $contentArray[mainIndex].subArray as sub, subIndex}
											<input
												class="sub-section"
												type="text"
												placeholder="Sub section {subIndex + 1}"
												required
												bind:value={sub.name}
											/>
											<button
												type="button"
												class="bi bi-chevron-down btn-sub-section-1"
												class:bi-chevron-down={sub.hidden}
												class:bi-chevron-up={!sub.hidden}
												on:click={() => (sub.hidden = !sub.hidden)}
											/>
											{#if subIndex > 0}
												<button
													type="button"
													class="bi bi-trash btn-sub-section-1"
													on:click={() => deleteSubSection(subIndex, mainIndex)}
												/>
											{/if}
											<textarea
												bind:value={sub.content}
												placeholder="Content {subIndex + 1}"
												class:display-none={sub.hidden}
											/>
										{/each}
										<button
											type="button"
											class="bi bi-plus-circle btn-main-section-1"
											on:click={() => addSubSection(mainIndex)}
										/>
									</div>
								</div>
							{/each}
						</div>
						<button type="button" class="bi bi-plus-circle" on:click={() => addMainSection()} />

						<div class="form">
							<input
								type="text"
								name="qna"
								style="display: none;"
								value={JSON.stringify($qArray)}
							/>
							<FieldTitle title="Questions" />
							<div class="buttoned-section">
								<label class="switch">
									<input type="checkbox" bind:checked={addQMode} />
									<span class="slider round" />
								</label>
								<p>Add Questions to assess initial user progress?</p>
							</div>
						</div>
						{#if addQMode}
							{#each $qArray as q, qIndex}
								<div class="q-section">
									<input type="text" bind:value={q.question} placeholder="Question {qIndex + 1}" />
									<button
										type="button"
										class="bi"
										class:bi-chevron-down={q.hidden}
										class:bi-chevron-up={!q.hidden}
										on:click={() => (q.hidden = !q.hidden)}
									/>
									{#if qIndex > 0}
										<button
											type="button"
											class="bi bi-trash btn-main-section-1"
											on:click={() => deleteQ(qIndex)}
										/>
									{/if}
									<div class="a-section main-child" class:d-none={q.hidden}>
										{#each q.answers as a, aIndex}
											<input
												type="text"
												bind:value={a}
												placeholder="Answer {aIndex + 1}"
												class:correct={q.correctPos === aIndex}
											/>
											{#if aIndex > 0}
												<button
													type="button"
													class="bi bi-trash btn-main-section-1"
													on:click={() => deleteA(qIndex, aIndex)}
												/>
											{/if}
											{#if q.correctPos !== aIndex}
												<button
													class="bi bi-check2-circle"
													on:click={() => {
														q.correctPos = aIndex;
													}}
												/>
											{/if}
										{/each}
										<button
											type="button"
											class="bi bi-plus-circle add-a"
											on:click={() => addA(qIndex)}
										/>
									</div>
								</div>
							{/each}
							<button type="button" class="bi bi-plus-circle add-q" on:click={() => addQ()} />
						{/if}
						<button type="submit">Submit</button>
					</form>
				</section>
			{:else if activeItem === items[1]}
				<section>
					<form action="?/addEvent" method="post">
						<div>
							<h4>Add Event</h4>
							<hr />
						</div>

						<ProfileField
							title="Event Name"
							type="text"
							content=""
							required
							placeholder="Enter your event name"
							name="eventName"
						/>

						<ProfileField
							title="Event Date"
							type="date"
							content=""
							required
							placeholder="Enter your event date"
							name="eventDate"
						/>

						<ProfileField
							title="Event Time"
							type="duration"
							required
							content=""
							name="time"
							desc="When will your event be held"
						/>

						<ProfileField
							title="Event Platform"
							content=""
							required
							type="text"
							name="eventPlatform"
							placeholder="ex: Google Meet"
							desc="In what platform will your event be held"
						/>

						<ProfileField
							title="Event Link"
							content=""
							required
							type="text"
							name="eventLink"
							placeholder="ex: meet.google.com/..."
							desc="The link to join your event"
						/>
					</form>
				</section>
			{:else if activeItem === items[2]}
				<section>
					<div>
						<h4>Add Item</h4>
						<hr />
					</div>

					<ProfileField
						title="Item Name"
						content=""
						required
						type="text"
						name="itemName"
						placeholder="ex: Book of Investments by ..."
						desc="Your Item Name"
					/>

					<ProfileField
						title="Item Image"
						type="image"
						name="itemImage"
						desc="Your item image (max 2mb)"
					/>

					<ProfileField
						title="Item Description"
						type="text"
						content=""
						placeholder="ex: This item is a very great item..."
						required
						name="itemDesc"
						desc="Your item description"
					/>

					{#each stars as star, index}
						<button on:click={() => setStars(index)}>
							<i class="bi" class:bi-star={star === 0} class:bi-star-fill={star === 1} />
						</button>
					{/each}
				</section>
			{/if}
		</main>
	{/if}
{/if}
