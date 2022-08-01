// Q1

$('#sec1Btn').click(function () {
    let cartonaa = `<div class="form-group mt-1 d-flex w-75 mx-auto justify-content-center">
    <div class=" bg-light p-2 w-75 text-left rounded text-muted">${$('#sec1Input').val()}</div>
    <button class="btn btn-danger deleteBtn" onmousemove="deleteItem()">x</button>
  </div>`
    $('#rowInput').append(cartonaa);
});

function deleteItem() {
    $(".deleteBtn").click(function (e) {
        $(e.target).parent().remove();
    });
}

// -------------------------------------------------------------------------------------------------------
// Q2

let contQ2;
let audio = document.getElementsByTagName("audio")[0];
audio.pause();
$('#hustlin').hover(function () {
    audio.play();
    contQ2 = setInterval(() => {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        $("#q2").css("backgroundColor", `rgb(${r},${g},${b})`)
    }, 300)
}, function () {
    clearInterval(contQ2)
    $('#q2').css('backgroundColor', `white`)
    audio.pause();
});

// -------------------------------------------------------------------------------------------------------
// Q3

let myDate = new Date("Feb 16, 2021 23:59:59").getTime(); //time b ms
let contQ3 = setInterval(() => {
    let now = new Date().getTime();
    let distance = myDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $("#day").text(days);
    $("#hour").text(hours);
    $("#minute").text(minutes);
    $("#second").text(seconds);
    if (distance == 0) {
        clearInterval(contQ3)
        document.getElementById("sec3Cont").innerHTML = "<h2>EXPIRED</h2>";
    }
}, 100)

// -------------------------------------------------------------------------------------------------------
// Q4

$('#colors').hover(function () {
    $('#R-fill').attr('fill', '#000');
    $('#G-fill').attr('fill', '#000');
    $('#B-fill').attr('fill', '#000');

}, function () {
    $('#R-fill').attr('fill', '#f00');
    $('#G-fill').attr('fill', '#080');
    $('#B-fill').attr('fill', '#00f');
});


$('#colorR').hover(function () {
    $('#q4').css('backgroundColor', 'red')

}, function () {
    $('#q4').css('backgroundColor', 'white')
});

$('#colorG').hover(function () {
    $('#q4').css('backgroundColor', 'green')

}, function () {
    $('#q4').css('backgroundColor', 'white')
});

$('#colorB').hover(function () {
    $('#q4').css('backgroundColor', 'blue')

}, function () {
    $('#q4').css('backgroundColor', 'white')
});

// -------------------------------------------------------------------------------------------------------
// Q5

let inputName = document.getElementById('inputName')
let AlertName = document.getElementById('AlertName')

$(inputName).keyup(function () {
    let regex = /^[A-Z][a-z]{2,}$/
    if (regex.test(inputName.value) == true) {
        AlertName.classList.replace('d-block', 'd-none');
        inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
    } else {
        AlertName.classList.replace('d-none', 'd-block')
        inputName.classList.remove("is-valid");
        inputName.classList.add("is-invalid");
    }
});

let inputEmail = document.getElementById('inputEmail')
let AlertEmail = document.getElementById('AlertEmail')

$(inputEmail).keyup(function () {
    let regex = /^(\w){4,}(\@)(\w){2,}(\.com)$/
    if (regex.test(inputEmail.value) == true) {
        AlertEmail.classList.replace('d-block', 'd-none');
        inputEmail.classList.add("is-valid");
        inputEmail.classList.remove("is-invalid");
    } else {
        AlertEmail.classList.replace('d-none', 'd-block')
        inputEmail.classList.remove("is-valid");
        inputEmail.classList.add("is-invalid");
    }
});

let inputPhone = document.getElementById('inputPhone')
let AlertPhone = document.getElementById('AlertPhone')

$(inputPhone).keyup(function () {
    let regex = /^(002|\+2)?(01)[0125]\d{8}$/
    if (regex.test(inputPhone.value) == true) {
        AlertPhone.classList.replace('d-block', 'd-none');
        inputPhone.classList.add("is-valid");
        inputPhone.classList.remove("is-invalid");
    } else {
        AlertPhone.classList.replace('d-none', 'd-block')
        inputPhone.classList.remove("is-valid");
        inputPhone.classList.add("is-invalid");
    }
});