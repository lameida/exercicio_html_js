const form = document.getElementById('form-number');


form.addEventListener('submit', function(e){
    e.preventDefault();


const num_a = Number(document.getElementById('numeroA').value);
const num_b = Number(document.getElementById('numeroB').value);

if (num_b > num_a) {
    alert('Formulário Válido');
    
  } else {
    alert('Formulário inválido. O número B deve ser maior que o número A.');
    
  }  

  });

console.log(form);











