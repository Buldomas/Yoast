var myBurger = document.getElementById("burger");
myBurger.addEventListener("click", function() {
    var myBurger = document.getElementById("burger");
    var myMenu1 = document.getElementById("menu1");
    if (myBurger.classList.contains("fa-times")) {
        myBurger.classList = "fas fa-align-justify";    /* burger */
        myMenu1.className="menu1";
    } else {
        myMenu1.className="menu1bis";
        myBurger.classList = "fas fa-times"; /* Croix */
    }
});

function changeMenu() {
    var myMenu1 = document.getElementById("menu1");
    var myBurger = document.getElementById("burger");
/*    console.log("coucou0");*/
    if (myBurger.classList.contains("fa-times")) {
/*        console.log("fa-times");*/
        if (myMenu1.classList.contains("menu1bis")) {
            /*console.log("1bis");*/
            if (myMenu1.clientWidth >= 630) {
                myBurger.classList = "fas fa-align-justify";    /* burger */
                myMenu1.className="menu1";
            }
            if (myMenu1.clientWidth == 0) {
                myBurger.classList = "fas fa-align-justify";    /* burger */
                myMenu1.className="menu1";
            }
        }
    }
}