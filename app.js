// app.js
function criaCartao(categoria, pergunta, resposta) {
    // Selecionar o container
    let container = document.getElementById('container');
    
    // Criar elemento article para o cartão
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    
    // Adicionar o conteúdo do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo__frente">
                <h3>${categoria}</h3>
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__verso">
                <p>${resposta}</p>
            </div>
        </div>
    `;
    
    // Variável para controlar a visibilidade da resposta
    let respostaEstaVisivel = false;
    
    // Função para virar o cartão
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    
    // Adicionar evento de clique ao cartão
    cartao.addEventListener('click', viraCartao);
    
    // Adicionar o cartão ao container
    container.appendChild(cartao);
}
