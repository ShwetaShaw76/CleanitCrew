<script>
    import { browser } from '$app/environment';

// @ts-nocheck
    import { tasks, addTask , clearTasks, removeTask } from '../../stores';
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let newTaskcontent = '';
    let tasktime = time;

    function handleAddTask() {
        if (newTaskcontent.trim() === '') return; 
        const now = new Date();
        const newTask = {
            date: now.toLocaleDateString(),
            time: tasktime,
            content: newTaskcontent
        };
        addTask(newTask);
        newTaskcontent = ''; 
        tasktime = time;
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
        <input type="hours" bind:value={tasktime} placeholder="Enter hours:minutes"/>
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
        background: linear-gradient(to bottom, black, grey);
        color: white;
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
        border: 1px solid #ccc;
    }
    .buttons{
        display: flex;
        gap: 5vw;
        margin-bottom: 10px;
        font-size: 1.5rem;
    }
    button{
        background-color: darkviolet;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 1vh 2vw;
        cursor: pointer;
        font-weight: 700;
    }
    button:hover{
        background-color: rebeccapurple;
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
</style>