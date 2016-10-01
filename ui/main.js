var counter = 0;
var button = document.getElementById('b1');
button.onclick = function(){
  counter = counter + 1;  
  var span = document.getElementById('s1');
  span.innerHTML = counter.toString();
};