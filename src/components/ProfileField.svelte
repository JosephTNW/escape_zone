<script>
	import '$lib/css/profile-field.css';
	import pp from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';

	const defaultTypes = ['text', 'number', 'date', 'email', 'password'];

	export let type = 'text';
	export let title = '';
	export let content = 'Euntae Lee';
	export let desc = '';
	export let disabled = false;
	export let checkBox = false;
	export let checkBoxDesc = undefined;
	export let toggleBtn = false;
	export let toggleBtnDesc = undefined;
	export let choices = undefined;
	export let placeholder = '';
	export let warning = '';
	export let required = undefined;
	let mainSections = 1;
	let mainSectionArray = [''];
	let subSections = [1];

	const createMainSect = () => {
		const div = document.createElement('div');
		div.classList.add(`main-parent-${mainSections}`);
		if (subSections[mainSections - 1] === undefined) {
			subSections[mainSections - 1] = 0;
		}
		subSections[mainSections - 1]++;

		div.innerHTML = `<input type="text" placeholder="Main section" required name="main-section-${mainSections}" />
				<button type='button' class="bi bi-chevron-up btn-main-section-${mainSections}"></button>
				<div class="main-child-${mainSections}">
					<input class="sub-section" type="text" placeholder="Sub section" required name="sub-section-${
						subSections[mainSections - 1]
					}-main-${mainSections}" />
					<button type='button' class="bi bi-chevron-down btn-sub-section-${
						subSections[mainSections - 1]
					}"></button>
				</div>`;

		return div;
	};
	const addMain = () => {
		mainSections++;
		const mains = document.querySelector('.main-sections');

		mains.appendChild(createMainSect());
	};

	const deleteMain = () => {
		const lastMain = document.querySelector(`.main-parent-${mainSections}`);

		lastMain.remove();

		subSections[mainSections - 1]--;

		console.log(subSections);

		mainSections--;
	};

	const addSection = () => {
		
	}
</script>

<div class="form">
	{#if title !== ''}
		<div class="title">
			<h5>{title}</h5>
			{#if required}
				<h5><span>*</span></h5>
			{/if}
		</div>
	{/if}
	{#if toggleBtn}
		<div class="buttoned-section">
			<label class="switch">
				<input type="checkbox" />
				<span class="slider round" />
			</label>
			<p>{toggleBtnDesc}</p>
		</div>
	{/if}
	{#if defaultTypes.includes(type)}
		{#if warning !== ''}
			<div class="warning">
				<p>{warning}</p>
			</div>
		{/if}
		<input {disabled} {placeholder} {type} name={title} id="id-{title}" value={content} />
	{:else if type === 'textarea'}
		<textarea name="" id="" cols="30" rows="10" />
	{:else if type === 'image'}
		<div class="image-field">
			<img src={pp} alt="Profile Picture" />
			<div class="image-edit">
				<button>Choose Picture</button>
				<p>{desc}</p>
			</div>
		</div>
	{:else if type === 'radio'}
		{#each choices as choice}
			<div class="buttoned-section">
				<input type="radio" value={choice} />
				<p>{choice}</p>
			</div>
		{/each}
	{:else if type === 'option'}
		<select name="choices" id="option">
			{#each choices as choice}
				<option value={choice}>{choice}</option>
			{/each}
		</select>
	{:else if type === 'checkbox' && choices !== undefined}
		{#each choices as choice}
			<div class="buttoned-section">
				<input {type} value={choice} />
				<p><span>{choice}</span></p>
			</div>
		{/each}
	{:else if type === 'duration'}
		<div class="duration">
			<input type="number" min="0" value="0" />
			<p>Hours</p>
			<input type="number" max="59" min="0" value="0" maxlength="2" />
			<p>Minutes</p>
		</div>
	{:else if type === 'dropdown'}
		<div class="main-sections">
			<div class="main-parent-1">
				<input
					type="text"
					{placeholder}
					required
					name="main-section-1"
					bind:value={mainSectionArray[0]}
				/>
				<button type="button" class="bi bi-chevron-up btn-main-section-1" />
				<div class="main-child-1">
					<input
						class="sub-section"
						type="text"
						placeholder="Sub section"
						required
						name="sub-section-1-main-1"
					/>
					<button type="button" class="bi bi-chevron-down btn-sub-section-1" />
				</div>
			</div>
		</div>
		<button
			type="button"
			class="bi bi-plus-circle"
			on:click={() => {
				addMain();
			}}
		/>
		<button
			disabled={mainSections <= 1}
			type="button"
			class="bi bi-trash"
			on:click={() => {
				deleteMain();
			}}
		/>
	{/if}
	{#if checkBox}
		<div class="buttoned-section">
			<input type="checkbox" />
			<p class="checkbox-desc">{checkBoxDesc}</p>
		</div>
	{/if}

	{#if desc !== '' && type !== 'image'}
		<p>{desc}</p>
	{/if}
</div>
