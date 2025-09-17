<script>
    import Header from "$lib/components/Header.svelte";
    import LoginPanel from "$lib/components/loginPanel.svelte";
</script>


    
<div class="body">
<Header/>

<div class="panel">
<h1>ChoreMate</h1>
<h3>Manage Your Workload</h3>
<LoginPanel/>
</div>
</div>

<style>
    
    .body{
        background: linear-gradient(to right, darkviolet, pink);
        height: 100vh;
    }
    .panel{
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    h1{
        color: white;
        font-weight: 800;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 5rem;
        margin-bottom: 0px;
    }
    h3{
        color: white;
        font-weight: 400;
        font-size: 2rem;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

</style>