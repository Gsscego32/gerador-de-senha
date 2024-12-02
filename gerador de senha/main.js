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
geraSenha()
}
 }

 botoes[1].onclick =aumentarTamanho;
 geraSenha();
 function aumentarTamanho( ){
    if(tamanhoSenha<15){
     tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;
    geraSenha()
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

const c = {
   minValue: 0,
   maxValue: 100,
   totElements: 50,
   a: [], 
 
   init: function() {
     for (let i = 0; i < c.totElements; i++) {
       c.a.push(Math.floor(Math.random() * (c.maxValue - c.minValue + 1)) + c.minValue);
     }
   }
 }
   
 const container = document.getElementById("container");
 
 function draw() {
   const fragment = document.createDocumentFragment();
   c.a.map((el, i) => {
     const div = document.createElement("div");
     div.style.height = `${el}%`;
     div.classList.add("item");
     div.textContent = el;
     div.dataset.index = i;
     fragment.appendChild(div);
   });
   clear();
   container.appendChild(fragment);
 }
 
 function clear() {
   container.innerHTML = "";
 }
 
 async function bubbleSort(delay = 500) {
   document.getElementsByTagName("h1")[0].textContent = "Bubble Sort";
   let swapped;
   let iteration = 1;
   do {
     swapped = false;
     for (let i = 0; i < c.a.length - iteration; i++) {
       const item1 = document.querySelector(`.item[data-index="${i}"]`);
       const item2 = document.querySelector(`.item[data-index="${i + 1}"]`);
       item1.classList.add("checked");
       item2.classList.add("checked");
       if (c.a[i] > c.a[i + 1]) {
         item1.classList.add("swapped");
         item2.classList.add("swapped");
         [c.a[i], c.a[i + 1]] = [c.a[i + 1], c.a[i]];
         swapped = true;
       }
       await new Promise(resolve => setTimeout(resolve, delay));
       draw();
     }
     iteration++;
   } while (swapped);
   const items = document.querySelectorAll(".item");
   items.forEach(el => el.classList.add("checked"));
 }
 
 c.init();
 draw();
 bubbleSort();