window.onload =  function() {
    let seconds = 00;
    let tens = 00;
    let minutes = 00;
    let appendSeconds = document.getElementById('seconds')
    let appendTens = document.getElementById('tens')
    let appendMinutes = document.getElementById('minutes')
    let startButton = document.getElementById('start');
    let stopButton = document.getElementById('stop');
    let resetButton = document.getElementById('reset');
    let lap = document.getElementById('lap');
    let Interval ;
    let laps = document.getElementById('laps');
    let how_many = 0; 
    let clear = document.getElementById('clear');
    let remove = document.getElementById('remove');
    let max_laps = 20;


    startButton.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
        startButton.innerHTML = "START";
    
    }

    stopButton.onclick = function() {
        clearInterval(Interval);
        if (tens > 10) {
            startButton.innerHTML = "RESUME";
        }
        
    }

    resetButton.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
        startButton.innerHTML = "START";

    }

    clear.onclick = function() {
        laps.innerHTML = "";
        how_many = 0;
    }

    remove.onclick = function() {
        
    }

    lap.onclick = function() {

        let list = document.createElement('li')
        how_many= how_many + 1;
        if (tens < 10 && how_many <= max_laps) {
            let TimeLap = document.createTextNode(how_many + ". " +  minutes + ":0" + seconds + ":0" +  tens);
            list.appendChild(TimeLap);
            laps.appendChild(list);
        }

        else if (seconds < 10 && tens > 9 && how_many <= max_laps) {
            let TimeLap = document.createTextNode(how_many + ". " +  minutes + ":0" + seconds + ":" +  tens);
            list.appendChild(TimeLap);
            laps.appendChild(list);
        }

        else if (how_many <= max_laps) {
        let TimeLap = document.createTextNode(how_many + ". " +  minutes + ":" + seconds + ":" +  tens);
        list.appendChild(TimeLap);
        laps.appendChild(list);
        }

        if (how_many > max_laps) {
            alert("Lap limit reached")
        }
    }

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = "0";
            appendTens.innerHTML = "0" + 0;
            
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = "0";
            appendSeconds.innerHTML = "0" + 0;
        }
    }


}

function SwitchMode() {
    var bodyHTML = document.getElementById('container');
    bodyHTML.classList.toggle("white-mode");
    var TextinButton = document.getElementById("x") 
    var text = TextinButton.textContent;
    var color_mode = document.getElementById('mode_color')
    if (text === "Light Mode") {
        TextinButton.innerHTML = "Dark Mode";
        color_mode.innerHTML = "Currently on the Light Mode";
        console.log(previous_minute,previous_second,previous_tens)
    }
    else {
        TextinButton.innerHTML = "Light Mode";
        color_mode.innerHTML = "Currently on the Dark Mode";
    }   
    
}

function HideButton() {
    var textHiden = document.getElementById('mode_color')
    if (textHiden.style.display === "none") {
        textHiden.style.display = "block";
    } else {
        textHiden.style.display = "none";
    }
}
