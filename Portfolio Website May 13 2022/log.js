const logandreg=["LOGIN FORM","REGISTRATION FORM"];
document.getElementById('logt').innerHTML=logandreg[0];
document.getElementById('regt').innerHTML=logandreg[1];


        function reg(){

           

var Name = document.getElementById('Name');
var lName = document.getElementById('lName');
var mail = document.getElementById('mail');
var Password = document.getElementById('Password');
var imagess = document.getElementById('imagess');
var phone=document.getElementById('phone');


var Fname=document.getElementById('Name').value;
var Lname=document.getElementById('lName').value;
var emailll=document.getElementById('mail').value;
var cnumber=document.getElementById('phone').value;
var passwd=document.getElementById('Password').value;
var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

if(Fname==''){
    alert("Name is required");
    this.location.href="reg.html";
    
}

else if(!letters.test(Fname)){
    alert('Name field required only alphabet characters');
    this.location.href="reg.html";
}



else if(Lname==''){
    alert("Surname is required");
    this.location.href="reg.html";

}


else if(!letters.test(Lname)){
    alert('Surname field required only alphabet characters');
    this.location.href="reg.html";

}


else if(emailll==''){
    alert("Email is required");
    this.location.href="reg.html";
}


else if(!filter.test(emailll)){
    alert('Invalid email');
    this.location.href="reg.html";
}


else if(cnumber==''){
    alert("Phone number is required");
    this.location.href="reg.html";

}


else if(!re.test(cnumber)){
    alert('Invalid Phone Number');
    this.location.href="reg.html";

}

else if(cnumber.length < 10 && cnumber.length >10){
    alert('Invalid Phone Number');
    this.location.href="reg.html";

}
        

else if(passwd==''){
    alert("Password number is required");
    this.location.href="reg.html";
}


else if(!pwd_expression.test(passwd)){
    alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    this.location.href="reg.html";
}

else if(passwd.length < 8){
    alert("Password require 8 characters");
    this.location.href="reg.html";


}

else{

    sessionStorage.setItem('Name', Name.value);
    sessionStorage.setItem('lName',lName.value);
    sessionStorage.setItem('mail',mail.value);
    sessionStorage.setItem('Password', Password.value);
    sessionStorage.setItem('phone' , phone.value);
    alert('Your account has been created');
    window.open("index.html");
}


}


function loginn(){

    var logmail=sessionStorage.getItem('mail');
    var lopw=sessionStorage.getItem('Password') ;

    var maibox=document.getElementById('maill').value;
    var passbox=document.getElementById('Passwordl').value;

    var location = '';
    if(maibox != logmail ){

        alert("Wrong Email") ;
        

this.location.href = location;

    }
   
    else if(passbox != lopw){
      alert("Wrong Password");
        
    }else{

        alert("Welcome " +sessionStorage.getItem('Name')+" "+sessionStorage.getItem('lName'));
        window.open("home.html");
    }
}
    

