<script>
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let now = new Date();
    let year = now.getFullYear();
    let monthNo = now.getMonth();
    let month=months[monthNo];
    let maxDate = new Date(year,monthNo+1,0).getDate();
    let dates = Array.from({length:maxDate},(_,i)=>i+1);
    let today = now.getDate();
</script>

<div class="template">
    <div class="months">
    <div class="month">{month}</div>
    <div class="year">{year}</div>
    </div>
    <div class="calendar">
        <div class="days">
            <button>Sun</button>
            <button>Mon</button>
            <button>Tue</button>
            <button>Wed</button>
            <button>Thu</button>
            <button>Fri</button>
            <button>Sat</button>
        </div>
        <div class="date">
            {#each dates as day}
            <button class="dates {day === today?'today':''}">{day}</button>
        {/each}
        </div>
    </div>
</div>

<style>
    .template{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px;
        padding: 20px;
        border: 2px solid darkviolet;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        background: linear-gradient(to right, white, lavenderblush);
    }
    .months{
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        display: flex;
        gap: 20px;
        padding: 2vh;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        background: linear-gradient(to bottom, pink, crimson);
    }
    .calendar{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .days{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(7, auto);
        gap: 1vw;
        text-align: center;
        font-weight: bold;
        color: darkviolet;
        border-radius:50%;
    }
    .days button{
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 8px 6px;
        border-radius: 8px;
    }
    .date{
        display: grid;
        grid-template-columns: repeat(7, auto);
        gap: 1vw;
        text-align: center;
        margin-top: 1vh;
        width: 100%;
    }
    .dates{
        color: darkviolet;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
        border-radius: 50%;
        padding: auto;
        aspect-ratio: 1/1;
    }
    .dates:hover{
        background: violet;
        color: white;
        transform: scale(1.2);
    }
    .days button:hover{
        text-decoration: underline;
        color: violet;
    }
    .today{
        background:#6366f1;
        color: white;
    }
    .today:hover{
        background: darkviolet;
        color: white;
        transform: scale(1.2);
    }
</style>