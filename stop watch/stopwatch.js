let [sec,min,hrs] = [0,0,0]
let distime = document.getElementById("distime")
let timer = null;

function stopwatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hrs++;
        }
    }
    let h = hrs<10?"0"+hrs:hrs 
    let m = min<10?"0"+min:min
    let s = sec<10?"0"+sec:sec;
    distime.innerHTML = h+":"+m+":"+s;
}

function watchstart(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000)
}

function watchreset(){
    clearInterval(timer);
    //let timer = null;
    [sec,min,hrs] = [0,0,0];
    distime.innerHTML = "00:00:00"
}

function watchstop(){
    clearInterval(timer)
}