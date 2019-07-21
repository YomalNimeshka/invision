let state = 0;
let submitBtn = document.getElementById("feedbackSubmit");

function starSelect(starNum = 0) {
    var stars = document.getElementsByClassName("stars");
    switch (starNum) {

        case 1:
            for (var i = 0; i < starNum; i++) {
                document.getElementById("star" + (i + 1)).innerHTML = "&starf;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";

            }
            for (var i = 4; i > (starNum - 1); i--) {
                document.getElementById("star" + (i + 1)).innerHTML = "&star;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";
            }
            state = 1;
            break;

        case 2:
            for (var i = 0; i < starNum; i++) {
                document.getElementById("star" + (i + 1)).innerHTML = "&starf;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";
            }
            for (var i = 4; i > (starNum - 1); i--) {
                document.getElementById("star" + (i + 1)).innerHTML = "&star;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";
            }
            state = 2;
            break;

        case 3:
            for (var i = 0; i < starNum; i++) {
                document.getElementById("star" + (i + 1)).innerHTML = "&starf;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";

            }
            for (var i = 4; i > (starNum - 1); i--) {
                document.getElementById("star" + (i + 1)).innerHTML = "&star;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";
            }
            state = 3;
            break;

        case 4:
            for (var i = 0; i < starNum; i++) {
                document.getElementById("star" + (i + 1)).innerHTML = "&starf;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";

            }
            for (var i = 4; i > (starNum - 1); i--) {
                document.getElementById("star" + (i + 1)).innerHTML = "&star;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";
            }
            state = 4;
            break;

        case 5:
            for (var i = 0; i < starNum; i++) {
                document.getElementById("star" + (i + 1)).innerHTML = "&starf;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";

            }
            for (var i = 4; i > (starNum - 1); i--) {
                document.getElementById("star" + (i + 1)).innerHTML = "&star;";
                document.getElementById("star" + (i + 1)).style.color = "#FFFF00";
            }
            state = 5;
            break;
    }
}

submitBtn.addEventListener("click", function() {
    let nameVal = document.getElementById("name").value;
    let commentVal = document.getElementById("feedbackBox").value;

    if (state == 0) {
        window.alert("Please enter a minimum of 1 star in order to rate our site")
    } else {
        if (nameVal.length == 0) {
            window.alert("Please enter a valid name to submit");
        } else {
            if (commentVal.length == 0) {
                window.alert("Please enter a comment if you are submitting a rating for our site");
            } else {
                window.alert("Hey there " + nameVal + " Thanks for rating our site!! You rated us a " + state + " out of 5 star rating. Appreciate the feedback as well");
            }
        }
    }
});


// Get the modal
var modal = document.getElementById("feedbackFormContainer");
// Get the button that opens the modal
var btn = document.getElementById("feedbackbtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.addEventListener("click", function() {
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})