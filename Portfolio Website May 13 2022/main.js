
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
function ValidationForm() {
  let username = document.forms["RegForm"]["Name"];
  let llname = document.forms["RegForm"]["lName"];
  let email = document.forms["RegForm"]["Email"];
  let pass = document.forms["RegForm"]["Password"];
  if(username.value == "") {
    alert("Please enter your name.");
    username.focus();
    return false;
    
  }
 else if(llname.value == "") {
    alert("Please enter your surname.");
    username.focus();
    return false;
    
  }
  else if(email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  else if(email.value.indexOf("@", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  else if(email.value.indexOf(".", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  
 else if(pass.value == "") {
    alert("Please enter your password");
    pass.focus();
    return false;
  }
  else{
    $(document).ready(function () {
      $("#RegForm").submit(function () {
        var nm1 = $("#Name").val();
        var lnm1 = $("#lName").val();
        var em1 = $("#E-mail").val();
        var ps1 = $("#Password").val();
        var fl1 = $("#imagess").val();
        
        localStorage.setItem("n1", Name);
        localStorage.setItem("l1",lName)
        localStorage.setItem("e1",E-mail)
        localStorage.setItem("p1", Password);
        localStorage.setItem("f1",imagess);
  
      });
  
      
    })
  }
 
  return true;
}

