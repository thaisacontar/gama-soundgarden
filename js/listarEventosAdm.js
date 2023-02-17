<<<<<<< HEAD
// VARIÁVEIS 

const admEventos = { // criar um objeto com os dados necessários vindos da API (separados por vírgula)
  nomeEvento : document.getElementById('nome'),
  atracoesEvento : document.getElementById('atracoes'),
  descricaoEvento : document.getElementById('descricao'),
  dataEvento : document.getElementById('data'),
  lotacaoEvento : document.getElementById('lotacao'),
  formularioCadastro : document.getElementById('formulario')
}

const dados = { // transformar o objeto em strings (para JSON) adicionando .value em cada
  "nome": nomeEvento.value,
  "atracoes": atracoesEvento.value,
  "descricao": descricaoEvento.value,
  "agenda": dataEvento.value,
  "capacidade": lotacaoEvento.value,
};

const apiURL = 'https://soundgarden-api.vercel.app/events';

=======
// VARIÁVEIS 

const admEventos = { // criar um objeto com os dados necessários vindos da API (separados por vírgula)
  nomeEvento : document.getElementById('nome'),
  atracoesEvento : document.getElementById('atracoes'),
  descricaoEvento : document.getElementById('descricao'),
  dataEvento : document.getElementById('data'),
  lotacaoEvento : document.getElementById('lotacao'),
  formularioCadastro : document.getElementById('formulario')
}

const dados = { // transformar o objeto em strings (para JSON) adicionando .value em cada
  "nome": nomeEvento.value,
  "atracoes": atracoesEvento.value,
  "descricao": descricaoEvento.value,
  "agenda": dataEvento.value,
  "capacidade": lotacaoEvento.value,
};

const apiURL = 'https://soundgarden-api.vercel.app/events';

>>>>>>> 6639e138fa88974ff8c98570e553fb145c43194d
