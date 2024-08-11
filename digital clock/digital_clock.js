let h = document.getElementById("hrs");
let m = document.getElementById("min");
let s = document.getElementById("sec");

setInterval(clock,1000);

function clock(){
    let t = new Date;
    console.log(t);
    (t.getHours()<10?"0":"" + t.getHours())
    h.innerHTML = (t.getHours()<10?"0":"" + t.getHours());
    m.innerHTML = (t.getMinutes()<10?"0":"" + t.getMinutes());
    s.innerHTML = (t.getSeconds()<10?"0":"" + t.getSeconds());

}
