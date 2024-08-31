function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }

    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleat six letter";
        return false;
    }

    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email";
        return false;
    }

    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Your password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }
    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="Enter Your Confirm password";
        return false;
    }

    
    else if(document.Formfill.Password.value!==document.Formfill.cPassword.value){
        document.getElementById("result").innerHTML="Password does'nt matched";
        return false;
    }
    
}