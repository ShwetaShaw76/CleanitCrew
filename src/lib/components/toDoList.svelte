<script>
// @ts-nocheck
    import { tasks, addTask } from '../../stores';
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let storedTasks = localStorage.getItem('tasks');
</script>

<div class="list">
    <h1 class="heading">To-Do List</h1>
    <div class="buttons">
        <button class="add" onclick={addTask}>Add Task</button>
        <button class="clear" >Clear All Tasks</button>
        <button class="remove">Remove task</button>
    </div>
    <ul>
        
            {#each $tasks as task}
               <li>{task.date} {task.time} {task.content}</li>
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
        border: 2px solid darkviolet;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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