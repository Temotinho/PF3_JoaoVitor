document.getElementById("btn_calcular").addEventListener("click",function(){
    let resultado = document.getElementById("lbl_resultado")
    let divResultado = document.getElementById("resultado")
    
    let ValorAplicadoMensalmente = parseFloat(document.getElementById("valorAplicado").value)
    let TaxaDeJuros = parseFloat(document.getElementById("taxaJuros").value / 100)
    let NumeroParcelas = parseFloat(document.getElementById("numeroParcelas").value)

    if (ValorAplicadoMensalmente != NaN && TaxaDeJuros != 0 && NumeroParcelas != NaN)
     {
        var formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'BRL',
        });
    
        let ValorFuturo = (ValorAplicadoMensalmente * ((((1 + TaxaDeJuros) ** NumeroParcelas) - 1) / TaxaDeJuros)).toFixed(2)
        divResultado.style.display = "block"
        resultado.innerHTML = `Jose da Silva, se voce aplicar ${formatter.format(ValorAplicadoMensalmente)}, à taxa de juros de ${TaxaDeJuros}% ao mês, durante ${NumeroParcelas} meses, acumulará uma poupança de ${formatter.format(ValorFuturo)}`
    }
    else 
    {
        divResultado.style.display = "block"
        resultado.innerHTML = "Complete o formulario acima"
    }
})

