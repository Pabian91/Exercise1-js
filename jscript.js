//pobranie czasu z mojego komputera
    var today = new Date(); 

function current_day()
{
    var day = today.getDay();
    var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    
    document.getElementById("day_name").innerHTML = dayList[day];
    
}

function current_time() 
{
     var today = new Date(); 
    var hour = today.getHours();
        //if (hour<10) hour = "0" + hour;
        if (hour<=12) hour = hour + "AM";
        else hour = hour + "PM";
    var minute = today.getMinutes();
        if (minute<10) minute = "0" + minute;
    var second = today.getSeconds();
        if (second<10) second = "0" + second;
    
    document.getElementById("time").innerHTML = hour +" : "+ minute +" : "+ second;
    
     setTimeout("current_time()", 1000);
}


