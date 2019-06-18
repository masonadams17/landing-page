const time= document.getElementById('time'),
    greeting= document.getElementById('greeting'),
    name= document.getElementById('name'),
    focus= document.getElementById('focus');
    
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    // set am or pm
    const amPm = hour >=12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 100);
}

// Add zeroes
function addZero(n) {
    return( parseInt(n, 10) <10 ? '0' : '') + n;
}

function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = 'Enter Name';
    } else{
        name.textContent = localStorage.getItem('name');
    }
}

//set Name
function setName(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    } else{
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if(localStorage.getItem('focus') === null){
        focus.textContent = 'Enter focus';
    } else{
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
        }
    } else{
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run 
showTime();
setBgGreet();
getName();
getFocus();

