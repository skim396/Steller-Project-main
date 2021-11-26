var actLev1 = document.getElementById("actLev1");
var actLev2 = document.getElementById("actLev2");
var actLev3 = document.getElementById("actLev3");
var actLev4 = document.getElementById("actLev4");
var actLev5 = document.getElementById("actLev5");



function calcImperialBMR() 
{   var bmr;
    var gender = document.getElementById("gender").value;
    var userAge = parseInt(document.getElementById("age").value);
    var weight = (14 * parseInt(document.getElementById("stones").value)) +                 parseInt(document.getElementById("pounds").value);
    var height = (12 * parseInt(document.getElementById("feet").value)) + parseInt(document.getElementById("inches").value);
 
     if (gender == "male")
    {
        bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * userAge);
    }
    else
    {
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * userAge);
    }
    if (actLev1.checked)
    {bmr = bmr * 1.2}
    else if (actLev2.checked)
    {bmr = bmr * 1.375}
    else if (actLev3.checked)
    {bmr = bmr * 1.55}
    else if (actLev4.checked)
    {bmr = bmr * 1.725}
    else if (actLev5.checked)
    {bmr = bmr * 1.9}
    else
    (bmr = bmr * 1)
   

    document.getElementById("ans").innerHTML = bmr.toFixed(2) + " calories/day";
}
document.getElementById("button").addEventListener("click", calcImperialBMR, false);

function calcMetricBMR() 
{   var bmr;
    var gender = document.getElementById("gender").value;
    var userAge = parseInt(document.getElementById("age").value);
    var weight = parseInt(document.getElementById("kg").value);
    var height = parseInt(document.getElementById("cm").value);
 

    if (gender == "male")
    {
        bmr = 66.5 + ( 13.75 * weight ) + ( 5.003 * height ) - ( 6.755 * userAge );
    }
    else
    {
        bmr = 655 + ( 9.563 * weight ) + ( 1.850 * height ) - ( 4.676 * userAge );
    }
     if (actLev1.checked)
    {bmr = bmr * 1.2}
    else if (actLev2.checked)
    {bmr = bmr * 1.375}
    else if (actLev3.checked)
    {bmr = bmr * 1.55}
    else if (actLev4.checked)
    {bmr = bmr * 1.725}
    else if (actLev5.checked)
    {bmr = bmr * 1.9}
    else
    (bmr = bmr * 1)

    document.getElementById("ans").innerHTML = bmr.toFixed(2) + " calories/day";
}
document.getElementById("button").addEventListener("click", calcMetricBMR, false);

