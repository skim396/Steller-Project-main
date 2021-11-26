// JavaScript Document
//Akshit Narang #301177669


var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var adr = document.getElementById("adr");
var city = document.getElementById("city");
var pCode = document.getElementById("pCode");
var province = document.getElementById("province");
var age = document.getElementById("age");
var pass = document.getElementById("pass");
var confPass = document.getElementById("confPass");
var email = document.getElementById("email");

    

function resetter() {
    fName.setCustomValidity("");
    lName.setCustomValidity("");
    adr.setCustomValidity("");
    city.setCustomValidity("");
    pCode.setCustomValidity("");
    province.setCustomValidity("");
    age.setCustomValidity("");
    pass.setCustomValidity("");
    confPass.setCustomValidity("");
    email.setCustomValidity("");
}

function customValidity(){
    
    if(fName.checkValidity() == false)
        {
            fName.setCustomValidity("First Name cannot be Empty. Please Fill out this Field!");
        }
    if(lName.checkValidity() == false)
        {
            lName.setCustomValidity("Last Name cannot be Empty. Please Fill out this Field!");
        }
    if(adr.checkValidity() == false)
        {
            adr.setCustomValidity("Adress Cannot be Empty. Please Fill out this Field!");
        }
    if(city.checkValidity() == false)
        {
            city.setCustomValidity("City Cannot be Empty. Please Fill out this Field!");
        }
    
    
    
}

function PostalCodeValidation()
{
    var reg = /^[A-Z]{1}\d[A-Z]{1}\d[A-Z]{1}\d$/;
    
    if(pCode.checkValidity() == false)
        {
            pCode.setCustomValidity("Postal Code Cannot be Empty. Please Fill out this Field!");
        }
    else if(!reg.test(pCode.value))
        {
            pCode.setCustomValidity("Postal Code must be in format A0A0A0");
            
        }
}




function ProvinceFunc()
{
    var provUpper = province.value.toUpperCase();
    var provRegx = /^QC|ON|MN|SK|AB|BC$/g;
    if(province.checkValidity() == false)
        {
            province.setCustomValidity("Province Cannot be Empty. Please Fill out this Field!");
        }
    else if(!provRegx.test(provUpper))
        {
            province.setCustomValidity("Province can only be one of QC or ON or MN or SK or AB or BC.");
        }
   
}

function AgeValidation()
{
    if(age.checkValidity() == false)
        {
            age.setCustomValidity("Age Cannot be Empty. Please Fill out this Field!");
        }
    else if(age.value < 18)
        {
            age.setCustomValidity("Age has to be atleast 18 years old.")
        }
}

function EmailValidation()
{
    var mailRegx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]$/;
    if(email.checkValidity() == false)
        {
            email.setCustomValidity("Email Cannot be Empty. Please Fill out this Field!");
        }
    else if(!mailRegx.test(email.value))
        {
            email.setCustomValidity("Email must contain '@' and '.' characters.")
        }
}

function PasswordValidation()
{
    var regx = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
    
    if(pass.checkValidity() == false)
        {
            pass.setCustomValidity("Password Cannot be Empty. Please Fill out this Field!");
        }    
    else if(!regx.test(pass.value))
        {
            pass.setCustomValidity("Password must be atleast 6 characters long and contain one-digit and one upper-case character.");
            
        }
    else if(confPass.checkValidity() == false)
        {
            confPass.setCustomValidity("Please Confirm Your Password.");
        }
    else if(pass.value.localeCompare(confPass.value) !== 0)
        {
            alert("Passwords Do Not Match!");
        }
}

function pCodeGreenPara()
{
    var pCodeP = document.getElementById("pCodeP");
    var pCodeImg = document.getElementById("pCodeImg");
    var pCodeReg = /^[A-Z]{1}\d[A-Z]{1}\d[A-Z]{1}\d$/;
   
    if(pCodeReg.test(pCode.value))
        {
            pCodeP.style.color = "green";
            pCodeImg.style.display = "block";
        }
    else
        {
            pCodeP.style.color = "red";
            pCodeImg.style.display = "none";
        }
    
}
function passGreenPara()
{
     var passwdP = document.getElementById("passwdP");
    var passImg = document.getElementById("passImg");
    var passReg = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
    
    if(passReg.test(pass.value))
        {
            passwdP.style.color = "green";
            passImg.style.display = "block";
        }
    else
        {
            passwdP.style.color = "red";
            passImg.style.display = "none";
        }
}
pass.addEventListener("input", passGreenPara);
pCode.addEventListener("input", pCodeGreenPara);

function AllFunctions()
{
    ProvinceFunc();
    customValidity();
    PostalCodeValidation();
    AgeValidation();
    EmailValidation();
    PasswordValidation();
}

function submissionMsg()
{
    alert("Thanks for registering with our website, your customer record was created successfully.")

}
document.getElementById("form").addEventListener("submit", submissionMsg, false);

if (document.getElementById("submit").addEventListener) {
    document.getElementById("submit").addEventListener("click", AllFunctions, false);
} else if (document.getElementById("submit").attachEvent) {
    document.getElementById("submit").attachEvent("onClick", customValidity);
}

if (window.addEventListener) {
    window.addEventListener("load", resetter, false);
} else if (window.attachEvent) {
    window.attachEvent("onLoad", resetter);
}

