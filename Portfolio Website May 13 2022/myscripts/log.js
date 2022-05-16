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

    sessionStorage.setItem('Name', Name.value);
    sessionStorage.setItem('lName',lName.value);
    sessionStorage.setItem('mail',mail.value);
    sessionStorage.setItem('Password', Password.value);
    sessionStorage.setItem('phone' , phone.value);
    sessionStorage.setItem('imagess', imagess.value);
    alert('Your account has been created');
    window.location.href = "index.html";
}

//document.getElementById('loginResult').innerHTML=localStorage.getItem('name');



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
    

