<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My JavaScript Projects</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
        }
        .container {
            width: 80%;
            margin: 0 auto;
        }
        .info
        {
            text-align: center;
        }
        .projects {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 2rem;
        }
        .project-card {
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 30%;
            margin-bottom: 2rem;
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.2s;
        }
        .project-card:hover {
            transform: scale(1.05);
        }
        .project-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .project-card h3 {
            margin: 1rem;
        }
        .project-card p {
            margin: 0 1rem 1rem;
            color: #666;
        }
        .project-card a {
            display: block;
            margin: 1rem;
            text-align: center;
            text-decoration: none;
            color: #333;
            background-color: #ddd;
            padding: 0.5rem;
            border-radius: 4px;
        }
        .project-card a:hover {
            background-color: #ccc;
        }
    </style>
</head>
<body>
    <header>
        <h1>My JavaScript Projects</h1>
    </header>
    <div class="container">
        <p class="info">Here are some of my projects done in JavaScript.</p>
        <section class="projects">
            <div class="project-card">
                <img src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg" alt="Project 1">
                <h3>To-Do List</h3>
                <p>Short demonstration of ToDo page where you can save and delete data.</p>
                <a href="https://sujanpuri.github.io/To-Do/">View Project</a>
            </div>
            <div class="project-card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg" alt="Project 2">
                <h3>Rock Paper Scissor</h3>
                <p>Rock Paper Scissor is a game and here you can play it with the computer, I hope you to win this one.</p>
                <a href="https://sujanpuri.github.io/RPS/">View Project</a>
            </div>
            <div class="project-card">
                <img src="https://lh3.googleusercontent.com/iauWBw_W-wH3LErWfPhlbctgbOpM-mAYndTafgQ_1cISgXjXgPn6h5TgZP_OCnPncWSH8fYzHUaQ0V92-qdwq3SgUg=s1280-w1280-h800" alt="Project 3">
                <h3>Clock</h3>
                <p>This project shows the demonstration of Digital and Analog Clock.</p>
                <a href="https://sujanpuri.github.io/Clock/">View Project</a>
            </div>
            <div class="project-card">
                <img src="Scene.jpeg" alt="Project 3">
                <h3>Current Weather</h3>
                <p>This project shows the demonstration of current Weather of different Cities.</p>
                <a href="https://sujanpuri.github.io/Current-Weather/">View Project</a>
            </div>
        </section>
    </div>
</body>
</html>
