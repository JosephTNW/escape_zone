<script>
	import Tabs from '../../../components/Tabs.svelte';
	import TopDashNav from '../../../components/TopDashNav.svelte';
    import '$lib/css/profile.css';
	import ProfileBox from '../../../components/ProfileBox.svelte';
	import Achievement from '../../../components/Achievement.svelte';

    let items = ["About Me", "Enrolled Courses", "Saved Courses", "Saved Slides", "My Recommendations"]
    let activeItem = "About Me";

    const tabChange = (e) => {
		activeItem = e.detail;
	}
</script>

<header>
	<TopDashNav color="white" profileVisib="hidden"/>
</header>

<main>
	<section class="top-bar">
        <ProfileBox size="big" showDetail=true showLevel=false/>
        <div class="achievements">
            <Achievement/>
        </div>
    </section>
    <hr/>
	<Tabs {items} {activeItem} on:tabChange={tabChange}/>
</main>
