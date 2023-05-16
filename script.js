function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
    
}
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function dateremain(){
let date1 = new Date();
let date3 = new Date("December 15 2023 09:30")
var diff = () => date3 - date1;
document.getElementById('txt').innerHTML =( Math.floor(diff() / (24 * 60 * 60 * 1000))+" DAYS TO GO");
  }
