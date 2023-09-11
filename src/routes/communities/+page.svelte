<script>
	import SideDashNav from '../../components/SideDashNav.svelte';
	import TopDashNav from '../../components/TopDashNav.svelte';
	import '$lib/css/communities.css';
	import ButtonBack from '../../components/ButtonBack.svelte';
	import Tabs from '../../components/Tabs.svelte';
	import Error from '../../components/Error.svelte';
	import DarkShade from '../../components/DarkShade.svelte';
	import CommunityList from '../../components/CommunityList.svelte';

	let items = ['Daily', 'Weekly', 'Monthly', 'Yearly', 'All-Time'];
	let activeItem = 'Daily';
	const onConstruction = true;

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	let leaderBoard = false;

    const commData = [
        {
            name: "DausMaju",
            desc: ""
        }
    ]
</script>

{#if onConstruction}
<Error err_msg='On Progress'/>
{:else}
<header>
	<nav>
		<ButtonBack />
		<h1>Communities</h1>
		<div class="icon" on:click={() => (leaderBoard = true)}>
			<i class="bi bi-trophy" />
		</div>
	</nav>
</header>

<main>
	{#if leaderBoard}
		<DarkShade displayDetail="d-block" on:clicked={() => (leaderBoard = false)} />
		<div class="leaderboard">
			<Tabs {items} {activeItem} width="entire" on:tabChange={tabChange}/>
			<div class="lead-content">
				{#if items[0] === activeItem}
                <CommunityList/>
                {/if}
				{#if items[1] === activeItem}
                <CommunityList/>
                {/if}
				{#if items[2] === activeItem}
                <CommunityList/>
                {/if}
				{#if items[3] === activeItem}
                <CommunityList/>
                {/if}
				{#if items[4] === activeItem}
                <CommunityList/>
                {/if}
			</div>
		</div>
	{/if}
	<div class="community">
        <div class="community-list">

        </div>

        <div class="community-content">

        </div>
    </div>
</main>
{/if}