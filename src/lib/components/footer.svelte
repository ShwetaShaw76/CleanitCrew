<script>

</script>

<footer>
    <article>Made by Shweta for Clutter(Hackclub)</article>
    <aside>See More of my projects on my github page --</aside>
    <ul>
        <li><a href="https://github.com/ShwetaShaw76"><img src="https://icons.iconarchive.com/icons/bokehlicia/captiva/256/web-github-icon.png" alt="github"></a></li>
    </ul>
</footer>

<style>
    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px 20px;
        margin-top: 3vh;
        background: linear-gradient(to right, #fbb1d9, #caa0ff);
        animation: back 10s infinite;
        text-align: center;
        color: white;
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 700;
        width: 100%;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.5);
        bottom: 0;
        left: 0;
    }
    @keyframes back{
        0%{background: linear-gradient(to right, #fbb1d9, #caa0ff);}
        20%{background: linear-gradient(to right, #caa0ff, #fbb1d9);}
        40%{background: linear-gradient(to right, #fbb1d9, #caa0ff);}
        60%{background: linear-gradient(to right, #caa0ff, #fbb1d9);}
        80%{background: linear-gradient(to right, #fbb1d9, #caa0ff);}
        100%{background: linear-gradient(to right, #caa0ff, #fbb1d9);}
    }
    article{
        font-size: 3rem;
    }
    aside{
        font-size: 1.5rem;
        margin-top: 10px;
    }
    ul li a img{
        width: 4vw;
    }
    @media (max-width: 768px) {
        article{
            font-size: 2rem;
        }
        aside{
            font-size: 1rem;
        }
        ul li a img{
            width: 14vw;
        }
    }
</style>