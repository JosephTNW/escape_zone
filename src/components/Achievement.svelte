<script>
    import "$lib/css/achievement.css";

    export let achievements = [
        {
            category: "Involvements",
            status: "CBO at Life Partners"
        },
        {
            category: "Specialization",
            status: "Bachelor of IT"
        }
    ]
</script>

<div class="achievement">
    {#each achievements as pair}
        <p class="category">{pair.category}</p>
        <p class="status">{pair.status}</p>
    {/each}
</div>