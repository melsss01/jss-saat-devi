function showtime(){
    let today = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let todayName = today.getDay()
    let currentTime =document.querySelector("#myClock")
    currentTime.innerHTML= '$ {time} ${days [todayname]}'
    setTimeout(showTime, 1)
}
    showtime()
    let nameFirst = document.querySelector("#myName")
    let username = prompt("Type your name")
    nameFirst.innerHTML = '${userName}'
