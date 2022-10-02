let time = 60;

const numbero = document.getElementById('num')

function Update() {

    numbero.innerHTML = `${time}`
    time--;
}

function automa() {
    setInterval(Update, 1000)
    
}

