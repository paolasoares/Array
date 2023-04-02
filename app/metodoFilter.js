const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', FiltrarLivros))

function FiltrarLivros() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = categoria == 'disponivel' ? FiltrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
  exibiLivro(livrosFiltrados);
  
  if (categoria == `disponivel`) {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibiValorTotalDosLivrosDisponiveisNaTela(valorTotal)
  }
}

function FiltrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function FiltrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibiValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
  
}