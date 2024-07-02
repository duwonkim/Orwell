var song = {
    src: "Drops of Earth - Aakash Gandhi.mp3",
    title: "Drops of Earth - Aakash Gandhi"
};

var timerID = setInterval(doRotate, 700);

function doRotate() {
    var str = song.title;
    var firstChar = str.substr(0, 1);
    var remains = str.substr(1);
    str = remains + firstChar;
    document.getElementById('songtitle').textContent = str;
}

window.onload = function () {
    var audioPlayer = document.getElementById("player");
    var audioSource = document.getElementById('audioSource');

    audioSource.src = song.src;
    audioPlayer.load();
    audioPlayer.play();
}

function calculateTotal() {
    var total = 0;
    var quantityInputs = document.querySelectorAll("input[type=number]");

    quantityInputs.forEach(function (input) {
        var price = parseInt(input.dataset.price);
        var quantity = parseInt(input.value);

        if (quantity < 0) {
            quantity = 0;
            input.value = 0;
            alert('-1은 안됩니다.');
        }

        var itemTotal = price * quantity;
        total += itemTotal;

        document.getElementById(input.id.replace('_quantity', '') + '_price').innerText = itemTotal + '원';
    });

    document.getElementById('total').innerText = '총합: ' + total;
}

function resetInputs() {
    var quantityInputs = document.querySelectorAll("input[type=number]");

    quantityInputs.forEach(function (input) {
        input.value = 0;
    });

    calculateTotal();
}

function calculate() {
    calculateTotal();
}


function closeWindowAfterDelay() {
    if (confirm("창을 닫으시겠습니까?")) {
        setTimeout(function () {
            window.close();
        }, 1000);
    }
}
function validateForm() {
    var password1 = document.getElementById("user-pw1").value;
    var password2 = document.getElementById("user-pw2").value;

    if (password1 !== password2) {
        document.getElementById("password-match-error").style.display = "block";
        return false;
    }

    
    var username = document.getElementById("login-id").value;
    var password = document.getElementById("login-pw").value;

   
    if (username === "admin" && password === "1234") {
        window.location.href = "main.html"; 
        return false;
    } else if (username !== "admin" && password === "1234") {
        alert("아이디가 틀렸습니다.");
        return false;
    } else if (username === "admin" && password !== "1234") {
        alert("비밀번호가 틀렸습니다.");
        return false;
    } else {
        alert("아이디와 비밀번호가 모두 틀렸습니다.");
        return false;
    }
}

function redirectToJoinPage() {
    window.location.href = "webJoin.html"; 
}

function toggleMenu() {
    var menu = document.querySelector('.submenu');
    var menuItem = document.querySelector('.menu-item');
    menu.classList.toggle('active');
    menuItem.classList.toggle('active');
}