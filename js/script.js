const gerarPDF = document.getElementById ('btn-gerar')

gerarPDF.addEventListener('click', (e) => {

  e.preventDefault();

  const canalFormulario = document.getElementById('canal-form__proposta').value;
  const nomeFormulario = document.getElementById('nome-form__proposta').value;
  const localFormulario = document.getElementById('local-form__proposta').value;
  const celularFormulario = document.getElementById('celular-form__proposta').value;
  const moduloFormulario = document.getElementById('modulo-form__proposta').value;
  const inversorFormulario = document.getElementById('inversor-form__proposta').value;
  const instalacaoFormulario = document.getElementById('instalacao-form__proposta').value;
  const telhadoFormulario = document.getElementById('telhado-form__proposta').value;
  const promocaoFormulario = document.getElementById('promocao-form__proposta').value;
  const quantidadeFormulario = document.getElementById('quantidade-form__proposta').value;




  const dados = {
    canal:canalFormulario,
    nome: nomeFormulario,
    local: localFormulario,
    celular: celularFormulario,
    modulo: moduloFormulario,
    inversor: inversorFormulario,
    instalacao: instalacaoFormulario,
    telhado: telhadoFormulario,
    promocao: promocaoFormulario,
    quantidade: quantidadeFormulario
  };

  localStorage.setItem('propostaData', JSON.stringify(dados))
    
  window.location.href = "proposta.html"

  
});