const options2 = JSON.parse(localStorage.getItem("session"));
mainName = options2.Default.Name;
title = options2.Default.Name;
navButton1 = options2.Nav.ButtonHome;
navButton2 = options2.Nav.ButtonStore;
navButton3 = options2.Nav.ButtonProjects;
idP1 = "p1";
idP2 = "p2";// Class needs to be the same
lock = options2.Box.Lock;
document.getElementById(idP1).innerHTML = `
<div>
    <nav class="nav">
        <ul id="navInject" class="navWrapper">
            <li><a class="navLinks" href="`+options2.Nav.Link1+`">`+navButton1+`</a></li>
            <li><a class="navLinks" href="`+options2.Nav.Link2+`">`+navButton2+`</a></li>
            <li><a class="navLinks" onclick="projects()">`+navButton3+`</a></li>
            <!--<div id="injector">
                <li><a onclick="settings()"><img id="settingsButton" style="width: 25px;border: solid 1px;border-radius: 10px;background: black;" src="./file/settings.png"></a></li>
            </div>-->
        </ul>
    </nav>
</div>
<div class="main">
    <p>`+mainName+`</p>
    <div class="seperator"></div>
</div>
<img onclick="logoClick()" class="mainImage" src="./file/multi.png" alt="Logo">
    `;
if (lock === true) {
    lock2 = "<!--";
    lock3 = "-->";
} else {
    lock2 = "";
    lock3 = "";
}
document.getElementById(idP2).innerHTML = `
`+lock2+`
<div style="margin-top: 100px;margin-left: 10px;margin-right: 10px;">
            <div style="display: flex;margin-bottom: 10px;">
                <div onclick="linkBox1()" class="box1">
                    <p class="boxText">Join a chilling Discord server.</p>
                    <img style="width: 100px;border-bottom: solid;border-radius: 10px/50px;background: linear-gradient(to bottom, #ffffff7a, #0000003b);" src="./file/logochill.png" alt="">
                    <p class="boxText" style="border: none;font-weight: normal;background: -webkit-linear-gradient(var(--desccolor1), var(--desccolor2));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Join The Chillout Hut's Discord server to chillout, relax and take it smooth.</p>
                </div>
                <div onclick="linkBox2()" class="box2">
                    <p class="boxText">Play a futuristic Minecraft server.</p>
                   <img style="width: 100px;border-bottom: solid;border-radius: 10px/50px;background: linear-gradient(to bottom, #ffffff7a, #0000003b);" src="./file/sunylogo.png" alt="">
                    <p class="boxText" style="border: none;font-weight: normal;background: -webkit-linear-gradient(var(--desccolor1), var(--desccolor2));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Join Sunylex a Minecaft server with all kinds of games factions, survival and 9 others.</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 10px;">
                <div style="margin-left: 0;margin-right: 5px;background: linear-gradient( rgb(193 183 183), rgba(0,0,0,.5) ), url(./file/Disc2.png);background-repeat: no-repeat;background-size: cover;" onclick="linkBox3()" class="box2">
                    <p class="boxText">Join the official Discord server.</p>
                    <img style="width: 100px;border-bottom: solid;border-radius: 10px/50px;background: linear-gradient(to bottom, #ffffff7a, #0000003b);" src="./file/Disc.png" alt="">
                    <p class="boxText" style="border: none;font-weight: normal;background: -webkit-linear-gradient(var(--desccolor1), var(--desccolor2));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Join the Multi-Virtual HUB Discord that is the official Discord where all the community is.</p>
                </div>
                <div style="margin-left: 0;margin-right: 5px;background: linear-gradient( rgb(193 183 183), rgba(0,0,0,.5) ), url(./file/RolePlayYou.png);background-repeat: no-repeat;background-size: cover;" onclick="javascript:alert('Ip: RolePlayYou.minehut.gg');" class="box2">
                    <p class="boxText">Play a new Survival Role Play Minecraft server.</p>
                    <img style="width: 100px;border-bottom: solid;border-radius: 10px/50px;background: linear-gradient(to bottom, #ffffff7a, #0000003b);" src="./file/rpy.png" alt="RolePlayYouLogo">
                    <p class="boxText" style="border: none;font-weight: normal;background: -webkit-linear-gradient(var(--desccolor1), var(--desccolor2));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Join a roleplay Minecraft server where you will make you life in survival and with an economy.</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 10px;">
                <div style="margin-left: 0;margin-left: -5px;background: linear-gradient( rgb(193 183 183), rgba(0,0,0,.5) ), url(./file/store.png);background-repeat: no-repeat;background-size: cover;" onclick="linkBox4()" class="box2">
                    <p class="boxText">Check the official store of Multi-Virtual.</p>
                    <img style="width: 100px;border-bottom: solid;border-radius: 10px/50px;background: linear-gradient(to bottom, #ffffff7a, #0000003b);" src="./file/multi.png" alt="">
                    <p class="boxText" style="border: none;font-weight: normal;background: -webkit-linear-gradient(var(--desccolor1), var(--desccolor2));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">The official store of Multi-Virtual. Here you will find all related stores like Sunylex, RolePlayYou and other things to buy.</p>
                </div>
            </div>
        </div>`+lock3+`
`;
document.title = title;
document.querySelector(':root').style = ('--MaxWidth', options2.Default.MaxWidth);
document.querySelector(':root').style = ('--MinWidth', options2.Default.MinWidth);
function linkBox1() {
    location.href = options2.Box.Link1;
}
function linkBox2() {
    location.href = options2.Box.Link2;
}
function linkBox3() {
    location.href = options2.Box.Link3;
}
function linkBox4() {
    location.href = options2.Box.Link4;
}
function projects() {
    var element = document.querySelector("."+idP2);
    element.scrollIntoView({ behavior: 'smooth' });
}
function logoClick() {
    location.reload();
}
var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

