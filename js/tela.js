let btnEnviarAtividade = document.querySelector('.btn-enviar-atividade');
let btnFecharModal = document.querySelector('.btn-fechar-modal');


let inputOpcao = document.querySelector('.opcao');
let divMes = document.querySelector('.div-mes');
let sectionAtividade = document.querySelector('#atividade');
let sectionModal = document.querySelector('#modal')

btnEnviarAtividade.onclick = function () {
    let escolha = inputOpcao.value;
    if(!retornaInicio(escolha)) {
        mostraMeses(escolha);
        sectionAtividade.setAttribute('hidden', true);
        sectionModal.removeAttribute('hidden');
    }
}

function retornaInicio(valor) {
    if (valor === '4') {
        btnEnviarAtividade.setAttribute('href', './index.html');
        return true;
    }
}

function mostraMeses(valor) {
    if (valor == '3') {
        divMes.removeAttribute('hidden')
    }
}

btnFecharModal.onclick = function () {
    campoSalario.value = "";
    campoMes.value = "";
    campoResultado.setAttribute('hidden', true);
    sectionAtividade.removeAttribute('hidden');
    sectionModal.setAttribute('hidden', true);
}