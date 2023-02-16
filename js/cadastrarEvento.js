// FORMULÁRIO DE CADASTRO DE EVENTOS NA PÁGINA 'NOVO EVENTO' (cadastro-evento.html)

const apiURL = 'https://soundgarden-api.vercel.app/events';

const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const form = document.querySelector("formulario");

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const envioEvento = document.getElementById ('btnCadastro')

  envioEvento = function (event) {
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta do servidor:", data);
        alert("Evento criado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao processar a resposta do servidor: ", error);
      });
  };
}