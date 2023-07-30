<script>
	import { onMount } from 'svelte';
    let className;

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
                className = "show"
			} else {
                className = ""
            }
		});
        if (window.scrollY > 0) {
                className = "show"
			} else {
                className = ""
            }
	});
</script>

<nav class="navbar navbar-expand-lg {className}">
	<div class="container">
		<a class="navbar-brand" href="#">
			<i class="navbar-brand-icon bi-book me-2" />
			<span>Escape Zone</span>
		</a>

		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ms-lg-auto me-lg-4">
				<li class="nav-item">
					<a class="nav-link click-scroll" href="#section_1">Home</a>
				</li>

				<li class="nav-item">
					<a class="nav-link click-scroll" href="#section_2">About</a>
				</li>

				<li class="nav-item">
					<a class="nav-link click-scroll" href="#section_3">Founder</a>
				</li>

				<li class="nav-item">
					<a class="nav-link click-scroll" href="#section_4">Reviews</a>
				</li>

				<li class="nav-item">
					<a class="nav-link click-scroll" href="#section_5">Contact</a>
				</li>
			</ul>

			<div class="d-none d-lg-block">
				<button href="#" class="btn custom-btn custom-border-btn btn-naira btn-inverted"
                on:click={() => {
                    window.location.href = "/auth";
                }}>
					<i class="btn-icon bi-emoji-heart-eyes" />
					<span>Login</span>
                </button>
			</div>
		</div>
	</div>
</nav>
