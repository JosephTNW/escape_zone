<script>
	import '$lib/css/style.css';
	import '$lib/css/course-item.css';
	import '$lib/css/bootstrap-icons.css';
	import DarkShade from '../../../components/DarkShade.svelte';
	import trophy from '$lib/images/trophy.png';
	import test from '$lib/images/person-taking-test.png';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	const courseId = $page.params.courseId;

	let mainIndex = 1;
	let subIndex = 0;
	let pCounter = 1;
	let totalDone = 0;
	let nextBType = 'button';
	let currentPos = 0;
	let totalSubSects = 0;
	let announce,
		contentTitle,
		content,
		testState,
		localState,
		questions,
		currQ = 0;

	onMount(() => {
		if (JSON.parse(localStorage.getItem(courseId)) === null) {
			localStorage.setItem(courseId, JSON.stringify({ doAnnounce: '', testState: 'validate' }));
		}
		getLocalState();
		if (localState.doAnnounce !== '') {
			announce = {
				message: 'Congratulations for finishing the course',
				coins: 5,
				exps: 2
			};
		}

		testState = localState.testState || 'validate';
	});

	const getLocalState = () => {
		localState = JSON.parse(localStorage.getItem(courseId));
	};

	const saveLocalState = () => {
		localStorage.setItem(courseId, JSON.stringify(localState));
	};

	const updateContent = () => {
		content = course.mainSection[mainIndex].subSection[subIndex].content;
		contentTitle = course.mainSection[mainIndex].subSection[subIndex].title;
	};

	const switchCollapse = (index) => {
		const icon = document.querySelector(`.btn-${index}`);
		if (icon.classList.contains('bi-caret-down-fill')) {
			icon.classList.replace('bi-caret-down-fill', 'bi-caret-up-fill');
		} else {
			icon.classList.replace('bi-caret-up-fill', 'bi-caret-down-fill');
		}

		const content = document.querySelector(`.roadmap-content-${index}`);
		content.classList.toggle('d-flex');
		content.classList.toggle('d-none');
	};

	const switchToIndex = (mIndex, sIndex, isAccessible) => {
		if (!isAccessible) {
			return;
		}

		mainIndex = mIndex;
		subIndex = sIndex;

		updateContent();

		checkProgress();
	};

	const nextHandler = () => {
		if (subIndex === course.mainSection[mainIndex].subSection.length - 1) {
			if (mainIndex === course.mainSection.length - 1) {
				return;
			}

			mainIndex++;
			subIndex = 0;
		} else {
			subIndex++;
		}

		updateContent();

		checkProgress();

		console.log(mainIndex, subIndex);
	};

	const prevHandler = () => {
		if (subIndex == 0) {
			if (mainIndex == 0) {
				return;
			}
			mainIndex--;
			subIndex = course.mainSection[mainIndex].subSection.length - 1;
		} else {
			subIndex--;
		}

		updateContent();

		checkProgress();

		console.log(mainIndex, subIndex);
	};

	const checkProgress = () => {
		currentPos = 0;

		for (let index = 0; index < mainIndex; index++) {
			currentPos += course.mainSection[index].subSection.length;
		}

		currentPos += subIndex + 1;

		if (currentPos > totalDone && currProgress.finishAt === undefined) {
			nextBType = 'submit';
		} else {
			nextBType = 'button';
		}

		console.log(currentPos);
	};

	const setUpCourse = () => {
		if (currProgress.finishAt === undefined) {
			totalDone = currProgress.progress.match(/(\d+)\s*\/\s*(\d+)/)[1] * 1;
			totalSubSects = currProgress.progress.match(/(\d+)\s*\/\s*(\d+)/)[2] * 1;

			course.mainSection.forEach((element, m_index) => {
				element.subSection.forEach((sub, s_index) => {
					if (pCounter < totalDone) {
						sub.completed = true;
					} else if (pCounter == totalDone) {
						sub.completed = false;
						sub.onGoing = true;
						subIndex = s_index;
						mainIndex = m_index;
						console.log('this code is reached');
						updateContent();
					} else {
						sub.completed = false;
					}
					pCounter++;
				});
			});
		} else {
			course.mainSection.forEach((main) => {
				main.subSection.forEach((sub) => {
					sub.completed = true;
					totalSubSects++;
				});
			});
		}

		checkProgress();
	};

	const { currProgress, course } = data;
	questions = data.questions;

	if (currProgress.doneQuiz || currProgress.finishAt) {
		updateContent();

		setUpCourse();
	} else if (!currProgress.doneQuiz) {
		

		if (questions.length === 0 || questions.length === undefined) {
			setUpCourse();
		}
	}

	console.log(testState);

	console.log(mainIndex, subIndex);
</script>

