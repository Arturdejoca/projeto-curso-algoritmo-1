

function acaoBotao() {
    var valor01, valor02, resultado, operacao
    resultado = 0;
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: EX: +, -, *, /")
    valor02 = prompt("Digite o segundo valor: ")

    if ( operacao == "+" ){
        console.log(resultado, valor01, valor02, operacao ); 
        resultado =  parseInt( valor01 ) + parseInt( valor02 )
    }else if(operacao == "-"){
        resultado =  parseInt( valor01 ) - parseInt( valor02 )
    }else if(operacao == "*"){
        resultado =  parseInt( valor01 ) * parseInt( valor02 )
    }else if(operacao == "/"){
        resultado =  parseInt( valor01 ) / parseInt( valor02 )
    }
    console.log(resultado);
    document.getElementById("paragrafo").innerText = `resultado ${resultado}`
}
