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
        location.reload();
    }
    // otherwise, display results
    else{
        document.getElementById("result1").innerHTML = ("If you deposit ");
        document.getElementById("result1_1").innerHTML = (principal);
        document.getElementById("result2").innerHTML = ("at an interest rate of ");
        document.getElementById("result2_2").innerHTML = (rate + "%");
        document.getElementById("result3").innerHTML = ("You will receive an amount of " );
        document.getElementById("result3_3").innerHTML = (interest);
        document.getElementById("result4").innerHTML = ("in the year ");
        document.getElementById("result4_4").innerHTML = (2021 + parseInt(years));
    }
    //principal.style.backgroundColor = "yellow"; 
}
// function that shows the slider value
function SliderValue() {
    var slider = document.getElementById("rate").value;
    document.getElementById("sliderval").innerHTML = slider + "%";
}