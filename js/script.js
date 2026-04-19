const expandir = document.getElementById('expansao')
const input = document.getElementById('input-quantidade')
const gerarPDF = document.getElementById ('btn-gerar')
const formProposta = document.getElementById('form-proposta')



const form = document.getElementById('form-proposta');

form.addEventListener('submit', (e) => {


  const nome = document.getElementById('nome-form__proposta').value;
  const local = document.getElementById('local-form__proposta').value;

  console.log(nome)
  console.log(local)

  const dados = {
    nome: nome,
    local: local
  };

  localStorage.setItem('propostaData', JSON.stringify(dados))
      e.preventDefault();
  window.location.href = "proposta.html"


  
});