var x = document.getElementById("navbar");
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
document.getElementById("arrowicon").style.transform = "rotate(90deg)";
}

function togglenavbar() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        if (x.className == "navbar") {
            document.getElementById("navbar").className = "navbarex";
            document.getElementById("arrowicon").style.transform = "rotate(270deg)";
        }
        else if (x.className == "navbarex") {
            document.getElementById("navbar").className = "navbar";
            document.getElementById("arrowicon").style.transform = "rotate(90deg)";
        }
    }
    else if (x.className == "navbar") {
        document.getElementById("navbar").className = "navbarex";
        document.getElementById("arrowicon").style.transform = "rotate(180deg)";
    }
    else if (x.className == "navbarex") {
        document.getElementById("navbar").className = "navbar";
        document.getElementById("arrowicon").style.transform = "rotate(0deg)";
    }
    
}

