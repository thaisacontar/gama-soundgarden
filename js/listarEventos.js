// CARDS DE EVENTOS NA PÁGINA 'TODOS OS EVENTOS' (eventos.html)

// ARQUIVO PRONTO! \o/

async function showEvents() { // async faz uma função retornar uma promise

    const findEvents = await fetch('https://soundgarden-api.vercel.app/events'); // conexão com a API - não especifiquei o método de requisição, logo: GET

    const list = await findEvents.json(); // transformar o array JSON (que vem da API) em objeto JSON

    const allEvents = document.querySelector('#all-events'); // seleciono local da página onde cairão os dados da API (posicionamento dos dados na página)

    list.forEach(event => { // listar e criar cada evento
        const article = document.createElement('article'); // criar os articles (os eventos em formato cards)
        
        article.className = "evento card p-5 m-3"; // definir as classes dos eventos - tem que adicionar todas pq cada uma tem estilos css definidos

        const data = new Date(event.scheduled); // transformar o objeto em data

        const h2 = document.createElement('h2'); // createElement pra criar um elemento HTML (h2) dentro do JS pra ser inserido de volta no documento HTML
        h2.innerText = event.name + ' - ' + data.toString(); // concatenar nome do evento (h2) com a data acima formatada
        article.appendChild(h2); // inserir elemento ao documento HTML para, então, ficar visível ao usuário

        // mesmo raciocínio acima pros demais itens que compõem o card de eventos:

        const h4 = document.createElement('h4');
        h4.innerText = event.attractions; // a palavra 'attractions' (e demais abaixo) vem da documentação API
        article.appendChild(h4);

        const p = document.createElement('p');
        p.innerText = event.description;
        article.appendChild(p);

        const button = document.createElement('button');
        button.className = "btn btn-primary"; // botão tem estilo diferente, por isso a linha de classes
        button.innerText = 'reservar ingresso';
        article.appendChild(button);

        allEvents.appendChild(article); // inserir o article (os cards) dentro do objeto (da página)

    })

}

showEvents() // depois de criar uma função, chamo ela ao final