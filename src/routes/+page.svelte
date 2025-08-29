<script>
    import Header from '$lib/components/Header.svelte';
    import FloatingHeader from '$lib/components/floatingHeader.svelte';
    import Calendar from '$lib/components/calendar.svelte';
    import Watch from '$lib/components/watch.svelte';
    import Reminder from '$lib/components/reminders.svelte';
    import ToDoList from '$lib/components/toDoList.svelte';
</script>


<Header />
<div class="flexbox">

<Calendar />

<div class="down">
<Watch />
<Reminder />
</div>
</div>

<ToDoList />

<FloatingHeader />

<style>
    .flexbox{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5vw;
        margin-top: 10vh;
    }
</style>
