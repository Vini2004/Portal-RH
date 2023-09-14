function salarioLiquido() {
    var salario = parseFloat(document.getElementById("salarioBruto").value);
    var result = document.getElementById("result"); // Changed to correct ID
    var slliquido;

    if (salario <= 1320.00) {
        slliquido = salario - (salario * 0.075);
    } else if (salario > 1320.00 && salario <= 2571.29) {
        slliquido = salario - (salario * 0.09);
    } else if (salario > 2571.29 && salario <= 3856.94) {
        slliquido = salario - (salario * 0.12);
    } else if (salario > 3856.94 && salario <= 7507.49) {
        slliquido = salario - (salario * 0.14);
    } else {
        slliquido = salario - 877.24;
    }

    var resp = `O VALOR DO SALÁRIO É R$${slliquido.toFixed(2)}`; 
    result.innerHTML = resp; 

    result.parentElement.classList.remove("hide"); 
}

function calcularFerias() {
    var salario = parseFloat(document.getElementById("salarioBruto").value);
    var diasFerias = parseInt(document.getElementById("diasferias").value);

    if (diasFerias <= 30) {
        var valorFerias = (salario / 30) * diasFerias;

        var result = document.getElementById("result");
        var resp = `O VALOR DAS FÉRIAS É R$${valorFerias.toFixed(2)}`;
        result.innerHTML = resp;
        result.parentElement.classList.remove("hide");
    } else {
        var result = document.getElementById("result");
        var resp = "A quantidade de dias de férias não pode ser maior que 30.";
        result.innerHTML = resp;
        result.parentElement.classList.remove("hide");
    }
}


function calcularRecisao() {
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    const dataInicioContrato = document.getElementById("dataInicioContrato").value;
    const dataTerminoContrato = document.getElementById("dataTerminoContrato").value;
    const motivoTermino = document.getElementById("motivoTermino").value;
    const feriasVencidas = document.querySelector('input[name="feriasVencidas"]:checked').value;
    const avisoPrevio = document.querySelector('input[name="avisoPrevio"]:checked').value;


    if (!salarioBruto || !dataInicioContrato || !dataTerminoContrato || motivoTermino === "Selecione uma das opções" || !feriasVencidas || !avisoPrevio) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    
    const dataInicio = new Date(dataInicioContrato.split("/").reverse().join("-"));
    const dataTermino = new Date(dataTerminoContrato.split("/").reverse().join("-"));

   
    const mesesTrabalhados = (dataTermino - dataInicio) / (1000 * 60 * 60 * 24 * 30);

   
    let valorRescisao = salarioBruto;

    if (feriasVencidas === "sim") {
        valorRescisao += (salarioBruto / 12) * mesesTrabalhados;
    }

    if (avisoPrevio === "sim") {
        valorRescisao += salarioBruto;
    }

    
    switch (motivoTermino) {
        case "1": 
            valorRescisao *= 0.8; 
            break;
        case "2": 
            valorRescisao *= 1.0; 
            break;
        case "3": 
            valorRescisao *= 0.5;
            break;
        case "4": 
            valorRescisao *= 0.75; 
            break;
    }

    document.getElementById("result").innerHTML = `O valor da rescisão é de R$ ${valorRescisao.toFixed(2)}`;
}

function redirecionarParaHome() {
    window.location.href = 'home.html'; 
}

function redirecionarParaSalario() {
    window.location.href = 'viewSalarioLiquido.html';
}

function redirecionarParaFerias() {
    window.location.href = 'ferias.html';
}

function redirecionarParaRecisao() {
    window.location.href = 'recisao.html';
}