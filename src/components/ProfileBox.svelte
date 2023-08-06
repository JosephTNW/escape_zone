<script>
    import '$lib/css/profile-box.css';
	import profilePic from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';
    export let username = "Vasco"
    export let level = 100
</script>

<div class="profile-box">
    <img class="img-fluid avatar-image" src={profilePic} alt="" />
    <div class="profile-info">
        <p>{username}</p>
        <p>Level {level}</p>
    </div>
</div>