div = document.createElement("div");
div.style.position = "absolute";
div.style.right = "0px";
div.style.top = "50px";
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "url(./file/multi.png) no-repeat";
div.style.cursor = "grab";
div.onmousedown = function() {grabbing()};
div.onmouseup = function() {grab()};
//function grabbing() {
//    div.style.cursor = "grabbing";
//}
//function grab() {
//    div.style.cursor = "grab";
//}
//
//document.body.appendChild(div);
//
//div.addEventListener('mousedown', function(e) {
//    isDown = true;
//    offset = [
//        div.offsetLeft - e.clientX,
//        div.offsetTop - e.clientY
//    ];
//}, true);
//
//document.addEventListener('mouseup', function() {
//    isDown = false;
//}, true);
//
//document.addEventListener('mousemove', function(event) {
//    event.preventDefault();
//    if (isDown) {
//        mousePosition = {
//
//             x : event.clientX,
//             y : event.clientY
// 
//         };
//         div.style.left = (mousePosition.x + offset[0]) + 'px';
//         div.style.top  = (mousePosition.y + offset[1]) + 'px';
//     }
// }, true);
// div.onmousedown = function() {learnMore()};
//function learnMore() {
//    div.innerHTML = "<div style='box-shadow: black 0px 0px 10px;border: solid 1px;background: linear-gradient(to bottom, #c7c7c7, #cdc9c9);border-radius: 10px;margin-top: -10px;'><p style='text-align: center;background: linear-gradient(to bottom, #1b00ff, #10759d);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-weight: bold;'>Multi-Virtual is a company made by Sparky2you and Coolboy67YT</p></div>";
//}
//function removePopup() {
//    div.remove();
//}
//function settings() {
//    document.getElementById("injector").innerHTML = "<button onclick='removePopup()'>Remove window</button>";
//}
function saveTest() {
    localStorage.setItem('saveTest', 'Test');
}
//function saveTest2() {
//    var savedTest = localStorage.getItem('saveTest');
//    alert(savedTest);
//}
function mail() {
    var subValue = document.getElementById('sub').value;
    if (subValue !== "") {
        location.href = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=Multi.Virtual.Companie@gmail.com&su='+subValue+'&body=','Message';
    } else {
        alert("Please insert something.");
    }
}
function testValueSubmit() {
    let testValue2 = document.getElementById("testValue").value;
    let test = localStorage.setItem("test2", testValue2);
    let test3 = localStorage.getItem("test2");
    let username = test3;
    if (username !== "") {
        document.getElementById('eui').innerHTML = "<img src='https://mc-heads.net/combo/"+username+"'>";
        document.getElementById('eui').innerHTML = "<p>Succesfully logged-in as:<span style='font-weight: bold;'> "+username+"</span>  <img style='margin-bottom: -5px;' width='25px' src='https://mc-heads.net/avatar/"+username+"'></p>";
    } else {
        document.getElementById('eui').innerHTML = "<p style='color: red;'>Please insert something!</p>";
    }
}
function testing() {
    location.href = "http://localhost:8080/";
}