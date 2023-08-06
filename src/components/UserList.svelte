<script>
    import '$lib/css/user-list.css'

    export let level = 12;
    export let username = "Joey Gabriel";
    export let point = 100;
</script>

<div class="user-box">
    <div class="user-info">
        <p class="username">{username}</p>
        <p>Level {level}</p>
    </div>
    <p class="point">{point} points</p>
</div>