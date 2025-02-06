//variable placed above functions are global - can be used by any function in this file

var intervalID = 0;
var change = 100;

function intervalStart()
{
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    var image = document.getElementById("imgDog");

    intervalID = setInterval(function()
    {
        image.style.top = change + "px";
        image.style.left = change + "px";
        
        change +=5;  //change = change + 5

        document.getElementById("XandY").innerHTML = "x = " + image.style.left + " y = " + image.style.top;
        // runs repeatedly at the specified interval
    }, 100);  // 500 = # of milliseconds
}


function intervalStop()
{
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    
    clearInterval(intervalID);

    

}