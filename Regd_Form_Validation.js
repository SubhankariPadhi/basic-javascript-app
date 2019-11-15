var FirstName=document.RegForm.fname;
var LastName=document.RegForm.lname;
var DateOfBirth=document.RegForm.dob;
var EmailId=document.RegForm.email_id ;
var Password=document.RegForm.Password;
var ConfirmPassword =document.RegForm.ConfirmPassword;
//var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.])+\.([A-Za-z]{2,4})$/;
var pattern;
var k;


FirstName.addEventListener("blur", fname_fun ,true);
LastName.addEventListener("blur",lname_fun,true);
DateOfBirth.addEventListener("blur",dob_fun,true);
EmailId.addEventListener("blur",email_fun,true);
Password.addEventListener("blur",password_fun,true);
ConfirmPassword.addEventListener("blur",cpsw_fun,true);


function validation_function() {
    //FirstName = document.forms["RegForm"]["fname"];
    //LastName = document.forms["RegForm"]["lname"];
    // DateOfBirth = document.forms["RegForm"]["dob"];
    //EmailId = document.forms["RegForm"]["email_id"];
    //Password =  document.forms["RegForm"]["Password"];
    // ConfirmPassword = document.forms["RegForm"]["ConfirmPassword"];
    //var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.])+\.([A-Za-z]{2,4})$/;
    pattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    k = pattern.test(EmailId.value);


    sessionStorage.setItem("firstName", FirstName.value);
    sessionStorage.setItem("lastName", LastName.value);
    sessionStorage.setItem("dob", DateOfBirth.value);
    sessionStorage.setItem("emailId", EmailId.value);
    sessionStorage.setItem("password", Password.value);
    sessionStorage.setItem("cpsw", ConfirmPassword.value);


    /*if (FirstName.value == "") {
        FirstName.focus();
        document.getElementById("fname_error").innerHTML = "Please enter your FirstName.";
        return false;
    }
    else {

        document.getElementById("fname_error").innerHTML = "";

    }*/
    if (FirstName.value == "") {
        FirstName.focus();
        document.getElementById("fname_error").innerHTML = "Please enter your FirstName.";
        return false;
    }
    else {

        document.getElementById("fname_error").innerHTML = "";
       // return true;
    }
    if(LastName.value == "") {
        document.getElementById("lname_error").innerHTML = "Please enter your LastName";
        //window.alert("Please enter your LastName.");
        LastName.focus();
        return false;
    }
    else {
        document.getElementById("lname_error").innerHTML="";
       // return true;
    }
    if (DateOfBirth.value == "") {
        document.getElementById("dob_error").innerHTML = "Please enter your Date of birth.";
        //window.alert("Please enter your Date of birth.");
        DateOfBirth.focus();
        return false;
    }
    else{
        // DateOfBirth.focus();
        document.getElementById("dob_error").innerHTML="";
    }

    if(k==false || EmailId.value==""){
        document.getElementById("email_error").innerHTML="invalid mailId";
        EmailId.focus();
        return false;
    }
    else {
        document.getElementById("email_error").innerHTML = "";
    }

    if (Password.value == "" ) {
        // document.getElementById("password").style.border.color = "red";
        document.getElementById("password_error").innerHTML = "this field is manadatory";
        //window.alert("Please enter your Password.");
        Password.focus();
        return false;
    }
    else {

        // Password.focus();
        document.getElementById("password_error").innerHTML = "";


    }
    if (Password.value==ConfirmPassword.value) {

        //ConfirmPassword.focus();
        document.getElementById("cpsw_error").innerHTML = "";
        // return false;

    }
    else if (ConfirmPassword.value == "" || Password.value!=ConfirmPassword.value){
        //  document.getElementById("cpassword").style.border.color = "red";
        document.getElementById("cpsw_error").innerHTML = "Password mismatched";
        ConfirmPassword.focus();
        return false;
    }

    return true;
}



function  fname_fun() {
    if (FirstName.value == "") {
        FirstName.focus();
        document.getElementById("fname_error").innerHTML = "Please enter your FirstName.";
        return false;
    }
    else {

        document.getElementById("fname_error").innerHTML = "";
        return true;
    }
}
function lname_fun() {


    if(LastName.value =="") {
        document.getElementById("lname_error").innerHTML = "Please enter your LastName";
        //window.alert("Please enter your LastName.");
        LastName.focus();
        return false;
    }
    else {
        document.getElementById("lname_error").innerHTML="";
       return true;
    }
}
    function dob_fun() {

    if (DateOfBirth.value == "") {
            document.getElementById("dob_error").innerHTML = "Please enter your Date of birth.";
            //window.alert("Please enter your Date of birth.");
            DateOfBirth.focus();
            return false;
        }
        else{
       // DateOfBirth.focus();
        document.getElementById("dob_error").innerHTML="";
        return true;
    }
}
function  email_fun()

    {
       if(k==false || EmailId.value==""){
            document.getElementById("email_error").innerHTML="invalid mailId";
            EmailId.focus();
            return false;


        }
else {
           document.getElementById("email_error").innerHTML = "";
       return true;
       }
}
function password_fun()
       {
        if (Password.value == "" ) {
           // document.getElementById("password").style.border.color = "red";
            document.getElementById("password_error").innerHTML = "this field is manadatory";
             //window.alert("Please enter your Password.");
            Password.focus();
            return false;
        }
        else {

            // Password.focus();
            document.getElementById("password_error").innerHTML = "";

        return true;
        }
}
function cpsw_fun(){

     if (Password.value==ConfirmPassword.value || Password.value!=ConfirmPassword.value){

        //ConfirmPassword.focus();
        document.getElementById("cpsw_error").innerHTML = "";
        return true;

    }
   else if (ConfirmPassword.value == ""){
        //  document.getElementById("cpassword").style.border.color = "red";
        document.getElementById("cpsw_error").innerHTML = "Password mismatched";
        ConfirmPassword.focus();
        return false;
    }

}

