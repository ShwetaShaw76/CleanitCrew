<script>

    let permission = false;

</script>

<div class="header">
    <h1 class="heading">ChoreMate - Manage Your workload</h1>
    <div class="icons">
        <button class="home" onclick={()=>window.location.href='/'}>
        <span class="material-symbols-outlined">
            home_app_logo
        </span>
        <p>Home</p>
        </button>
        <button class="calendar" onclick={()=>window.location.href='/calendar.svelte'}>
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
        <div class="searchbar">
            <input type="text" placeholder="Search..."/>
            <button class="search"><span class="material-symbols-outlined">
search
</span></button>
        </div>
</div>

<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(to right, var(--purple-heart),var(--spindle));
        padding: 10px 20px;
        color: white;
        flex-direction: row;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .heading {
        margin: 0;
        font-size: 1.5rem;
    }

    .icons {
        display: flex;
        gap: 15px;
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
    .searchbar {
        display: flex;
        align-items: center;
        gap: 5px;
        background: white;
        border-radius: 12px;
        border: 3px solid #ccc;
    }
    .searchbar input {
        padding: 10px;
        color: black;
        border-radius: 12px;
    }
    .searchbar button {
        background: darkviolet;
        border: none;
        color: white;
        padding: 7px 10px;
        border-radius: 16px;
        cursor: pointer;
    }
    .searchbar button:hover{
        background: linear-gradient(to bottom,darkviolet,pink);
        color: black;
    }
</style>