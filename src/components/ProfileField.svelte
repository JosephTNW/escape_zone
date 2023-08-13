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
				<input type="checkbox">
				<span class="slider round"></span>
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
				<input {type} value="{choice}" />
				<p><span>{choice}</span></p>
			</div>
		{/each}
		
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
