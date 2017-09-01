

function enterRoom(roomName) {

    var roomNum = document.getElementById(roomName)

    roomNum.setAttribute("visible", "true")

    var position = roomNum.getAttribute("position")
    console.log(position)
    //making room appear when click on button
    
    if (roomName == 'first') {
        var iD = document.getElementById("hello")
        iD.parentNode.removeChild(iD)
        var circle = document.getElementById("circle")
        circle.parentNode.removeChild(circle)
        var welc = document.getElementById("intro")
        welc.parentNode.removeChild(welc)
        var welc2 = document.getElementById("intro2")
        welc2.parentNode.removeChild(welc2)
        //so when room is visible, have the text and circle dissapeer by grabbing the ID and making it not visible
    }

    // This changes the position of the camera to be inside of the room the user is currently in
    var camera = document.getElementById('camera')
    camera.setAttribute("position", `0 ${position['y']} 0`)

    // setTimeout(function() {
    //     var intro = document.getElementById("intro")
    //     intro.setAttribute("position", "-1.5 1 -2")

    // }, 40000);
    
    // setTimeout(function() {
    //     var directions = document.getElementById("direct")
    //     directions.setAttribute("position", "-5 2 13")
    // setTimeout(function() {
    //     var directions2 = document.getElementById("direct2")
    //     directions2.setAttribute("position", "-5 2 13")
    // }, 60000);

}


function textVisible(textIdentity, nextIdentity){
    var firstText = document.getElementById(textIdentity)
    firstText.setAttribute("visible", "false")
    
    var text = document.getElementById(nextIdentity)
    text.setAttribute("visible", "true")
    
}

function textVisible2(textIdentity, nextIdentity){
    var firstText = document.getElementById(textIdentity)
    firstText.setAttribute("visible", "false")
    
    var text = document.getElementById(nextIdentity)
    text.setAttribute("visible", "true")
    
    var cup= document.getElementById("cupcake")
    cup.setAttribute("visible", "true")
    
}

//DO NOT USE UNLESS FOR THE LAST ROOM
function makeVisible(textIdentity){
    var text = document.getElementById(textIdentity)
    text.setAttribute("visible", "true")
    
    
    
    var camera = document.getElementById("camera")
    camera.emit("move")
    console.log("camera move")
    
}

function arthurText(){ 
    console.log("arthur")
 var arthurclue= document.getElementById("hint2")
 arthurclue.setAttribute("visible","true")
//  arthurclue.setAttribute("position","14 12 4.231")
} 




