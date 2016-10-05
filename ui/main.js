
var button = document.getElementById('b1');
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      
      if(request.readystate === XMLHttpRequest.DONE){
          if(request.status==200){
              var counter = request.responseText;
              var span = document.getElementById('s1');
              span.innerHTML = counter.toString();
          }
      }  
    };
    request.open('GET','http://luthrasaab.imad.hasura-app.io/counter',true);
    request.send(null);
  
};
var B2= document.getElementById('b2');
B2.onClick = function(){
 var T1 = document.getElementById('t1');
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    
    if(request.readystate === XMLHttpRequest.DONE){
        
    }  
  };
  alert('Your Comment is Succesfully Submitted');
};