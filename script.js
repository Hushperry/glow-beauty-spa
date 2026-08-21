* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #fff7f9;
    color: #333;
    line-height: 1.6;
}

header {
    background: linear-gradient(135deg, #d96c9b, #8e4a72);
    color: white;
    text-align: center;
    padding: 50px 20px;
}

header h1 {
    font-size: 38px;
    margin-bottom: 10px;
}

header p {
    font-size: 18px;
}

nav {
    background-color: #ffffff;
    padding: 18px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

nav a {
    color: #8e4a72;
    text-decoration: none;
    font-weight: bold;
    margin: 0 12px;
}

nav a:hover {
    color: #d96c9b;
}

section {
    padding: 60px 20px;
    text-align: center;
    max-width: 1000px;
    margin: auto;
}

section h2 {
    color: #8e4a72;
    font-size: 30px;
    margin-bottom: 20px;
}

section p {
    max-width: 700px;
    margin: 10px auto;
}

section div {
    background-color: white;
    padding: 25px;
    margin: 20px auto;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    max-width: 700px;
}

section div h3 {
    color: #d96c9b;
    margin-bottom: 10px;
}

button {
    background-color: #d96c9b;
    color: white;
    border: none;
    padding: 14px 25px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 15px;
}

button:hover {
    background-color: #8e4a72;
}

footer {
    background-color: #8e4a72;
    color: white;
    text-align: center;
    padding: 25px;
    margin-top: 30px;
}

@media (max-width: 600px) {
    header h1 {
        font-size: 30px;
    }

    nav a {
        display: inline-block;
        margin: 6px;
    }
}
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Thank you for choosing Glow Beauty & Spa! We will contact you soon.");
    });
});
