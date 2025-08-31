<script>
    let now = new Date();
    let date = now.toLocaleDateString();
    let hours = now.getHours();
    let displayHours = hours % 12 || 12;
    let minutes = now.getMinutes();
    let displayMinutes = minutes < 10 ? '0' + minutes : String(minutes);
    let seconds = now.getSeconds();
    let displaySeconds = seconds < 10 ? '0' + seconds : String(seconds);
    let ampm = hours >= 12 ? 'PM' : 'AM';
    function updateDate(){
        now = new Date();
        date = now.toLocaleDateString();
        hours = now.getHours();
        displayHours = hours % 12 || 12;
        minutes = now.getMinutes();
        displayMinutes = minutes < 10 ? '0' + minutes : String(minutes);
        seconds = now.getSeconds();
        displaySeconds = seconds < 10 ? '0' + seconds : String(seconds);
        ampm = hours >= 12 ? 'PM' : 'AM';
    }
    setInterval(updateDate,1000);
</script>

<div class="watch">
    <div class="date">{date}</div>
    <div class="time {updateDate()}">
        <div class="hours">{displayHours}</div>
        :
        <div class="mins">{displayMinutes}</div>
        :
        <div class="secs">{displaySeconds}</div>
        {ampm}
    </div>

</div>

<style>
    .watch{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        background: linear-gradient(to bottom, black, grey);
        color: white;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;
        width: fit-content;
        margin: 20px;
    }
    .watch:hover{
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
        transform: scale(1.02);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: default;
    }
    .date{
        font-size: 2rem;
        margin-bottom: 2vh;
    }
    .time{
        display: flex;
        align-items: center;
        font-size: 4rem;
        gap: 1vw;
    }
    .hours, .mins, .secs{
        min-width: 30px;
        text-align: center;
        padding: 1vh 1vw;
        border-radius: 10px;
        border: 5px solid whitesmoke;
    }
    .flip{
        animation: flip 0.5s;
    }
    @keyframes flip{
        0% {transform: rotateX(0deg);}
        100% {transform: rotateX(90deg);}
    }
</style>