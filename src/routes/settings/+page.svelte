<script>
	import SideDashNav from "../../components/SideDashNav.svelte";
    import '$lib/css/settings.css';
	import Tabs from "../../components/Tabs.svelte";

    let items = ["Profile", "Personal Data", "Account", "Interests", "Newsletter"];
	let activeItem = "Profile";

	const tabChange = (e) => {
		activeItem = e.detail;
	}
</script>

<header>
    <SideDashNav menu=5/>
</header>

<main>
    <Tabs {items} {activeItem} on:tabChange={tabChange}/>
</main>