
/*PopUp*/ 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


/* =============================
      Botao - Novo Curriculo 
===============================*/
function cadastroDados(){
  if(!document.fCadastro.txtNome.value.includes("Carlos") && !document.fCadastro.txtCargo.value.include("Desenvolvedor")){
    alert("Nome e Cargo Inválidos!")
  }
  else{
    alert("Cadastro Realizado, com Sucesso!!!")
  }
}

/* Conta Quantidade de vezes que o usuário clicou*/
var qtdDeCurriculos = 0;

function qtdCurriculo(){
  qtdDeCurriculos = qtdDeCurriculos + 1;
  var cont = document.querySelector("#cont");
  cont.textContent = qtdDeCurriculos;
}

var botao = document.querySelector("#novoCadastro");
botao.onclick = qtdCurriculo;

