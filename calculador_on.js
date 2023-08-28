function calculadora(){
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtralçao (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**) '));
    console.log(operacao);
    if (!operacao || operacao >= 7 ){
        alert('Erro !! Operação invalida');
        calculadora();
    }else  {
        let n1 = Number(prompt('Insira um valor'));
        let n2 = Number(prompt('Insira um outro Valor'));
        let resultado;

        if (!n1 || !n2){
            alert('Erro - Digite somente números');
            calculadora();
        }else{
            function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a:${n2} = ${resultado}`);
                novaOperacao();
            }
            function novaOperacao(){
                let opcao = prompt('Desejá fazer mais alguma operação ? Sim(1) ou Não(2)');
                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até mais');
                } else { 
                    alert('Digite uma opção valida');
                    novaOperacao();
                }
        }}

        if (operacao == 1){
            soma();
        }else if (operacao == 2){
            subtracao();
        }else if (operacao == 3){
            multiplicacao();
        }else if (operacao == 4){
            divReal();
        }else if (operacao == 5){
            divisaoInteira();
        }else if (operacao == 6){
            potenciacao();
        }
    };
}
calculadora();