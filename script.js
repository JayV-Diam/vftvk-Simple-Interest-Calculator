//function that computes the interest 
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate / 100;
    // if pricipal is either zero or a negative value, show alert message
    if (principal == 0 || principal <= 0){
        alert("Enter a Positive Number");
    }
    // otherwise, display results
    else{
        
        document.getElementById("result").innerHTML = ("If you deposit " + Mark(principal) + "\n" 
        + "at an interest rate of " + rate + "% "
        + "You will receive an amount of " + interest + " "
        + "in the year " + "202" + years);
    } 
}
// function that shows the slider value
function SliderValue() {
    var slider = document.getElementById("rate").value;
    document.getElementById("sliderval").innerHTML = slider + "%";
}

function Mark(){
    principal.style.backgroundColor = "yellow";
}
