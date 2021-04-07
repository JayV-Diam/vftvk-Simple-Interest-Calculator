function compute()
{
    var pincipal = document.getElementById("principal");
    principal.valueOf();
    var rate = document.getElementById("rate");
    rate.valueOf();
    var year = document.getElementById("years");
    year.valueOf();
    var interest = principal*years*rate / 100;
    interest.valueOf();

    function SliderValue(slider) {
        slider = document.getElementById("Slider_Val");
        alert(slider.valueOf());
    }
}
        