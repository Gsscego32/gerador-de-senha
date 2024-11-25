const numeroSenha =document.querySelector('.parametro-senha-texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes =document.querySelectorAll('.parametro-senha-botao');

const camposenha =document.querySelector('#campo-senha');
const Letramaiuscula="ZXCVBNMASDFGHJKLQWERTYUIOP";

 botoes[0].onclick =diminuirTamanho; 
 function diminuirTamanho( ){
if(tamanhoSenha>6){
 tamanhoSenha= tamanhoSenha-1
numeroSenha.textContent=tamanhoSenha
}
 }

 botoes[1].onclick =aumentarTamanho;
 geraSenha();
 function aumentarTamanho( ){
    if(tamanhoSenha<15){
     tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;
    }
 }
 function geraSenha(){
   let senha=" ";
   for(let i= 0 ; i<tamanhoSenha; i++){
      let numeroaleatorio=Math.random()*Letramaiuscula.length;
      numeroaleatorio=Math.floor(numeroaleatorio);
      senha=senha+Letramaiuscula[numeroaleatorio];
   }
   camposenha.value=senha;
}