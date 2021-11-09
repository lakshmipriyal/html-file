function validation() {
    debugger;
    var count = 0;
    var Name = document.getElementById("form").Username.value;
    var Age = document.getElementById("form").Age.value;
    var Email = document.getElementById("form").Email.value;
    var Password = document.getElementById("form").Password.value;


    if (Name == null || Name == "") {
        document.getElementById("Usernamemsg").innerHTML = "Please Enter  Name";
        count++;
    }

    if (Age == null || Age == "") {
        document.getElementById("Agemsg").innerHTML = "Please Enter Age";
        count++;

    }

    if (Email == null || Email == "") {
        document.getElementById("Emailmsg").innerHTML = "Please Enter  Email";
        count++;

    }

    if (Password == null || Password == "") {
        document.getElementById("Passwordmsg").innerHTML = "Please Enter  Password";
        count++;

    }
    if (count > 0) {
        return false;
    }
    else {
        // document.getElementById("result").innerHTML = Name;
        alert(Name + ' has Registered successfully');
        return true;
    }


}

function nUsername() {
    debugger;
    var Name =document.getElementById("form").Username.value;

    if (Name !== null || Name !== "")
        document.getElementById("Usernamemsg").innerHTML = "";
    if (Name.match(/[^a-zA-Z]/g)) {
        document.getElementById("Usernamemsg").innerHTML = "Please Enter Only Aphabetics";
        return false;
    }
    return true;
}

function nAge() {
    var Age = document.getElementById("form").Age.value;
    if (Age !== null || Age !== "")
        document.getElementById("Agemsg").innerHTML = "";
    if (Age.match(/[^0-9]/g)) {
        document.getElementById("Agemsg").innerHTML = "Please Enter Only Numerics";
        return false;
    }
    return true; 
}

function nEmail() {
    var Email = document.getElementById("form").email.value;
    var emailvalidate = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    if (Email !== null || Email !== "")
        document.getElementById("Emailmsg").innerHTML = "";
    if (!Email.match(emailvalidate)) {
        document.getElementById("Emailmsg").innerHTML = "Please Enter Valid Email";
        return false;
    }
    return true;
}

function nPassword() {
    var Password = document.getElementById("form").password.value;
    if (Password !== null || Password !== "")
        document.getElementById("Passwordmsg").innerHTML = "";
    return true;
}

function nSubmit(){

    
    if( validation())
    {
        var Name = document.getElementById("form").Username.value;
        var Age = document.getElementById("form").Age.value;
        var Email = document.getElementById("form").Email.value;
        var Password = document.getElementById("form").Password.value;
        document.getElementById("lblUsername").innerHTML=Name;
        document.getElementById("lblAge").innerHTML=Age;
        document.getElementById("lblEmail").innerHTML=Email;
        document.getElementById("lblPassword").innerHTML=Password;
        document.getElementById("displaypanel").style.display="block";
    }
    
}










