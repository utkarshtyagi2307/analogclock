setInterval(() => {
    d = new Date();
    
    dhour = d.getHours();
    dmin = d.getMinutes();
    dsec = d.getSeconds();
    hRotation = 30*dhour + dmin/2;
    mRotation = 6*dmin + dsec/10;
    sRotation = 6*dsec;
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    
}, 1000);