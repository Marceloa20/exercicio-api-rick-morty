let IdCharacter = document.getElementById('IdCharacter');
let buttonSend = document.getElementById('btnSend');
let content = document.getElementById('content');
let image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json()) //espera a resposta da API e quando responde transforma a resposta em objeto json
    .then((data) => { // dados de fato

        return data; // retorna os dados
    }); // data = são os dados 

    return result;
}

buttonSend.addEventListener('click', async (e) => {
    e.preventDefault();

    const result = await fetchApi(IdCharacter.value); // valor que o usuário digita no input, guarda nessa variável result
    content.textContent = `${JSON.stringify(result, undefined, 2)}`; // transforma o json em string 

    image.src = `${result.image}`; // muda a propiedade src para result.image
})