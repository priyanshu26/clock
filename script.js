setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRotaion = 30*hTime + mTime/2;
    mRotaion = 6*mTime;
    sRotaion = 6*sTime;
    
    hours.style.transform = `rotate(${hRotaion}deg)`;
    mins.style.transform = `rotate(${mRotaion}deg)`;
    sec.style.transform = `rotate(${sRotaion}deg)`;
}, 1000);
