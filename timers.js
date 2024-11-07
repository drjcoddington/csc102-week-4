function timer()
{
    document.getElementById("timerMsg").innerHTML = "Timer started, please wait";
    setTimeout(() => 
        {
            document.getElementById("timerMsg").innerHTML ="2 seconds has passed";
        },2000);
}
var sec = 0;// global variable (outside of a function, can be used by any function)
function clock()
{
sec++;  //sec = sec + 1;
document.getElementById("intervalMsg").innerHTML = sec;
setInterval(clock,1000);
}
