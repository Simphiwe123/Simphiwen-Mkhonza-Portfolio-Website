function reg(){

    var new_data=document.getElementById('Name').value;
if(localStorage.getItem('data')== null){


    localStorage.setItem('data','[]');
}
var old_data=JSON.parse(localStorage.getItem('data'));
old_data.push(new_data);
localStorage.setItem('data',JSON.stringify(old_data));

}