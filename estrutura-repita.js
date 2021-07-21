function acaoBotao() {
    var sairloop, valor01, valor02
    do{
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        console.log( valor01, valor02, sairloop )
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt( valor02 ) )
        sairloop = prompt("Deseja sair? S/N")    
    }while(sairloop == "N")
} 