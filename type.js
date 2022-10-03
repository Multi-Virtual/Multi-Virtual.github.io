"use strict";
function log() {
    let testidk = localStorage.getItem("test2");
    fetch('https://mc-heads.net/minecraft/profile/' + testidk)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        let logs = (testidk);
        var profile = ('{' + '"Profile": {' + '"Username": ' + '"' + logs + '"' + ',' + '"Uuid": ' + '"' + data.id + '"' + '}' + '}');
        localStorage.setItem('profile', profile);
        console.log(localStorage.getItem('profile'));
    });
}
