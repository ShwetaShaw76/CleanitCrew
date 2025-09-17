<script>
    import { browser } from '$app/environment';

    import { tasks, addTask , clearTasks, removeTask } from '../../stores';
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let newTaskcontent = '';
    let tasktime = time;
    let selectedHour = time.split(":")[0];
    let selectedMinute = time.split(":")[1];

    function pad2(n) {
        return n.toString().padStart(2, '0');
    }
    $: tasktime = `${pad2(selectedHour)}:${pad2(selectedMinute)}:00`;

    function handleAddTask() {
        if (newTaskcontent.trim() === '') return;
        const now = new Date();
        const hour = pad2(selectedHour);
        const minute = pad2(selectedMinute);
        const newTask = {
            date: now.toLocaleDateString(),
            time: `${hour}:${minute}:00`,
            content: newTaskcontent
        };
        addTask(newTask);
        newTaskcontent = '';
        const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        selectedHour = t.split(":")[0];
        selectedMinute = t.split(":")[1];
    }
</script>

<div class="list">
    <h1 class="heading">To-Do List</h1>
    <div class="input-row">
        <input
            type="text"
            bind:value={newTaskcontent}
            placeholder="Enter task name..."
        />
        <div class="time-select">
            <select bind:value={selectedHour}>
                {#each Array(24) as _, h}
                    <option value={h < 10 ? `0${h}` : `${h}`}>{h < 10 ? `0${h}` : h}</option>
                {/each}
            </select>
            :
            <select bind:value={selectedMinute}>
                {#each Array(60) as _, m}
                    <option value={m < 10 ? `0${m}` : `${m}`}>{m < 10 ? `0${m}` : m}</option>
                {/each}
            </select>
        </div>
        <div class="buttons">
        <button class="add" on:click={handleAddTask}>Add Task</button>
        <button class="clear" on:click={clearTasks}>Clear All Tasks</button>
        </div>
    </div>
    
    <ul>
        {#each $tasks as task,i}
            <li>{task.date} {task.time} {task.content} <button class="remove" on:click={()=>removeTask(i)}>Remove Task</button></li>
        {/each}
    </ul>
</div>

<style>
    .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, #cdb4db, #ffc8dd);
        color: #1f1f1f;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;
        margin: 20px;
    }
    .heading{
        text-decoration: underline;
        font-size: 4rem;
        margin-bottom: 2vh;
    }

     .input-row {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
    .input-row input {
        padding: 8px;
        font-size: 1.2rem;
        border-radius: 5px;
        border: 3px solid #fff;
        color: #333;
    }
    .time-select {
        display: flex;
        align-items: center;
        gap: 0.3em;
    }
    .time-select select {
        padding: 6px;
        font-size: 1.1rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        background: #fff;
        color: #333;
    }
    .buttons{
        display: flex;
        gap: 5vw;
        margin-bottom: 10px;
        font-size: 1.5rem;
    }
    button{
        background-color: #9b5de5;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 1vh 2vw;
        cursor: pointer;
        font-weight: 700;
    }
    button:hover{
        background-color: #7b2cbf;
    }
    ul{
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    li{
        background-color: rgba(255, 255, 255, 0.1);
        margin: 5px 0;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 1.5rem;
        width: fit-content;
        text-align: left;
    }
    @media (max-width: 768px) {
        .list{
            margin: 10px;
            padding: 5px 10px;
            flex-direction: column;
        }
        .heading{
            font-size: 2.5rem;
            margin-bottom: 1vh;
        }
        .input-row input {
            font-size: 1rem;
            padding: 6px;
        }
        .time-select select {
            font-size: 1rem;
            padding: 4px;
        }
        .buttons{
            gap: 3vw;
            margin-bottom: 5px;
            font-size: 1rem;
        }
        button{
            padding: 0.5vh 1vw;
            font-size: 1rem;
        }
        li{
            font-size: 1rem;
            padding: 3px 6px;
        }
    }
</style>