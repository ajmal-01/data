function nameValidation(){
    let userName = document.getElementById("fullName").value
    let regex = /^[a-zA-Z\s]+$/

    if(regex.test(userName)){
        document.getElementById("first1").innerHTML = "Verified";
        document.getElementById("first1").style.color ="green";
        return true

    }else{
        document.getElementById("first1").innerHTML ="Not Verified";
        document.getElementById("first1").style.color ="red";
        return false

    }
}
function emailValidation(){
    let userEmail = document.getElementById("email").value;
    let regEx = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-_]{2,20})\.([a-z]{2,6})$/;

    if(regEx.test(userEmail)){
        document.getElementById("verify2").innerHTML =" Verified";
        document.getElementById("verify2").style.color ="green";
       return true

    }else{
        document.getElementById("verify2").innerHTML = "Not verified";
        document.getElementById("verify2").style.color="red";
        return false
    }
}
function numberValidation(){
    let telNum = document.getElementById("phone").value;
    let regEx = /^[0-9]{10}$/

    if(regEx.test(telNum)){
        document.getElementById("verify3").innerHTML ="Verified";
        document.getElementById("verify3").style.color ="green";
        return true
        


    }else{
        document.getElementById("verify3").innerHTML ="Not Verified"
        document.getElementById("verify3").style.color ="red";
        return false
    }
}


function validateAll(){
    nameValidation();
    emailValidation();
    numberValidation();

    if(nameValidation() && emailValidation() && numberValidation()){
        return true
    }else{
        return false
    }
}