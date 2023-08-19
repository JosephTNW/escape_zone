<script>
    import '$lib/css/button-back.css';
</script>

<button
		class="btn-back"
		on:click={() => {
			history.back();
		}}
	><i class="bi bi-arrow-left" />
</button>