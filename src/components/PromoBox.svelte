<script>
	import '$lib/css/box-premium.css';
	import promopic from '$lib/images/promopic.svg';

	export let picture = false;
    let margin = "";

    if (!picture) {
        margin = "margin: 2rem;";
    }
</script>

<div class="box-premium" style="{margin}">
	<div class="content">
		<div>
			<div>
				<h5>Go Premium</h5>
				<p>
					Join our team to gain access to more course and expand your earning income to 10x of
					current income
				</p>
			</div>
			<button>Get Access</button>
		</div>
		{#if picture}
			<img src={promopic} alt="promo picture">
		{/if}
	</div>
</div>
