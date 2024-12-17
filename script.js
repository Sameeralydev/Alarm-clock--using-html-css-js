function currentTime(){
    var date = new Date();
    var now = date.toLocaleString('en-US', {hour12: false});
    document.getElementById('currentTime').innerHTML = now;

}
setInterval(currentTime, 1);

var alarmSound = new Audio("assets/music.wav");

function setAlarm(){
    var alarmTime = document.getElementById('alarmTime').value;
    var now = new Date();
    var alarm = new Date(now.toDateString() + " " + alarmTime);

    var timeRemaining = alarm - now;

    setTimeout(playAlarm, timeRemaining);

    document.getElementById('alarmTime').disabled = true;
}

function playAlarm(){
    alarmSound.play();
    document.getElementById('alarmTime').disabled = false;

}

let x =20;
let y = x;

y= y+1;

let a = ['value1', 'value2'];
let b = [...a];

b.pop();

console.log(a);
console.log(b);

