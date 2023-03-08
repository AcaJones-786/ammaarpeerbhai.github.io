let counts=setInterval(updated);
let average_mark=0;
function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++average_mark;
    
    if(average_mark===82)
    {
        clearInterval(counts);
    }
}
