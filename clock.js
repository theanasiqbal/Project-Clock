
setInterval(() =>{
    let hour = document.getElementById('hour') 
    let minute = document.getElementById('minute') 
    let second = document.getElementById('second') 
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    h_hand = 30*h + m/2;
    m_hand = 6*m;
    s_hand = 6*s;

    hour.style.transform = `rotate(${h_hand}deg)`
    minute.style.transform = `rotate(${m_hand}deg)`
    second.style.transform = `rotate(${s_hand}deg)`
}, 1000)