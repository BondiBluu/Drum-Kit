
//detecting button presses

//select all the buttons and add an event listener to each button
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    //this.innerHTML is the innerHTML of the button that was clicked
    var buttonInnerHTML = this.innerHTML;

    //make a sound based on the innerHTML of the button that was clicked
    makeSound(buttonInnerHTML);

    //add animation to the button that was clicked
    buttonAnim(buttonInnerHTML);
         });

    
}

//detecting keyboard presses

//add an event listener to the whole document. 
document.addEventListener("keydown", function(event){
    
    //make a sound based on the key that was pressed
    makeSound(event.key); 

    //add animation to the button that was pressed
    buttonAnim(event.key);

});

//function that makes a sound based on the key that was pressed
function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: 
            console.log(key);

        }
}

//function that adds animation to the button that was clicked

function buttonAnim(currentKey){

    //the button who's style we're going to change
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //making a delay of 100ms before removing the animation
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
