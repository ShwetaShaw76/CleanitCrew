<script>

</script>

<form action="">
    <fieldset>
        <legend>Login</legend>
        <p>Username</p>
        <input type="text" placeholder="Username...">
        <p>Password</p>
        <input type="password" placeholder="Password...">
        <button>Login</button>
        <a href="https://www.google.com/">New User?</a>
    </fieldset>
</form>


<style>
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        width: fit-content;
        margin-top: 5vh;
        padding: 2vh 2vw;
        border-radius: 15px;
    }
    
    fieldset{
        display: flex;
        justify-content: center;
        
        flex-direction: column;
    }
    legend{
        width: 100%;
        font-size: 2.5rem;
        color: purple;
        text-align: center;
    }
    p{
        font-size: 1.5rem;
        color: grey;
        padding: 1vh 0;
    }
    input{
        border: 2px solid lightgrey;
        padding: 1vh 1vw;
        border-radius: 10px;
        font-size: 1rem;
    }
    button{
        padding: 1vh 3vw;
        color: white;
        background: purple;
        font-size: 2rem;
        border-radius: 15px;
        font-weight: 700;
        margin: 1.5vh 0;
        transition: all 0.5s ease-in-out;
    }
    button:hover{
        transform: scale(1.05);
        background: darkviolet;

    }
    a{
        width: 100%;
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
        color: purple;
    }
    a:hover{
        text-decoration: underline;
        color: darkviolet;
    }

</style>