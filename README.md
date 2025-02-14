<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save the Text to a File</title>
       
    <!-- Style CSS -->
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" type="text/css" href="css/mobile.css" media="screen and (max-width : 568px)">
    <script type="text/javascript" src="js/mobile.js"></script>

    <style>
        body, html {
            height: 100%;
            margin: 2;
        }

        .bg {
            /* The image used */
            background-image: url("bg.png");

            /* Full height */
            height: 120%; 

            /* Center and scale the image nicely */
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .container {
            position: relative;
            text-align: center;
            padding: 20px;
        }

        .logo {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 100px; /* Adjust as needed */
        }
    </style>
</head>
            
<body class="bg"> <!-- Apply the background class to the body -->

    <div class="container">
        
        <h1 style="color:whitesmoke;"> Save the Text to a File </h1>
        <textarea id="textInput" placeholder="Enter your text here..."></textarea>
        <div class="controls">
            <label for="fileType">Select File Type:</label>
            <select id="fileType">
                <option value="txt">Text File (.txt)</option>
                <option value="html">HTML File (.html)</option>
                <option value="md">Markdown File (.md)</option>
            </select>
            <button id="saveBtn">Save to File</button>
        </div>
    </div>

    <script src="./script.js"></script>
<footer class="footer">
    <p>&copy; 2025 Ricky John. All rights reserved.</p>
</footer>

</body>
