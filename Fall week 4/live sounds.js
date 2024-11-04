function sound(src)
{// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}

function play()
{
    mySound = new sound("sounds for class/wind.mp3");
    mySound.play();
}
function stop()
{
    window.location.reload();
}