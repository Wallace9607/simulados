const questions = [
    // --- 01 a 06 já fornecidas anteriormente (Mantidas para completar as 30) ---
    { id: 1, difficulty: "easy", q: "Como é definido o conjunto dos números naturais (N)?", options: [{ text: "Pelos números {0, 1, 2, 3, ...}", correct: true, rationale: "O conjunto N é formado por todos os números inteiros não negativos." }, { text: "Pelos números {..., -2, -1, 0, 1, 2, ...}", correct: false, rationale: "Este é o conjunto dos números inteiros (Z)." }, { text: "Apenas por números ímpares positivos.", correct: false, rationale: "N inclui pares e ímpares." }, { text: "Por números que podem ser escritos como fração.", correct: false, rationale: "Esta é a definição de números racionais." }] },
    { id: 2, difficulty: "medium", q: "Qual propriedade garante que a ordem das parcelas não altera a soma (a + b = b + a)?", options: [{ text: "Comutativa da adição", correct: true, rationale: "A propriedade comutativa permite trocar a ordem dos termos." }, { text: "Elemento neutro", correct: false, rationale: "O elemento neutro diz que a + 0 = a." }, { text: "Associativa", correct: false, rationale: "Refere-se ao agrupamento." }, { text: "Distributiva", correct: false, rationale: "Relaciona multiplicação com adição." }] },
    { id: 3, difficulty: "medium", q: "Qual é o resultado da propriedade 'Produto de potências de mesma base' (a^m * a^n)?", options: [{ text: "a^(m + n)", correct: true, rationale: "Na multiplicação de bases iguais, somam-se os expoentes." }, { text: "a^(m - n)", correct: false, rationale: "Isso ocorre na divisão." }, { text: "a^(m * n)", correct: false, rationale: "Isso ocorre na potência de potência." }, { text: "(a * b)^m", correct: false, rationale: "Potência de um produto." }] },
    { id: 4, difficulty: "hard", q: "Qual o resultado de (-1)² e -1², respectivamente?", options: [{ text: "1 e -1", correct: true, rationale: "O parêntese inclui o sinal na base; sem ele, o sinal apenas se repete." }, { text: "1 e 1", correct: false, rationale: "-1² é -(1*1)." }, { text: "-1 e -1", correct: false, rationale: "Base negativa com expoente par fica positiva." }, { text: "-1 e 1", correct: false, rationale: "Invertido." }] },
    { id: 5, difficulty: "medium", q: "Um automóvel percorre 480 km em 2 horas. Quantos km percorrerá em 6 horas?", options: [{ text: "1440 km", correct: true, rationale: "Regra de três direta: 480 * 3 = 1440." }, { text: "960 km", correct: false, rationale: "Cálculo incorreto." }, { text: "240 km", correct: false, rationale: "Cálculo incorreto." }, { text: "1200 km", correct: false, rationale: "Cálculo incorreto." }] },
    { id: 6, difficulty: "hard", q: "Qual a diferença entre a Regra de Três Simples e a Composta?", options: [{ text: "A simples envolve duas grandezas, enquanto a composta envolve três ou mais.", correct: true, rationale: "Definição baseada no número de grandezas." }, { text: "A simples é direta e a composta é inversa.", correct: false, rationale: "Ambas podem ser os dois." }, { text: "A simples usa inteiros.", correct: false, rationale: "Incorreto." }, { text: "Não há diferença.", correct: false, rationale: "Incorreto." }] },

    // --- NOVAS QUESTÕES (7 a 30) ---
    // PRIORIDADE: POTENCIAÇÃO
    {
        id: 7,
        difficulty: "easy",
        q: "Qual o valor de qualquer número 'a' (diferente de zero) elevado ao expoente 0?",
        options: [
            { text: "1", correct: true, rationale: "Por definição, a^0 = 1 para qualquer a ≠ 0." },
            { text: "0", correct: false, rationale: "Qualquer número multiplicado por zero é zero, mas na potência o resultado é 1." },
            { text: "a", correct: false, rationale: "Isso seria a^1." },
            { text: "Indeterminado", correct: false, rationale: "Apenas 0^0 é usualmente tratado como indeterminação." }
        ]
    },
    {
        id: 8,
        difficulty: "medium",
        q: "Como simplificar a expressão (2³)⁴?",
        options: [
            { text: "2¹²", correct: true, rationale: "Potência de potência: multiplicam-se os expoentes (3 * 4 = 12)." },
            { text: "2⁷", correct: false, rationale: "Aqui você somou os expoentes, o que só ocorre no produto de bases iguais." },
            { text: "2¹", correct: false, rationale: "Incorreto." },
            { text: "8⁴", correct: false, rationale: "Embora matematicamente igual, a simplificação de potência pede a base 2." }
        ]
    },
    {
        id: 9,
        difficulty: "hard",
        q: "Qual é a forma de potência da raiz: ∛x²?",
        options: [
            { text: "x^(2/3)", correct: true, rationale: "Regra: o expoente vira numerador e o índice da raiz vira denominador ('quem tá no sol vai pra sombra')." },
            { text: "x^(3/2)", correct: false, rationale: "Inverteu a posição do índice e do expoente." },
            { text: "x⁶", correct: false, rationale: "Multiplicou em vez de transformar em fração." },
            { text: "x^-6", correct: false, rationale: "Incorreto." }
        ]
    },
    {
        id: 10,
        difficulty: "medium",
        q: "Quanto é 5⁻²?",
        options: [
            { text: "1/25", correct: true, rationale: "Expoente negativo inverte a base: 1/5² = 1/25." },
            { text: "-25", correct: false, rationale: "O expoente negativo não torna o número negativo, ele inverte a base." },
            { text: "25", correct: false, rationale: "Esqueceu de inverter a base." },
            { text: "1/10", correct: false, rationale: "Confundiu potência com multiplicação por 2." }
        ]
    },
    {
        id: 11,
        difficulty: "easy",
        q: "Qual o resultado de (-2)³?",
        options: [
            { text: "-8", correct: true, rationale: "Base negativa com expoente ímpar mantém o sinal negativo." },
            { text: "8", correct: false, rationale: "O sinal só ficaria positivo se o expoente fosse par." },
            { text: "-6", correct: false, rationale: "Multiplicou a base pelo expoente (erro comum)." },
            { text: "6", correct: false, rationale: "Incorreto." }
        ]
    },
    {
        id: 12,
        difficulty: "hard",
        q: "Simplifique: (a² * b³)². ",
        options: [
            { text: "a⁴ * b⁶", correct: true, rationale: "Potência de um produto: eleva-se cada fator ao expoente externo." },
            { text: "a⁴ * b⁵", correct: false, rationale: "Esqueceu de multiplicar o expoente do b." },
            { text: "a² * b⁶", correct: false, rationale: "Esqueceu de elevar o a." },
            { text: "(ab)⁷", correct: false, rationale: "Somou expoentes de bases diferentes." }
        ]
    },
    {
        id: 13,
        difficulty: "medium",
        q: "O que caracteriza um número irracional?",
        options: [
            { text: "Decimal infinita e não periódica.", correct: true, rationale: "Números como π ou √2 não podem ser escritos como fração exata." },
            { text: "Qualquer número negativo.", correct: false, rationale: "Negativos podem ser inteiros ou racionais." },
            { text: "Dízimas periódicas.", correct: false, rationale: "Dízimas periódicas são racionais, pois têm geratriz." },
            { text: "Números primos.", correct: false, rationale: "Primos são naturais." }
        ]
    },
    {
        id: 14,
        difficulty: "medium",
        q: "Na regra de três composta, se aumentarmos o número de operários, o tempo para terminar a obra diminui. Essas grandezas são:",
        options: [
            { text: "Inversamente proporcionais", correct: true, rationale: "Quando uma grandeza aumenta e a outra diminui na mesma razão, a relação é inversa." },
            { text: "Diretamente proporcionais", correct: false, rationale: "Na direta, ambas aumentariam juntas." },
            { text: "Equivalentes", correct: false, rationale: "Termo incorreto para o contexto." },
            { text: "Nulas", correct: false, rationale: "Incorreto." }
        ]
    },
    {
        id: 15,
        difficulty: "easy",
        q: "Qual o valor de √144?",
        options: [
            { text: "12", correct: true, rationale: "Pois 12 * 12 = 144." },
            { text: "14", correct: false, rationale: "14 * 14 = 196." },
            { text: "11", correct: false, rationale: "11 * 11 = 121." },
            { text: "72", correct: false, rationale: "Dividiu por 2 em vez de tirar a raiz." }
        ]
    },
    {
        id: 16,
        difficulty: "hard",
        q: "Resolva: 2⁵ / 2³.",
        options: [
            { text: "4", correct: true, rationale: "2^(5-3) = 2² = 4." },
            { text: "2", correct: false, rationale: "Subtraiu os expoentes mas esqueceu de elevar a base ao resultado." },
            { text: "8", correct: false, rationale: "Incorreto." },
            { text: "2⁸", correct: false, rationale: "Somou os expoentes em uma divisão." }
        ]
    },
    {
        id: 17,
        difficulty: "medium",
        q: "O conjunto dos números Reais (R) é formado pela união de quais conjuntos?",
        options: [
            { text: "Racionais e Irracionais", correct: true, rationale: "R = Q ∪ I." },
            { text: "Naturais e Inteiros apenas", correct: false, rationale: "Faltam os outros subconjuntos." },
            { text: "Apenas números positivos", correct: false, rationale: "Reais incluem negativos e zero." },
            { text: "Inteiros e Irracionais apenas", correct: false, rationale: "Faltam os Racionais não inteiros." }
        ]
    },
    {
        id: 18,
        difficulty: "easy",
        q: "O que é uma dízima periódica?",
        options: [
            { text: "Um número decimal infinito com repetição de algarismos.", correct: true, rationale: "Ex: 0,333... é racional." },
            { text: "Um número que não tem fim e não repete.", correct: false, rationale: "Isso é um irracional." },
            { text: "Um número inteiro.", correct: false, rationale: "Incorreto." },
            { text: "Um número primo.", correct: false, rationale: "Incorreto." }
        ]
    },
    {
        id: 19,
        difficulty: "hard",
        q: "Se 5 máquinas produzem 500 peças em 2 dias, quantas peças 10 máquinas produzirão em 4 dias?",
        options: [
            { text: "2000 peças", correct: true, rationale: "Dobre as máquinas (1000 peças) e depois dobre o tempo (2000 peças)." },
            { text: "1000 peças", correct: false, rationale: "Só considerou o aumento das máquinas." },
            { text: "1500 peças", correct: false, rationale: "Cálculo incorreto." },
            { text: "5000 peças", correct: false, rationale: "Cálculo incorreto." }
        ]
    },
    {
        id: 20,
        difficulty: "medium",
        q: "Qual o valor de (1/2)⁻³?",
        options: [
            { text: "8", correct: true, rationale: "Inverte a base (2/1) e eleva ao cubo: 2³ = 8." },
            { text: "1/8", correct: false, rationale: "Esqueceu de inverter a base." },
            { text: "-8", correct: false, rationale: "O expoente negativo não muda o sinal do resultado para menos." },
            { text: "6", correct: false, rationale: "Multiplicou 2 por 3." }
        ]
    },
    {
        id: 21,
        difficulty: "easy",
        q: "No intervalo aberto (2, 5), o número 2 faz parte do conjunto?",
        options: [
            { text: "Não", correct: true, rationale: "Intervalos abertos excluem os números das extremidades." },
            { text: "Sim", correct: false, rationale: "Só faria parte se fosse intervalo fechado [2, 5]." },
            { text: "Depende do contexto", correct: false, rationale: "Em intervalos matemáticos, a regra é fixa." },
            { text: "Apenas se for inteiro", correct: false, rationale: "Incorreto." }
        ]
    },
    {
        id: 22,
        difficulty: "hard",
        q: "Qual o resultado de √(x⁸)?",
        options: [
            { text: "x⁴", correct: true, rationale: "Divide-se o expoente pelo índice da raiz (8/2 = 4)." },
            { text: "x²", correct: false, rationale: "Cálculo incorreto." },
            { text: "x⁶", correct: false, rationale: "Subtraiu em vez de dividir." },
            { text: "x¹⁶", correct: false, rationale: "Multiplicou em vez de dividir." }
        ]
    },
    {
        id: 23,
        difficulty: "medium",
        q: "A propriedade distributiva diz que a(b + c) é igual a:",
        options: [
            { text: "ab + ac", correct: true, rationale: "O termo de fora multiplica cada termo de dentro." },
            { text: "abc", correct: false, rationale: "Isso seria se fosse tudo multiplicação." },
            { text: "a + b + c", correct: false, rationale: "Incorreto." },
            { text: "ab + c", correct: false, rationale: "Esqueceu de multiplicar o 'a' pelo 'c'." }
        ]
    },
    {
        id: 24,
        difficulty: "easy",
        q: "O número √3 é um exemplo de qual conjunto?",
        options: [
            { text: "Irracionais", correct: true, rationale: "Raízes não exatas de números primos são irracionais." },
            { text: "Naturais", correct: false, rationale: "Naturais são inteiros positivos." },
            { text: "Racionais", correct: false, rationale: "Não pode ser escrito como fração de inteiros." },
            { text: "Dízima Periódica", correct: false, rationale: "Não possui repetição padrão." }
        ]
    },
    {
        id: 25,
        difficulty: "hard",
        q: "Simplifique a expressão: (2² * 2³) / 2⁴.",
        options: [
            { text: "2", correct: true, rationale: "Em cima: 2^(2+3)=2⁵. Depois: 2⁵/2⁴ = 2^(5-4) = 2¹ = 2." },
            { text: "4", correct: false, rationale: "Cálculo incorreto." },
            { text: "2⁹", correct: false, rationale: "Somou todos os expoentes ignorando a divisão." },
            { text: "1", correct: false, rationale: "Cálculo incorreto." }
        ]
    },
    {
        id: 26,
        difficulty: "medium",
        q: "Se uma grandeza A dobra e a grandeza B cai pela metade, elas são:",
        options: [
            { text: "Inversamente proporcionais", correct: true, rationale: "É a definição de proporção inversa." },
            { text: "Diretamente proporcionais", correct: false, rationale: "Na direta, B dobraria também." },
            { text: "Iguais", correct: false, rationale: "Incorreto." },
            { text: "Constantes", correct: false, rationale: "Incorreto." }
        ]
    },
    {
        id: 27,
        difficulty: "easy",
        q: "Qual o elemento neutro da multiplicação?",
        options: [
            { text: "1", correct: true, rationale: "Qualquer número multiplicado por 1 é ele mesmo." },
            { text: "0", correct: false, rationale: "0 é o elemento neutro da adição." },
            { text: "-1", correct: false, rationale: "Muda o sinal do número." },
            { text: "10", correct: false, rationale: "Incorreto." }
        ]
    },
    {
        id: 28,
        difficulty: "hard",
        q: "O que acontece com o resultado de uma potência quando a base é negativa e o expoente é par?",
        options: [
            { text: "Fica sempre positivo", correct: true, rationale: "A multiplicação de pares de sinais negativos resulta em positivo." },
            { text: "Fica sempre negativo", correct: false, rationale: "Isso ocorre se o expoente for ímpar." },
            { text: "O resultado é zero", correct: false, rationale: "Incorreto." },
            { text: "O sinal não muda", correct: false, rationale: "O sinal muda de negativo para positivo." }
        ]
    },
    {
        id: 29,
        difficulty: "medium",
        q: "Como se representa o conjunto dos Reais sem o zero?",
        options: [
            { text: "R*", correct: true, rationale: "O asterisco (*) é a notação para excluir o zero de um conjunto." },
            { text: "R+", correct: false, rationale: "Representa apenas os reais não negativos." },
            { text: "R-", correct: false, rationale: "Representa apenas os reais não positivos." },
            { text: "R0", correct: false, rationale: "Notação inexistente para exclusão." }
        ]
    },
    {
        id: 30,
        difficulty: "hard",
        q: "Na radiciação, qual o nome do número que fica 'dentro' da raiz?",
        options: [
            { text: "Radicando", correct: true, rationale: "O número dentro é o radicando, o pequeno lá fora é o índice." },
            { text: "Potência", correct: false, rationale: "Resultado da potenciação." },
            { text: "Exponente", correct: false, rationale: "Parte da potenciação." },
            { text: "Índice", correct: false, rationale: "O índice é o número que indica o tipo de raiz (ex: 2 para quadrada)." }
        ]
    }
];
