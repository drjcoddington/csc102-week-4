
var change = 100;
var intervalidID = 0;

function intervalStart()
{
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    var image = document.getElementById("imgMeme");
    intervalidID = setInterval(function() 
    {
       // image.style.left = change + "px";
       image.style.top = change + "px";
    
        document.getElementById("XandY").innerHTML = "x = " + image.style.left + " y = " + image.style.top;

        change +=5;  // change = change + 5;


    },500);  // 500 ms delay until repeat

}

function intervalStop()
{
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(intervalidID);
}


