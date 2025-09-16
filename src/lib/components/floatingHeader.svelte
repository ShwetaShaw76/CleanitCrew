<script>
    let permission = false;
</script>

<div class="header">
    <div class="icons">
        <button class="home" onclick={()=>window.location.href='/'}>
        <span class="material-symbols-outlined">
            home_app_logo
        </span>
        <p>Home</p>
        </button>
        <button class="calendar">
            <span class="material-symbols-outlined">
calendar_clock
</span>
            <p>Calendar</p>
        </button>
        <button class="notification" onclick={()=>Notification.requestPermission()}>
            <span class="material-symbols-outlined">
{permission ? 'notifications' : 'notifications_active'}
</span>
            <p>Notifications</p>
        </button>
        <button class="account">
            <span class="material-symbols-outlined">
login
</span>
            <p>Login</p>
        </button>
        
        </div>
</div>

<style>
    .header {
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(90deg, #4f46e5, #9333ea);
        padding: 10px 20px;
        color: white;
        flex-direction: row;
        border-radius: 15px;
        position: fixed;
        top: 98%;
        left: 35%;
        transition: all 2s;
    }
    .header:hover{
        top: 80%;
        box-shadow: -7px -10px 8px var(--mint-tulip);
    }

    .icons {
        display: flex;
        gap: 4vw;
    }

    button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        padding: 8px 6px;
        border-radius: 8px;
    }

    .icons button:hover{
        color: black;
        border: 3px solid white;
        background: white;
        text-decoration: none;
    }

    

    .material-symbols-outlined {
        font-size: 2rem;
    }

    button:hover {
        text-decoration: underline;
    }
</style>