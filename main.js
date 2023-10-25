//criamos uma função para representar os sons do elementos dos estilos musicaisdentro do elemento audio do html
function tocaSom (seletorAudio) {
   const elemento= document.querySelector(seletorAudio);
   if(elemento && elemento.localName==="audio"){
        elemento.play();       
   } 
   else{
    console.log('Elemento não encontrado ou seletor não encontrado');
   }
}
const listaDeTeclas= document.querySelectorAll('.tecla');

for( let contador=0; contador< listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio=`#som_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown= function (evento) {
        if (evento.code==="Space"||evento.code==="Enter") {
            tecla.classList.add('ativa');
        } 
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
