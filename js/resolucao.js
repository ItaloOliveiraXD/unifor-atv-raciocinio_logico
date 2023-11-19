let buttonEnviarModal = document.querySelector('.btn-enviar-modal');
let campoSalario = document.querySelector('#ctrl-salario');
let campoMes = document.querySelector('#ctrl-mes');
let campoResultado = document.querySelector('.resultado');



buttonEnviarModal.onclick = function () {
    let salarioComPonto = campoSalario.value.replace(",", ".");
    let salario = parseFloat(salarioComPonto);
    let qtdMes = campoMes.value;
    let escolha = inputOpcao.value;

    validaSalario(salario);
    manipulaSalario(salario, qtdMes, escolha);
}

function validaSalario(salario) {
    if (isNaN(salario)) {
        campoResultado.removeAttribute('hidden');
        campoResultado.innerHTML = "Informe um salário válido!";
    }
}

function manipulaSalario(salario, qtdMes, escolha) {
    let novoSalario;
    if (escolha === '1') {
        if (salario > 0 && salario <= 1200) {
            novoSalario = salario * (1 + 0.15)
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = 'Aumento de 15% <br> Seu novo salário é R$: ' + novoSalario.toFixed(2);
        } else if (salario > 1200 && salario <= 2400) {
            novoSalario = salario * (1 + 0.10)
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = 'Aumento de 10% <br> Seu novo salário é R$: ' + novoSalario.toFixed(2);
        } else if (salario > 2400) {
            novoSalario = salario * (1 + 0.05)
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = 'Aumento de 5% <br> Seu novo salário é R$: ' + novoSalario.toFixed(2);
        } else {
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = "Informe um salário válido!";
        }
    }

    if (escolha === '2') {
        if (salario > 0) {
            novoSalario = salario + (salario / 3);
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = 'O valor da suas férias é R$: ' + novoSalario.toFixed(2);
        } else {
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = "Informe um salário válido!";
        }

    }

    if (escolha === '3') {
        if (qtdMes > 0 && qtdMes <= 12 || salario > 0) {
            novoSalario = (salario * qtdMes) / 12
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = 'O valor do seu décimo é R$: ' + novoSalario.toFixed(2);
        } else {
            campoResultado.removeAttribute('hidden');
            campoResultado.innerHTML = "Quantidade de meses inválido!";
        }
    }
}