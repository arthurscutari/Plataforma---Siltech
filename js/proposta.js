
const gerarPdf = document.getElementById('btn-gerar-pdf')
const proposta = document.getElementById('page')

gerarPdf.addEventListener('click', (event) => {

    
    event.preventDefault()
    html2pdf().from(proposta).save().then(()=>{
    window.location.href = "./index.html"
    })
    
})