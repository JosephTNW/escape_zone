<script>
	let email, username, password;
	let register = false;
	let agree = false;
</script>

<svelte:head>
	<title>Join Escape Zone</title>
    <link href="../src/css/hide-overflow.css" rel="stylesheet">
</svelte:head>
<div class="auth">
	<div class="auth-img">
		<div />
		<img src="../src/images/mountain.jpg" />
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
			<img class="blob blob-1 blob-outlined" src="../src/images/blobs/blob1-outline.svg" />
			<div class="blob blob-shadow blob-shadow-1" />
			<img class="blob blob-1" src="../src/images/blobs/blob1.svg" />
            <img class="blob blob-2 blob-outlined" src="../src/images/blobs/blob2-outline.svg" />
			<div class="blob blob-shadow blob-shadow-2" />
			<img class="blob blob-2" src="../src/images/blobs/blob2.svg" />
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input
						bind:value={email}
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
                {#if register}
                <div class="mb-3">
					<label for="exampleInputUsername" class="form-label">Username</label>
					<input
						bind:value={username}
						type="text"
						class="form-control"
						id="exampleInputUsername"
						aria-describedby="usernameHelp"
					/>
				</div>
                {/if}
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input
						bind:value={password} 
						type="password" 
						class="form-control" 
						id="exampleInputPassword1" />
				</div>
                {#if register}
				<div class="mb-3 form-check">
					<input bind:checked={agree} type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">By checking this, you agree to our <a href="/tc">terms and conditions</a></label>
				</div>
				
				<button type="submit" class="btn btn-primary" disabled={!agree}>Register</button>
                {:else}
				<button type="submit" class="btn btn-primary">Login</button>
                {/if}
                <p>Haven't had an account? 
                    {#if register}
                    <a href="#" on:click={() => register = false}>Login here</a>
                    {:else}
                    <a href="#" on:click={() => register = true}>Register here</a>
                    {/if}
                </p>
			</form>
		</div>
	</div>
</div>
