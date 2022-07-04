function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleSearch() {
    document.getElementById("search").style.display = "block";
    document.getElementById("submit").style.height = "40px";
    document.getElementById("submit").style.background = "grey";
    document.getElementById("search").style.marginTop = ".5rem";
}



