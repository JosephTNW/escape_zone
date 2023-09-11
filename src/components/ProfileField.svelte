<script>
	import '$lib/css/profile-field.css';
	import pp from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';
	import FieldTitle from './FieldTitle.svelte';

	const defaultTypes = ['text', 'number', 'date', 'email', 'password', 'tel'];

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
	export let name = undefined;

	if (content === null || content === 0) {
		content = '';
	}
</script>

<div class="form">
	<FieldTitle {title} {required} />
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
		<input {disabled} {placeholder} {required} {type} {name} id="id-{title}" value={content} />
	{:else if type === 'textarea'}
		<textarea name="" id="" cols="30" rows="10" value={content} {placeholder} />
	{:else if type === 'image'}
		<div class="image-field">
			<img src={pp} alt="Profile Picture" />
			<div class="image-edit">
				<button>Choose Picture</button>
				<p>{desc}</p>
			</div>
		</div>
	{:else if type === 'radio'}
		<fieldset>
			{#each choices as choice, index}
				<input id={choice} {type} value={choice} name={choice} />
				<label for={choice}>{choice}</label>
			{/each}
		</fieldset>
	{:else if type === 'option'}
		<select {name} id="option">
			{#each choices as choice}
				<option value={choice}>{choice}</option>
			{/each}
		</select>
	{:else if type === 'checkbox' && choices !== undefined}
		{#each choices as choice, index}
			<div class="buttoned-section">
				<input {type} value={choice} checked={content.includes(choice)} />
				<p><span>{choice}</span></p>
			</div>
			{#if Array.isArray(desc)}
				<p>{desc[index]}</p>
			{/if}
		{/each}
	{:else if type === 'duration'}
		<div class="duration">
			<input type="number" name="hours" min="0" value="0" />
			<p>Hours</p>
			<input type="number" name="minutes" max="59" min="0" value="0" maxlength="2" />
			<p>Minutes</p>
		</div>
	{/if}
	{#if checkBox}
		<div class="buttoned-section">
			<input type="checkbox" />
			<p class="checkbox-desc">{checkBoxDesc}</p>
		</div>
	{/if}

	{#if desc !== '' && type !== 'image' && !Array.isArray(desc)}
		<p>{desc}</p>
	{/if}
</div>
