window.onscroll = function() {
    /*
    if (window.pageYOffset >= 0.8*screen.availHeight){
       document.getElementById("nb").style.top = "0em";
    }else{
       document.getElementById("nb").style.top = "-4em";
    }
*/
    if (window.pageYOffset >= 0.15*screen.availHeight){
        document.getElementById("statement").style.right = "52%";
        document.getElementById("statement").style.opacity = 1;
        document.getElementById("vision").style.left = "52%";
        document.getElementById("vision").style.opacity = 1;
        document.getElementById("line").style.opacity = 1;
        document.getElementById("line").style.height = "18vw";
    }else{
        document.getElementById("statement").style.right = "40%";
        document.getElementById("statement").style.opacity = 0;
        document.getElementById("vision").style.left = "40%";
        document.getElementById("vision").style.opacity = 0;
        document.getElementById("line").style.opacity = 0;
        document.getElementById("line").style.height = "0vw";
    }
}

