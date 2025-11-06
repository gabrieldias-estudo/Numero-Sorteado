let listaNumero=[];
let listaSorteada=[];
let resultado=getElement("resultado");
let textResult;
let color;
function sortear(){
    let quantidadeSortida=getNumbers("quantidade");
    let primeiroNumero=getNumbers("de");
    let ultimoNumero=getNumbers("ate");
    let diferenca= (ultimoNumero - primeiroNumero)+1;
    try{
        if(primeiroNumero > ultimoNumero){         
            erro("O número incial é maior que o número final!Digite um intervalo válido!");
        }else if(primeiroNumero == ultimoNumero){
            erro("Numeros iguais,coloque o ultimo numero um ou mais valores maiores que o primeiro!");
        }else if(quantidadeSortida > diferenca){
            erro("A quantidade sortida é maior que os números no intervalo solicitado");
        }else{
            definirLista(primeiroNumero,ultimoNumero);
            defineListaSorteada(quantidadeSortida);
            textResult=`Números Sorteados: ${listaSorteada}`;
            color="#55ff2bff";
            botaoDeReiniciar("container__botao");
        }
        mostraResultado();
    }catch(err){
        console.log("Você Cometeu um erro: ",err);
    }
}

function getElement(id){
    return document.getElementById(id); 
}

function getNumbers(id){
    return parseInt(getElement(id).value);
}

function definirLista(first,last){
    for ( let i=first ; i<=last ; i++ ){
        listaNumero.push(i);
    }
}

function defineListaSorteada(qnt){
    for(let j=1;j<=qnt;j++){
        let numero=Math.floor(Math.random()*listaNumero.length);
        listaSorteada.push(listaNumero[numero]);
    } 
}

function botaoDeReiniciar(classType){
    let botaoReiniciar=document.getElementById("btn-reiniciar");
    return botaoReiniciar.className=classType;
}

function reiniciaNumeros(id){
    let variavel=getElement(id)
    return variavel.value="";

}

function resetar(){
    reiniciaNumeros("quantidade");
    reiniciaNumeros("de");
    reiniciaNumeros("ate");
}

function erro(text){
    textResult=text;
    color="#ff4141ff";
    mostraResultado()
    resetar();
    

}
function reiniciar(){
    listaNumero=[];
    listaSorteada=[];
    textResult="Números sorteados:  nenhum até agora";
    color="#fff"
    mostraResultado()
    resetar();
    botaoDeReiniciar("container__botao-desabilitado")

}

function mostraResultado(){
    console.log(textResult);
    resultado.innerHTML=textResult;
    resultado.style.color=color; 
}