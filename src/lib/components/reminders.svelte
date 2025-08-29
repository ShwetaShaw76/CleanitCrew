<script lang="ts">
    let visible: boolean = true;
    let notifications: string[] = [];
</script>

<div class="reminders">
    <h1 class="heading">Notifications</h1>
    <ul>
        {#each notifications as note}
        <li> {note} <button class="dismiss {visible?'visible':'hidden'}"><span class="material-symbols-outlined">
cancel <p>Dismiss</p>
</span></button>
<button class="snooze {visible?'visible':'hidden'}"><span class="material-symbols-outlined">
snooze <p>10mins</p>
</span></button></li>
       {/each}
    </ul>

</div>

<style>

    .reminders{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to right, darkviolet, pink);
        padding: 10px 20px;
        color: white;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .heading{
        margin: 0;
        font-size: 2.5rem;
        text-decoration: underline;
    }
    ul{
        list-style-type: disc;
        padding: 1vh 1vw;
        margin: 0;
        text-align: left;
        font-weight: bold;
        border-radius: 15px;
    }
    li{
        font-size: 1.5rem;
        margin: 1vh 1vw;
        padding: 5px 10px;
        color: white;
        border-radius: 10px;
        width: 100%;
    }
    .snooze, .dismiss{
        background: white;
        border:2px solid white;
        color: darkviolet;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5rem;
        padding: 0.35vh 0.5vw;
        border-radius: 12px;
        float: right;
        margin-left: 1.5vw;
    }
    .snooze:hover, .dismiss:hover{
        background: darkviolet;
        color: white;
        border: 2px solid white;
    }
    .snooze p, .dismiss p{
        margin: 0;
        font-size: 0.5rem;
    }
    @keyframes shake{
        0% {transform: translate(1px, 1px) rotate(0deg);}
        10% {transform: translate(-1px, -2px) rotate(-1deg);}
        20% {transform: translate(-3px, 0px) rotate(1deg);}
        30% {transform: translate(3px, 2px) rotate(0deg);}
        40% {transform: translate(1px, -1px) rotate(1deg);}
        50% {transform: translate(-1px, 2px) rotate(-1deg);}
        60% {transform: translate(-3px, 1px) rotate(0deg);}
        70% {transform: translate(3px, 1px) rotate(-1deg);}
        80% {transform: translate(-1px, -1px) rotate(1deg);}
        90% {transform: translate(1px, 2px) rotate(0deg);}
        100% {transform: translate(1px, -2px) rotate(-1deg);}
    }
    .snooze:hover{
        animation: shake 0.5s;
        animation-iteration-count: infinite;
    }
    @keyframes fadeIn{
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    .reminders{
        animation: fadeIn 2s;
    }
    @keyframes cancel{
        0% {transform: translateX(0);}
        50% {transform: translateX(20%);}
        100% {transform: translateX(-20%);}
    }
    .dismiss:hover{
        animation: cancel 0.5s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }
    .visible{
        display: block;
    }
    .hidden{
        display: none;
    }
</style>