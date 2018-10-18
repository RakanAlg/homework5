var size=30;
document.addEventListener('keyup', function (event) { 
const code = event.keyCode;
    
    if(code==107)
        {
            if(size <60){
            size=size+15;
                document.getElementById('demo').innerHTML="&#x1F388;";
            document.getElementById('demo').style.fontSize = (size)+"px";
            }
            else{
            document.getElementById('demo').innerHTML="&#x1F5EF";
        }}
    else if(code==109)
        {
            if(size>0){
                document.getElementById('demo').innerHTML="&#x1F388;";
             size=size-15;
            document.getElementById('demo').style.fontSize = (size)+"px";
            }
            else{
                document.getElementById('demo').style.fontSize = '30px';
            document.getElementById('demo').innerHTML="Done";
            }
        }
    else{
        
  alert('keydown event\n\n' + 'Invalid key...! Please press + or - key');
        
    }
});
