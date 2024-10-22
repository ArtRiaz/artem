<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Human Verification</title>
    <style>
        body {
            background-color: black;
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        h1 {
            font-size: 2em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.2em;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>
    <div class="container">
        <h1>Human Verification</h1>
        <p>Verify below to be granted entry</p>
        <button id="verifyButton">Click here</button>
    </div>

    <script>
        const button = document.getElementById('verifyButton');

        button.addEventListener('click', () => {
            // Логика для верификации
            // Например, открытие верификационной ссылки или логика подтверждения.
            Telegram.WebApp.showAlert("Verification in progress...");
        });

        // Инициализация Telegram Web App
        Telegram.WebApp.ready();
    </script>
</body>
</html>


