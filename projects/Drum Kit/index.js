/* document.querySelectorAll(".drum").forEach(addEventListener("click", function(){
    alert("I've got clicked")
}))
this one is slower it seems than classic for loop with i and i++
*/

function makeSound(char){
    var sound = "";
    switch(char){
        case "w":
            sound= "tom-1.mp3"
            break
        case "a":
            sound="tom-2.mp3"
            break
        case "s":
            sound="tom-3.mp3"
            break
        case "d":
            sound = "tom-4.mp3"
            break
        case "j":
            sound = "snare.mp3"
            break
        case "k":
            sound = "crash.mp3"
            break
        case "l":
            sound="kick-bass.mp3"
            break
        default:
            console.log(char)
    }
    var audio = new Audio(`./sounds/${sound}`)
    audio.play()
}




function buttonAnimation (key){
    document.querySelector("."+key).classList.toggle("pressed")
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")
    }, 50)
}

for (item of document.querySelectorAll(".drum")){
    item.addEventListener("click", function () {
    makeSound(this.innerHTML)
    buttonAnimation(this.innerHTML)
    
    } 
        )
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)

} 
)