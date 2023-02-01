// Tempo
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Botões
const start = document.getElementById("start");
const reset = document.getElementById("reset");

// tempo que será atualizado
h = 00;
m = 00;
s = 00;

// Evento de click no botão start
start.addEventListener("click", () => {

    // setInterval para atualizar os valores a cada 1 seg.
    cronometro = 
        setInterval(function () {

            // Adicionando operador ternario que acrescenta mais um 0 enquanto o número for menor que 10
            horas.innerHTML = h < 10 ? '0' + h : h;
            minutos.innerHTML = m < 10 ? '0' + m : m;
            segundos.innerHTML = s < 10 ? '0' + s : s;

            // condições para atuailizar s, m, h
            if(s < 59) { 
                s += 1
            } else if (m < 59) {
                s = 0;
                m += 1
            } else if (h < 24) {
                s = 0;
                m = 0;
                h += 1;
            } else {
                alert("Limite de horas cronometradas excedido!!!")
            }

        }, 100);
});

// Evento de click para o botão reset
reset.addEventListener("click", () => {
    // ClearInterval para parar a contagem do setInterval que foi atribuido a variável cronometro.
    clearInterval(cronometro);

    // Zerando o cronometro após a paralisação da contagem
    horas.innerHTML = "00";
    minutos.innerHTML =  "00";
    segundos.innerHTML =  "00";
});