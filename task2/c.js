function clock(){
    var c=new Date();
    var hours=c.getHours();
    var minute=c.getMinutes();
    var second=c.getSeconds();
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minute;
    document.getElementById('seconds').innerHTML=second;



}
setInterval(clock,10);