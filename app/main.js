//aqui estão os livros
let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
  const res = await fetch(endpointDaApi);
  livros = await res.json();
  livros = aplicarDescontos(livros);
  exibiLivro(livrosComDesconto)
}
