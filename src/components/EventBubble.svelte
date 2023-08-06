<script>
   import '$lib/css/event-bubble.css'; 
   import avatar1 from '$lib/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg';
   import avatar2 from '$lib/images/avatar/portrait-young-redhead-bearded-male.jpg'
   import avatar3 from '$lib/images/avatar/pretty-blonde-woman.jpg'
   import avatar4 from '$lib/images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg'

   export let title = "Personal Finance Live: Three Pillar of a healthy finance";
   export let host = "Juan Sigit";
   export let date = "Nov 2nd 2023"
   export let time = "2.30 - 4.30 pm"
   export let media = "Google Meet"
</script>

<div class="event-box">
    <p class="event-title">{title}</p>
    <p class="host">Hosted by {host}</p>
    <p class="attendee">Meeting Attendance</p>
    <div class="attendee-list">
        <img class="img-fluid avatar-image" src="{avatar1}" alt="">
        <img class="img-fluid avatar-image" src="{avatar2}" alt="">
        <img class="img-fluid avatar-image" src="{avatar3}" alt="">
        <img class="img-fluid avatar-image" src="{avatar4}" alt="">
    </div>
    <div class="event-info">
        <p>{date}</p>
        <div class="seperator"></div>
        <p>{time}</p>
        <div class="seperator"></div>
        <p>{media}</p>
    </div>
</div>