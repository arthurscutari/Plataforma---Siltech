
const gerarPdf = document.getElementById('btn-gerar-pdf')
const proposta = document.getElementById('page')
const cancelarPDF = document.getElementById('btn-cancelar-pdf')


gerarPdf.addEventListener('click', (event) => {

    
    event.preventDefault()
    html2pdf().from(proposta).save().then(()=>{
    localStorage.removeItem('propostaData');
    window.location.href = "./index.html"
    })
    
})
const dados = JSON.parse(localStorage.getItem('propostaData'));

if (dados) {
  document.getElementById('canal-proposta').textContent = dados.canal || '';
  document.getElementById('nome-proposta').textContent = dados.nome || '';
  document.getElementById('local-proposta').textContent = dados.local || '';
  document.getElementById('celular-proposta').textContent = dados.celular || '';
  document.getElementById('modulo-proposta').textContent = dados.modulo || '';
  document.getElementById('inversor-proposta').textContent = dados.inversor || '';
  document.getElementById('instalacao-proposta').textContent = dados.instalacao || '';
  document.getElementById('telhado-proposta').textContent = dados.telhado || '';
  document.getElementById('promocao-proposta').textContent = dados.promocao || '';
  document.getElementById('quantidade-proposta').textContent = dados.quantidade || '';

 
} else {
  // fallback (evita tela vazia ou erro)
  console.warn("Nenhum dado encontrado");

}

cancelarPDF.addEventListener('click',()=>{
  
localStorage.removeItem('propostaData');
    window.location.href = "./index.html"

})