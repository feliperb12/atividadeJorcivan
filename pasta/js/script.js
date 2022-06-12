
'use strict'
const menuSize = '250px';
let abrir = false;


document.querySelector('#btnMenu').addEventListener('click', e => {
    
    abrir = !abrir;
    AlterarMenu();
    aparecer();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    abrir = false;
    
    AlterarMenu();
})
function aparecer(){
    var texto = document.getElementById('menu');
    texto.style.visibility='visible';
   
}

function AlterarMenu() {
    
    if (abrir) {
       
        document.querySelector('#menu').style.marginLeft = 0;
        
        return;
    }
   
    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
}


function Alerta(nome) {
    var nome;
    nome = prompt("Qual é seu nome?");
    alert("Olá, " + nome);
}


function data() {
    var data = new Date();
    var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    var dsem = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira",
        "Sexta-Feira", "Sábado");

    document.write(dsem[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] +
        " de " + data.getFullYear());
}

function hora() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (s < 10) {
        s = '0' + s;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h < 10) {
        h = '0' + h;
    }
    var tempo = h + ":" + m + ":" + s;
    var tempin = window.document.getElementById('MeuHorario');
    tempin.innerHTML = tempo;
    setTimeout(hora, 1000);

}

function mudarCor() {
    // referencia o trocar do layout html
    var bat = document.getElementById('bt');
    var bat2 = document.getElementById('bt2');
    var texto = document.getElementById('fundo');
    texto.style.color = 'white';
    texto.style.textAlign = 'justify';
    texto.style.backgroundColor = '#2c2e43';
    texto.style.border = '5px solid #ffd523';
    texto.style.fontWeight = 'bold';
    bat.style.visibility = 'hidden';
    bat2.style.visibility = 'visible';

}


function voltarCor() {
    var bat = document.getElementById('bt');
    var bat2 = document.getElementById('bt2');
    var texto = document.getElementById('fundo');
    texto.style.color = 'black';
    texto.style.textAlign = 'justify';
    texto.style.backgroundColor = '#ffefd5';
    texto.style.border = '4px solid black';
    bat2.style.visibility = 'hidden';
    bat.style.visibility = 'visible';
}












