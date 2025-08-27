// perguntas.js
// Array com 10 perguntas e respostas sobre borboletas
const flashcards = [
    {
        categoria: "Borboletas",
        pergunta: "Quantas espécies de borboletas existem no mundo?",
        resposta: "Existem aproximadamente 20.000 espécies de borboletas no mundo."
    },
    {
        categoria: "Borboletas",
        pergunta: "Qual é o ciclo de vida de uma borboleta?",
        resposta: "Ovo, larva (lagarta), pupa (casulo) e adulto (borboleta)."
    },
    {
        categoria: "Borboletas",
        pergunta: "Qual é a borboleta mais comum no Brasil?",
        resposta: "A borboleta-da-couve (Pieris brassicae) é uma das mais comuns."
    },
    {
        categoria: "Borboletas",
        pergunta: "Quanto tempo vive uma borboleta?",
        resposta: "O tempo de vida varia por espécie, mas a maioria vive entre 2 semanas e 2 meses."
    },
    {
        categoria: "Borboletas",
        pergunta: "Qual a maior borboleta do mundo?",
        resposta: "A borboleta-asas-de-pássaro-rainha-alexandra, com envergadura de até 31 cm."
    },
    {
        categoria: "Borboletas",
        pergunta: "Como as borboletas ajudam no ecossistema?",
        resposta: "Elas são importantes polinizadoras e servem de alimento para outros animais."
    },
    {
        categoria: "Borboletas",
        pergunta: "O que as borboletas comem?",
        resposta: "A maioria se alimenta de néctar de flores, mas algumas também comem frutas em decomposição."
    },
    {
        categoria: "Borboletas",
        pergunta: "Como as borboletas veem o mundo?",
        resposta: "Elas enxergam cores de forma diferente dos humanos, podendo detectar ultravioleta."
    },
    {
        categoria: "Borboletas",
        pergunta: "Qual a função das cores vibrantes nas asas?",
        resposta: "Servem para camuflagem, alerta a predadores e atração de parceiros."
    },
    {
        categoria: "Borboletas",
        pergunta: "As borboletas migratórias viajam para onde?",
        resposta: "A borboleta-monarca migra do Canadá/EUA para o México, percorrendo até 4.000 km."
    }
];

// Criar os cartões
flashcards.forEach(card => {
    criaCartao(card.categoria, card.pergunta, card.resposta);
});
