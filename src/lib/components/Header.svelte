<script>
    let displayHeader = false;
    let permission = false;
    function showHeader() {
        if (displayHeader == false) {
            displayHeader = true;
        } else {
            displayHeader = false;
        }
    }

    let searchQuery = '';

    function googlesearch(){
        if (searchQuery.trim()){
            const query = encodeURIComponent(searchQuery);
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }
    }

</script>

<div class="header">
    <button class="burger-pad" onclick={showHeader}><span class="material-symbols-outlined">
{displayHeader ? 'close' : 'menu'}
</span></button>
    <h1 class="heading">ChoreMate - Manage Your workload</h1>
    <div class="icons" style:display={displayHeader ? 'flex' : ''}>
        <button class="home" onclick={()=>window.location.href='/'}>
        <span class="material-symbols-outlined">
            home_app_logo
        </span>
        <p>Home</p>
        </button>
        <button class="notification" onclick={()=>Notification.requestPermission()}>
            <span class="material-symbols-outlined">
{permission ? 'notifications' : 'notifications_active'}
</span>
            <p>Notifications</p>
        </button>
        <button class="account" onclick={()=>window.location.href='/login'}>
            <span class="material-symbols-outlined">
login
</span>
            <p>Login</p>
        </button>
        </div>
        <div class="searchbar" style:display={displayHeader ? 'flex' : ''}>
            <input type="text" placeholder="Search in google..." bind:value={searchQuery} onkeydown={(e)=>{
                if(e.key === 'Enter') googlesearch();
            }}/>
            <button class="search" onclick={googlesearch}><span class="material-symbols-outlined">
search
</span></button>
        </div>
</div>

<style>
    .burger-pad {
        display: none;
        width: 24px; 
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(90deg, #4f46e5, #9333ea);
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
    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            align-items: flex-start;
        }
        .burger-pad {
            display: flex;
        }
        .heading {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }
        .icons {
            display: none;
            margin-top: 10px;
            justify-content: center;
            width: 100%;
        }
        .searchbar {
            display: none;
            margin-top: 10px;
            width: 100%;
        }
        .searchbar input {
            flex: 1;
            width: 100%;
        }
    }
</style>