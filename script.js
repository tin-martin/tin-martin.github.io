window.onload = function(){
}

function minToSec(min){
  return min*60;
}

//settings motherfucker
var longBreakInterval = 4;

var pomoSec = minToSec(30);
var shortSec = minToSec(5);
var longSec = minToSec(15);
var time = pomoSec; // in seconds 
var Interval;

var currentMode = null;
var count = 0;



function beautify(time){
  minutes = Math.floor(time/60);
  seconds = (time % 60)
  if(seconds < 10){
    return minutes.toString() + " " + "<span style='font-size:163px'>" + "0" + seconds.toString() + "</span>";
  }
  return minutes.toString() + " " + "<span style='font-size:163px'>" + seconds.toString() + "</span>";
}


started = false;
var n = document.getElementById("next");
n.style.opacity = 0;

function start(){
    var icon = document.getElementById("play-pause");
    if(!started){
        n.style.opacity = 100;
        clearInterval(Interval);
        Interval = setInterval(updateTimer, 1000);
        started = true;
        icon.src = "/images/pause.svg";
    }else{
        n.style.opacity = 0;
        clearInterval(Interval);
        started = false;
        icon.src = "/images/play.svg";
    }
  
}

pomo();

function pomo(){
    if(currentMode == "pomo"){
        return;
    }
    var status = document.getElementById("inner-statusBar");
    status.style.width = 0;
    currentMode = "pomo";
    started = true;
    start();
  clearInterval(Interval);
  document.getElementById("pomo").style.backgroundColor = '#DB3333';
  document.getElementById("long").style.backgroundColor = '#443483';
  document.getElementById("short").style.backgroundColor = '#443483';
  time = pomoSec;
   document.getElementById("display").innerHTML = beautify(time);
}

function short(){
    if(currentMode == "short break"){
        return;
    }
    var status = document.getElementById("inner-statusBar");
    status.style.width = 0;
    currentMode = "short break";
    started = true;
    start();
  clearInterval(Interval);
  document.getElementById("short").style.backgroundColor = '#DB3333';
  document.getElementById("long").style.backgroundColor = '#443483';
  document.getElementById("pomo").style.backgroundColor = '#443483';
  time = shortSec;
  document.getElementById("display").innerHTML = beautify(time);
}

function long(){
    if(currentMode == "long break"){
        return;
    }
    var status = document.getElementById("inner-statusBar");
    status.style.width = 0;
    currentMode = "long break";
 started = true;
    start();
   clearInterval(Interval);
  document.getElementById("long").style.backgroundColor = '#DB3333';
  document.getElementById("short").style.backgroundColor = '#443483';
  document.getElementById("pomo").style.backgroundColor = '#443483';
  time = longSec;
  count = 0;
  document.getElementById("display").innerHTML = beautify(time);
}

function updateTimer(){
  time -= 1;
 
  document.getElementById("display").innerHTML = beautify(time);
  //done motherfricker
  var status = document.getElementById("inner-statusBar");
  var width = document.getElementById("statusBar").style.width;
  if(currentMode == "pomo"){

    status.style.width = (1-time/pomoSec)*100+"%";

  }else if(currentMode == "short break"){
    console.log((time/shortSec));
    status.style.width = (1-time/shortSec)*100+"%";
  }else if(currentMode == "long break"){
    status.style.width = (1-time/longSec)*100+"%";
  }

  if(time == 0){
    next();
  }
}

function next(){
  if(currentMode == "pomo"){
    
    count += 1;
    if(count == longBreakInterval){
        currentMode = "long break";
      //long break
      long();
    }else{
      //short break
      currentMode = "short break";
      short();
    }
  }else{
    //pomo
    pomo();
  }
}


hidden = false;
function hide(){
    var display = document.getElementById("display");
    var hide_show = document.getElementById("hide-show");

    if(!hidden){
        display.style.opacity = 0;
        hidden = true;
        hide_show.src = "/images/eye.svg";
    }else{
        display.style.opacity = 100;
        hidden = false;
        hide_show.src = "/images/invisible.svg";
    }
}

function settings(){
  
    alert("FUCK U");
}

