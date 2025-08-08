
let listaAmigos = [] 
let inputAmigo = document.getElementById('amigo'); 
let elementoListaLi = document.getElementById('listaAmigos');
let listaHtmlDosAmigos = '' 
let nomeHtmlDoAmigo = '' 
let indiceAleatorio = ''; 
let amigoSorteado = ''; 


function adicionarAmigos(){
    if(inputAmigo.value ==''){
        alert('Por favor, insira um nome e clique no botão "Adicionar" !!!')
    } else {
        listaAmigos.push(inputAmigo.value);
        atualizaListaAmigos();
        inputAmigo.value = '';
        inputAmigo.focus();
    }
}

function atualizaListaAmigos(){ 
    for (let i = (listaAmigos.length -1); i < listaAmigos.length; i++) {
        listaHtmlDosAmigos += "<li>" + listaAmigos[i] + "</li>";
        document.getElementById('listaAmigos').innerHTML = listaHtmlDosAmigos;
    }
}

function sortearAmigo(){
    if (listaAmigos.length < 4){
        alert('É necessário um mínimo de quatro nomes para realizar o sorteio!!!')
    } else {
        indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSorteado = listaAmigos[indiceAleatorio];
        nomeHtmlDoAmigo += "<li>" + 'O amigo sorteado é: ' + amigoSorteado + "</li>";
        document.getElementById('resultado').innerHTML = nomeHtmlDoAmigo;
        inputAmigo.focus();
    }
}