
const gerarPdf = document.getElementById('btn-gerar-pdf')
const proposta = document.getElementById('page')

gerarPdf.addEventListener('click', (event) => {

    
    event.preventDefault()
    html2pdf().from(proposta).save().then(()=>{
    localStorage.removeItem('propostaData');
    window.location.href = "./index.html"
    })
    
})
const dados = JSON.parse(localStorage.getItem('propostaData'));

if (dados) {
  document.getElementById('nome-proposta').textContent = dados.nome || '';
  document.getElementById('local-proposta').textContent = dados.local || '';
} else {
  // fallback (evita tela vazia ou erro)
  console.warn("Nenhum dado encontrado");

}