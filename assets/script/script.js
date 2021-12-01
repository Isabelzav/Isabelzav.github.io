function toggleShow(popupId) {
    document.getElementById(popupId).classList.toggle("active");
}

function switchToNight(){
    // similar behavior as an HTTP redirect
    window.location.replace("daytime.html");
    //or
    // similar behavior as clicking on a link
    window.location.href = "nighttime.html";
 }; 

 function switchToDay(){
    // similar behavior as an HTTP redirect
    window.location.replace("nighttime.html");
    //or
    // similar behavior as clicking on a link
    window.location.href = "daytime.html";
 }; 