{#if announce !== undefined}
	<DarkShade
		displayDetail="d-block"
		on:clicked={() => {
			localState.doAnnounce = '';
			saveLocalState();
			announce = undefined;
		}}
	/>
	<div class="item-window">
		<img src={trophy} alt="trophy_img" />
		<p>{announce.message}!</p>
		<p>You've earned 5 Coins and 2 Exps</p>
	</div>
{/if}

{#if currProgress.doneQuiz === false && questions.length !== 0}
	{#if testState === 'validate'}
		<DarkShade displayDetail="d-block" />
		<div class="item-window test">
			<img src={test} alt="trophy_img" />
			<p>Would you like to do a quick test to determine your progress?</p>
			<div class="test-actions">
				<button
					on:click={() => {
						testState = 'do test';
						localState.testState = 'do test';
						saveLocalState();
					}}>Yes</button
				>
				<form action="?/skipQuiz" method="post">
					<button class="btn-skip" type="submit">No</button>
				</form>
			</div>
		</div>
	{:else if testState === 'do test'}
		<header>
			<nav class="quiz-nav">
				<div class="corner-top">
					<button class="bi bi-chevron-left" on:click={() => history.back()} />
					<h6>{course.title}</h6>
				</div>
				<div class="questions">
					{#each questions as q, index}
						<button
							class:selected={currQ === index}
							class:answered={q.selected !== undefined}
							on:click={() => (currQ = index)}>{index + 1}</button
						>
					{/each}
				</div>
			</nav>
		</header>
		<main class="test-main">
			<div class="top-panel top-panel-quiz">
				<form action="?/submitTest" method="post">
					<input
						type="text"
						style="display: none;"
						name="result"
						value={JSON.stringify(questions)}
					/>
					<button type="submit">Finish</button>
				</form>
			</div>
			<div class="test-content">
				<h4>{questions[currQ].question}</h4>
				<div class="answers">
					{#each questions[currQ].choices as choice, index}
						<button
							on:click={() => (questions[currQ].selected = index)}
							class:selected={questions[currQ].selected === index}>{choice.answer}</button
						>
					{/each}
				</div>
			</div>
		</main>
	{/if}
{:else if currProgress.doneQuiz || currProgress.doneQuiz === undefined || questions.length === 0}
	<header>
		<nav>
			<div class="corner-top">
				<button class="bi bi-chevron-left" on:click={() => history.back()} />
				<h6>{course.title}</h6>
			</div>
			<div class="roadmap">
				{#each course.mainSection as main, mIndex}
					<button
						class="collapsible"
						on:click={() => {
							switchCollapse(mIndex);
						}}
					>
						<h5>{main.title}</h5>
						{#if mIndex === mainIndex}
							<i class="bi bi-caret-up-fill btn-{mIndex}" />
						{:else}
							<i class="bi bi-caret-down-fill btn-{mIndex}" />
						{/if}
					</button>
					{#if mIndex === mainIndex}
						<div class="content roadmap-content-{mIndex} d-flex">
							{#each main.subSection as subTopic, sIndex}
								<div class="sub-topic">
									{#if subTopic.completed}
										<i class="bi bi-check-circle" />
									{/if}
									<p
										on:click={() =>
											switchToIndex(mIndex, sIndex, subTopic.completed || subTopic.onGoing)}
									>
										{subTopic.title}
									</p>
								</div>
							{/each}
						</div>
					{:else}
						<div class="content roadmap-content-{mIndex} d-none">
							{#each main.subSection as subTopic, sIndex}
								<div class="sub-topic">
									{#if subTopic.completed}
										<i class="bi bi-check-circle" />
									{/if}
									<p
										on:click={() =>
											switchToIndex(mIndex, sIndex, subTopic.completed || subTopic.onGoing)}
									>
										{subTopic.title}
									</p>
								</div>
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
				<button
					class="btn-prev"
					on:click={() => prevHandler()}
					disabled={mainIndex == 0 && subIndex == 0}>Prev</button
				>
			</div>
			<div class="top-panel-right">
				<form action="?/updateProgress" method="POST">
					<input name="currentPos" type="number" style="display: none;" value={currentPos} />
					<button
						class="btn-next"
						type={nextBType}
						on:click={() => nextHandler()}
						class:d-none={currentPos === totalSubSects && currProgress.finishAt === undefined}
						disabled={currentPos === totalSubSects && currProgress.finishAt !== undefined}
						>Next</button
					>
				</form>
				<form action="?/complete" method="POST">
					<button
						class="btn-complete"
						class:d-none={currentPos !== totalSubSects || currProgress.finishAt !== undefined}
						on:click={() => {
							localState.doAnnounce = 'notyet';
							saveLocalState();
						}}>Mark as complete</button
					>
				</form>
			</div>
		</div>

		<h4>{contentTitle}</h4>

		<!-- <iframe width="960" height="540" src="https://www.youtube.com/embed/Ki_0iES2cGI" /> -->

		<div class="material">
			{content}
		</div>
	</main>
{/if}
