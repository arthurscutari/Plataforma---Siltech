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

//Código navegação//

const navProposta = document.querySelector('.nav-proposta')
const navDashboard = document.querySelector('.nav-dashboard')
const navHistorico = document.querySelector('.nav-historico')
const navBanco = document.querySelector('.nav-banco')
const navConfig = document.querySelector('.nav-config')
const navPerfil = document.querySelector('.nav-perfil')

const secProposta = document.querySelector('.section-proposta')
const secDashboard = document.querySelector('.section-dashboard')
const secHistorico = document.querySelector('.section-historico')
const secBanco = document.querySelector('.section-banco')
const secConfig = document.querySelector('.section-config')
const secPerfil = document.querySelector('.section-perfil')

navProposta.addEventListener('click', ()=> {



  secProposta.classList.remove('hidden')
  secDashboard.classList.add('hidden')
  secHistorico.classList.add('hidden')
  secBanco.classList.add('hidden')
  secConfig.classList.add('hidden')
  secPerfil.classList.add('hidden')

})

navDashboard.addEventListener('click', ()=> {



  secProposta.classList.add('hidden')
  secDashboard.classList.remove('hidden')
  secHistorico.classList.add('hidden')
  secBanco.classList.add('hidden')
  secConfig.classList.add('hidden')
  secPerfil.classList.add('hidden')

})
navHistorico.addEventListener('click', ()=> {



  secProposta.classList.add('hidden')
  secDashboard.classList.add('hidden')
  secHistorico.classList.remove('hidden')
  secBanco.classList.add('hidden')
  secConfig.classList.add('hidden')
  secPerfil.classList.add('hidden')

})
navBanco.addEventListener('click', ()=> {



  secProposta.classList.add('hidden')
  secDashboard.classList.add('hidden')
  secHistorico.classList.add('hidden')
  secBanco.classList.remove('hidden')
  secConfig.classList.add('hidden')
  secPerfil.classList.add('hidden')

})
navConfig.addEventListener('click', ()=> {



  secProposta.classList.add('hidden')
  secDashboard.classList.add('hidden')
  secHistorico.classList.add('hidden')
  secBanco.classList.add('hidden')
  secConfig.classList.remove('hidden')
  secPerfil.classList.add('hidden')

})
navPerfil.addEventListener('click', ()=> {



  secProposta.classList.add('hidden')
  secDashboard.classList.add('hidden')
  secHistorico.classList.add('hidden')
  secBanco.classList.add('hidden')
  secConfig.classList.add('hidden')
  secPerfil.classList.remove('hidden')

})