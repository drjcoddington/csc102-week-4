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
    alert("func")
    mySound = new sound("sounds for class/wind.mp3") // this plays the sound with the buttons to start and stop//
    mySound.play();
}
function stop()
{
    window.location.reload()//this stops the sound and once started again it will start over// 
}