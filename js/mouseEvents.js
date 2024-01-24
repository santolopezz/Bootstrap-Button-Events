let btnOne = document.getElementById('id')
btnOne.addEventListener("Click", function(event){
    event.target.style.background = "#a0b96b";

});
let btnTwo = document.getElementById('dblclick');
 btnTwo.addEventListener('dblclick', function(e){
e.target.style.border = "4px dotted #ec8f6a";

 });

 let btnThree=document.getElementById('OnMouseEnter');
btnThree.addEventListener("mouseenter", function(ev){
    ev.target.style.color = "black";


})
 