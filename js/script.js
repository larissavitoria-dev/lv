function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
      result = "Por favor, insira números válidos!";
  } else {
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            result = "Divisão por zero!";
          } else {
            result = num1 / num2;
          }
          break;
        default:
          result = "Operação inválida!";
      }
  }
  
  document.getElementById('result').textContent = "Resultado: " + result;
}





  function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;
  
    switch (conversionType) {
      case 'celsiusToFahrenheit':
        result = (value * 9/5) + 32;
        break;
      case 'metersToCentimeters':
        result = value * 100;
        break;
      case 'kilogramsToPounds':
        result = value * 2.20462;
        break;
      default:
        result = "Tipo de conversão inválido!";
    }
  
    document.getElementById('result').textContent = "Resultado: " + result;
  }

  function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  let bmi = weight / (height * height);
  let classification;

  if (bmi < 18.5) {
    classification = "Abaixo do peso";
  } else if (bmi < 25) {
    classification = "Peso normal";
  } else if (bmi < 30) {
    classification = "Sobrepeso";
  } else {
    classification = "Obesidade";
  }

  document.getElementById('result').textContent = "IMC: " + bmi.toFixed(2) + " - Classificação: " + classification;
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const message = document.getElementById("message").value;
  const formMessage = document.getElementById("form-message");

  if (!name || !email || !whatsapp || !message) {
      formMessage.textContent = "Por favor, preencha todos os campos obrigatórios.";
      formMessage.classList.add("error");
      formMessage.classList.remove("success");
      return false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      formMessage.textContent = "Por favor, insira um e-mail válido.";
      formMessage.classList.add("error");
      formMessage.classList.remove("success");
      return false;
  }

  const whatsappPattern = /^[0-9]{10,11}$/;
  if (!whatsappPattern.test(whatsapp)) {
      formMessage.textContent = "Por favor, insira um número de WhatsApp válido (10 ou 11 dígitos).";
      formMessage.classList.add("error");
      formMessage.classList.remove("success");
      return false;
  }

  formMessage.textContent = "Mensagem enviada com sucesso!";
  formMessage.classList.add("success");
  formMessage.classList.remove("error");

  document.getElementById("contact-form").reset();
  
  return false; 
}

    