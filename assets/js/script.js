const calcular = document.querySelector("[data-calcular]");

function calculaImc() {
  const peso = document.querySelector("[data-peso]").value,
    altura = document.querySelector("[data-altura]").value,
    resultado = document.querySelector("[data-resultado]");

  const imc = (peso / (altura * altura)).toFixed(2);

  if (peso !== "" && altura !== "") {
    if (imc < 18.5) {
      resultado.innerText = `O resultado do calculo foi de ${imc}. E você se encontra abaixo do peso.`;
    } else if (imc < 25) {
      resultado.innerText = `O resultado do calculo foi de ${imc}. E você se encontra no peso normal.`;
    } else if (imc < 30) {
      resultado.innerText = `O resultado do calculo foi de ${imc}. E você se encontra em sobrepeso.`;
    } else if (imc < 35) {
      resultado.innerText = `O resultado do calculo foi de ${imc}. E você se encontra em obesidade do grau 1.`;
    } else if (imc < 40) {
      resultado.innerText = `O resultado do calculo foi de ${imc}. E você se encontra em obesidade do grau 2.`;
    } else {
      resultado.innerText = `O resultado do calculo foi de ${imc}. E você se encontra em obesidade do grau 3.`;
    }
  } else {
    resultado.innerText = `Nenhum valor inserido, preencha os campos corretamente.`;
  }
}

calcular.addEventListener("click", calculaImc);
