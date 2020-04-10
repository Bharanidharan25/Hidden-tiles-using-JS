var sec=0;
var min=0;
let count = 0;
var value = []
let turnedTiles=0
let countdown = undefined

function incSec(){
    sec+=1;
    if(sec===60){
        min+=1
        sec=0
    }
    document.getElementById('time').innerHTML= `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

function timer(){
    if(document.getElementById('strtbtn').textContent == 'START'){
      countdown = window.setInterval( incSec , 1000)
      document.getElementById('time').style.display = 'block'
      document.getElementsByClassName('grid')[0].style.display='block'
      document.getElementById('strtbtn').textContent = 'STOP'
    }
    else{
      window.clearInterval(countdown)
      document.getElementById('time').style.display = 'none'
      document.getElementsByClassName('grid')[0].style.display='none'
      document.getElementById('strtbtn').textContent = 'START'
      sec = 0
      min = 0
    }
      
  }

function colorChange(p){
    let firstValue = value[0].parentElement
    p.parentElement.style.backgroundColor = 'grey'
    firstValue.style.backgroundColor = 'grey'
    p.classList.add('cell-p')
    firstValue.firstChild.classList.add('cell-p')
    count = 0
    value = []
}

function isGameOver(){
    if (turnedTiles == 16){
        window.clearInterval(countdown)
        document.getElementsByClassName('About')[0].style.display='none'
        document.getElementsByClassName('grid')[0].style.display = 'none'
        document.getElementById("rslt").innerHTML= `Congrats!!  You have Completed in ${min} Minutes & ${sec} Seconds`
    }
}

function buttonPress(clicked){
    let p = document.getElementById(clicked)
    p.classList.remove('cell-p');
    p.parentElement.style.backgroundColor = 'green'
    if (count < 2){
        value.push(p)
    }
    count = count + 1
    if(count==2){        
        if(value[0].textContent==value[1].textContent){
            count = 0
            value = []
            turnedTiles +=2
            isGameOver()
        } else {
            setTimeout(()=>colorChange(p), 600)
        }
    }
}


