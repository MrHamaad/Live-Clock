

setInterval(()=>{
    let date=new Date();
    document.getElementById("time").innerHTML=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    console.log(hi)
},1000)

