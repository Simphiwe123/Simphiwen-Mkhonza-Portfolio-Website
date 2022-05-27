var button = document.getElementById('bslide');
button.onclick = function () {
 var container = document.getElementById('nbooks');
 sideScroll(container,'right',40,100,25);
};

var back = document.getElementById('bslideBack');
back.onclick = function () {
 var container = document.getElementById('nbooks');
 sideScroll(container,'left',40,100,25);
};

function sideScroll(element,direction,speed,distance,step){
 scrollAmount = 0;
 var slideTimer = setInterval(function(){
     if(direction == 'left'){
         element.scrollLeft -= step;
     } else {
         element.scrollLeft += step;
     }
     scrollAmount += step;
     if(scrollAmount >= distance){
         window.clearInterval(slideTimer);
     }
 }, speed);
}

var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('fbooks');
    sideScroll(container,'right',40,100,25);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('fbooks');
    sideScroll(container,'left',40,100,25);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
