<script>
	import mountain from '$lib/images/mountain.jpg';
	import blob1 from '$lib/images/blobs/blob1.svg';
	import blob1Line from '$lib/images/blobs/blob1-outline.svg';
	import blob2 from '$lib/images/blobs/blob2.svg';
	import blob2Line from '$lib/images/blobs/blob2-outline.svg';
	import '$lib/css/bootstrap-icons.css';
	import '$lib/css/bootstrap.min.css';
	import '$lib/css/style.css';
	import '$lib/css/hide-overflow.css';
	import { onMount } from 'svelte';

	let email, username, password;

	let register = false;
	let agree = false;

	export let form, data;

	onMount(() => {
		if (data.cookie) {
			window.location = "/dashboard"
		}
	});
</script>

<svelte:head>
	<title>Join Escape Zone</title>
</svelte:head>

<div class="auth">
	<div class="auth-img">
		<div />
		<img src={mountain} alt="mountain" />
	</div>
	<div class="auth-form d-flex flex-column">
		<div class="form d-flex flex-column">
			<div class="title">
				<h2>
					<i class="navbar-brand-icon bi-book me-2" />
					<span>Escape Zone</span>
				</h2>
				<p>Ignite Your Curiosity, Unleash Your Potential.</p>
			</div>
			<img class="blob blob-1 blob-outlined" src={blob1Line} />
			<div class="blob blob-shadow blob-shadow-1" />
			<img class="blob blob-1" src={blob1} />
			<img class="blob blob-2 blob-outlined" src={blob2Line} />
			<div class="blob blob-shadow blob-shadow-2" />
			<img class="blob blob-2" src={blob2} />
			{#if register}
				<form action="?/createUser" method="POST">
					{#if form?.used}<p>The email {form?.email} is already taken</p>{/if}
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input
							required
							bind:value={email}
							type="email"
							name="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" class="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputUsername" class="form-label">Username </label>
						<input
							required
							maxlength="8"
							bind:value={username}
							type="text"
							name="name"
							class="form-control"
							id="exampleInputUsername"
							aria-describedby="usernameHelp"
						/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input
							required
							minlength="8"
							bind:value={password}
							type="password"
							name="password"
							class="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<div class="mb-3 form-check">
						<input
							bind:checked={agree}
							type="checkbox"
							class="form-check-input"
							id="exampleCheck1"
						/>
						<label class="form-check-label" for="exampleCheck1"
							>By checking this, you agree to our <a href="/tc">terms and conditions</a></label
						>
					</div>

					<button class="btn btn-primary" disabled={!agree}>Register</button>
					<p>
						Already have an account?
						<a href="#" on:click={() => (register = false)}>Login here</a>
					</p>
				</form>
			{:else}
				<form action="?/checkUser" method="POST">
					{#if form?.used}<p>The email {form?.email} is already taken</p>{/if}
					{#if form?.emailMissing && !register}<p>The email is required!</p>{/if}
					{#if form?.passMissing && !register}<p>The email is required!</p>{/if}
					{#if form?.incorrect && !register}<p>Invalid credentials!</p>{/if}
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input
							required
							bind:value={email}
							type="email"
							name="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" class="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input
							required
							bind:value={password}
							type="password"
							name="password"
							class="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<button class="btn btn-primary">Login</button>
					<p>
						Haven't had an account?
						<a href="#" on:click={() => (register = true)}>Register here</a>
					</p>
				</form>
			{/if}
		</div>
	</div>
</div>
