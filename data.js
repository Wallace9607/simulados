const questions = [

{
    id: 1,
    difficulty: "hard",

    q: "Qual é a principal característica que distingue um circuito lógico sequencial de um circuito combinacional?",

    options: [

        {
            text: "A presença de dispositivos de memória para armazenar estados anteriores.",
            correct: true,
            rationale: "Circuitos sequenciais possuem memória e dependem de estados anteriores."
        },

        {
            text: "O uso exclusivo de portas NAND e NOR.",
            correct: false,
            rationale: "Ambos os tipos podem utilizar essas portas."
        },

        {
            text: "A capacidade de realizar operações aritméticas.",
            correct: false,
            rationale: "Circuitos combinacionais também realizam operações aritméticas."
        },

        {
            text: "A ausência total de sinais de clock.",
            correct: false,
            rationale: "Circuitos síncronos utilizam clock."
        }

    ]
},

{
    id: 2,
    difficulty: "medium",

    q: "Considere uma porta AND com A = 1 e B = 0. Qual é a saída?",

    options: [

        {
            text: "0",
            correct: true,
            rationale: "A porta AND só retorna 1 quando ambas as entradas são 1."
        },

        {
            text: "1",
            correct: false,
            rationale: "A saída seria 1 apenas se A=1 e B=1."
        },

        {
            text: "Indeterminado",
            correct: false,
            rationale: "O resultado é definido pela tabela verdade."
        },

        {
            text: "Z (Alta impedância)",
            correct: false,
            rationale: "Alta impedância não faz parte da tabela verdade básica."
        }

    ]
},

{
    id: 3,
    difficulty: "hard",

    q: "Segundo o Teorema de De Morgan, NOT(A + B) equivale a:",

    options: [

        {
            text: "NOT A AND NOT B",
            correct: true,
            rationale: "A negação da soma equivale ao produto das negações."
        },

        {
            text: "NOT A OR NOT B",
            correct: false,
            rationale: "Essa equivalência corresponde à negação de A.B."
        },

        {
            text: "A AND B",
            correct: false,
            rationale: "A expressão ignora as negações."
        },

        {
            text: "NOT(A AND B)",
            correct: false,
            rationale: "Negar soma e negar produto são operações diferentes."
        }

    ]
},

{
    id: 4,
    difficulty: "easy",

    q: "A porta XOR produz saída 1 quando:",

    options: [

        {
            text: "As entradas são diferentes.",
            correct: true,
            rationale: "XOR retorna verdadeiro apenas quando as entradas são diferentes."
        },

        {
            text: "As entradas são iguais.",
            correct: false,
            rationale: "Quando as entradas são iguais, a saída é 0."
        },

        {
            text: "As duas entradas são 1.",
            correct: false,
            rationale: "1 XOR 1 resulta em 0."
        },

        {
            text: "As duas entradas são 0.",
            correct: false,
            rationale: "0 XOR 0 também resulta em 0."
        }

    ]
},

{
    id: 5,
    difficulty: "medium",

    q: "Qual é a função principal do sinal de clock em circuitos síncronos?",

    options: [

        {
            text: "Sincronizar as mudanças de estado.",
            correct: true,
            rationale: "O clock coordena quando as alterações devem ocorrer."
        },

        {
            text: "Aumentar a tensão do circuito.",
            correct: false,
            rationale: "Clock não altera tensão elétrica."
        },

        {
            text: "Substituir portas lógicas.",
            correct: false,
            rationale: "Portas continuam sendo necessárias."
        },

        {
            text: "Inverter sinais digitais.",
            correct: false,
            rationale: "A inversão é feita pela porta NOT."
        }

    ]
},

{
    id: 6,
    difficulty: "hard",

    q: "Qual propriedade booleana é representada pela expressão A . (B + C) = A.B + A.C?",

    options: [

        {
            text: "Distributiva",
            correct: true,
            rationale: "A operação AND está sendo distribuída sobre a operação OR."
        },

        {
            text: "Comutativa",
            correct: false,
            rationale: "A propriedade comutativa apenas altera a ordem dos termos."
        },

        {
            text: "Associativa",
            correct: false,
            rationale: "A associativa altera agrupamentos, não distribui operações."
        },

        {
            text: "Absorção",
            correct: false,
            rationale: "A absorção elimina redundâncias lógicas."
        }

    ]
},

{
    id: 7,
    difficulty: "medium",

    q: "A propriedade A . 1 = A representa:",

    options: [

        {
            text: "Elemento neutro da operação AND",
            correct: true,
            rationale: "O valor 1 não altera o resultado da operação AND."
        },

        {
            text: "Contradição",
            correct: false,
            rationale: "Contradição ocorre quando o resultado é sempre 0."
        },

        {
            text: "Tautologia",
            correct: false,
            rationale: "Tautologia representa resultado sempre verdadeiro."
        },

        {
            text: "Involução",
            correct: false,
            rationale: "Involução trata da dupla negação."
        }

    ]
},

{
    id: 8,
    difficulty: "hard",

    q: "Qual alternativa representa corretamente uma implementação de XOR usando apenas OR, AND e NOT?",

    options: [

        {
            text: "(A OR B) AND NOT(A AND B)",
            correct: true,
            rationale: "Essa é a forma clássica de construir XOR usando operações básicas."
        },

        {
            text: "(A AND B) OR NOT(A)",
            correct: false,
            rationale: "A expressão não representa comportamento XOR."
        },

        {
            text: "NOT(A OR B)",
            correct: false,
            rationale: "Essa expressão representa uma porta NOR."
        },

        {
            text: "(A OR B) OR (A AND B)",
            correct: false,
            rationale: "A expressão simplifica para OR."
        }

    ]
},

{
    id: 9,
    difficulty: "hard",

    q: "Nos circuitos sequenciais assíncronos, a mudança de estado ocorre:",

    options: [

        {
            text: "Sem depender de pulsos de clock.",
            correct: true,
            rationale: "Circuitos assíncronos mudam de estado imediatamente após mudanças nas entradas."
        },

        {
            text: "Apenas durante a borda de subida do clock.",
            correct: false,
            rationale: "Isso caracteriza circuitos síncronos."
        },

        {
            text: "Somente quando todas as entradas forem iguais.",
            correct: false,
            rationale: "A igualdade das entradas não define circuitos assíncronos."
        },

        {
            text: "Exclusivamente após um reset.",
            correct: false,
            rationale: "Reset não é requisito para mudança de estado."
        }

    ]
},

{
    id: 10,
    difficulty: "medium",

    q: "Qual das alternativas descreve corretamente uma saída pulsada?",

    options: [

        {
            text: "A saída permanece ativa apenas durante um pulso específico.",
            correct: true,
            rationale: "Saídas pulsadas possuem duração limitada ao pulso de entrada ou clock."
        },

        {
            text: "A saída permanece indefinidamente ativa.",
            correct: false,
            rationale: "Isso caracteriza saída de nível."
        },

        {
            text: "A saída ignora sinais de clock.",
            correct: false,
            rationale: "Saídas pulsadas podem depender diretamente do clock."
        },

        {
            text: "A saída ocorre apenas em portas XOR.",
            correct: false,
            rationale: "Saídas pulsadas não são exclusivas de XOR."
        }

    ]
},

{
    id: 11,
    difficulty: "hard",

    q: "Qual expressão representa corretamente a equivalência de NOT(A . B) segundo De Morgan?",

    options: [

        {
            text: "NOT A + NOT B",
            correct: true,
            rationale: "A negação do produto equivale à soma das negações."
        },

        {
            text: "NOT A . NOT B",
            correct: false,
            rationale: "Essa expressão corresponde à negação da soma."
        },

        {
            text: "A + B",
            correct: false,
            rationale: "As negações foram removidas incorretamente."
        },

        {
            text: "A . B",
            correct: false,
            rationale: "A expressão original continua negada."
        }

    ]
},

{
    id: 12,
    difficulty: "easy",

    q: "Qual símbolo é utilizado para representar a operação lógica OR na álgebra booleana?",

    options: [

        {
            text: "+",
            correct: true,
            rationale: "A operação OR é representada pelo símbolo de soma (+)."
        },

        {
            text: ".",
            correct: false,
            rationale: "O ponto representa AND."
        },

        {
            text: "/",
            correct: false,
            rationale: "Barra não representa OR."
        },

        {
            text: "*",
            correct: false,
            rationale: "A multiplicação não é a representação formal utilizada."
        }

    ]
},

{
    id: 13,
    difficulty: "medium",

    q: "Uma porta NAND pode ser considerada universal porque:",

    options: [

        {
            text: "É possível construir qualquer outra porta lógica usando apenas NAND.",
            correct: true,
            rationale: "NAND é considerada universal devido à sua capacidade de implementar qualquer função lógica."
        },

        {
            text: "Ela substitui completamente circuitos sequenciais.",
            correct: false,
            rationale: "NAND não substitui circuitos completos."
        },

        {
            text: "Só funciona em sistemas síncronos.",
            correct: false,
            rationale: "NAND funciona em diversos contextos digitais."
        },

        {
            text: "Produz apenas saídas iguais a 1.",
            correct: false,
            rationale: "A saída depende das entradas."
        }

    ]
},

{
    id: 14,
    difficulty: "hard",

    q: "A expressão A + A = A representa qual propriedade da álgebra booleana?",

    options: [

        {
            text: "Idempotência",
            correct: true,
            rationale: "A repetição da variável não altera o resultado lógico."
        },

        {
            text: "Distributiva",
            correct: false,
            rationale: "A distributiva distribui operações."
        },

        {
            text: "Associativa",
            correct: false,
            rationale: "Associativa reorganiza agrupamentos."
        },

        {
            text: "Comutativa",
            correct: false,
            rationale: "Comutativa altera apenas a ordem."
        }

    ]
},

{
    id: 15,
    difficulty: "hard",

    q: "Qual alternativa descreve corretamente um circuito combinacional?",

    options: [

        {
            text: "Sua saída depende exclusivamente das entradas atuais.",
            correct: true,
            rationale: "Circuitos combinacionais não armazenam estados anteriores."
        },

        {
            text: "Sua saída depende de memória interna.",
            correct: false,
            rationale: "Isso caracteriza circuitos sequenciais."
        },

        {
            text: "Necessita obrigatoriamente de clock.",
            correct: false,
            rationale: "Clock é comum em circuitos sequenciais síncronos."
        },

        {
            text: "Só pode ser implementado com NAND.",
            correct: false,
            rationale: "Diversas portas podem ser utilizadas."
        }

    ]
},


{
    id: 16,
    difficulty: "hard",
    q: "Qual é a expressão simplificada resultante da aplicação da propriedade de absorção em A + (A . B)?",
    options: [
        { text: "A", correct: true, rationale: "Pela lei da absorção, A + AB = A, pois se A for 1, a soma é 1; se A for 0, a soma é 0." },
        { text: "B", correct: false, rationale: "B é absorvido pela redundância de A." },
        { text: "A + B", correct: false, rationale: "Isso ignora a simplificação booleana." },
        { text: "1", correct: false, rationale: "O resultado depende do valor de A." }
    ]
},
{
    id: 17,
    difficulty: "hard",
    q: "A expressão lógica (A . B) + (A . B') simplifica-se para:",
    options: [
        { text: "A", correct: true, rationale: "Pela distributiva: A.(B + B'). Como B + B' = 1, resta A.1 = A." },
        { text: "B", correct: false, rationale: "A variável B é eliminada no processo de simplificação." },
        { text: "A . B", correct: false, rationale: "A negação de B permite a eliminação do termo B." },
        { text: "0", correct: false, rationale: "O resultado é A, não uma contradição." }
    ]
},
{
    id: 18,
    difficulty: "hard",
    q: "De acordo com as propriedades da Disjunção, a expressão A + (~A . B) é equivalente a:",
    options: [
        { text: "A + B", correct: true, rationale: "Esta é uma variação da absorção: a variável A domina e elimina sua própria negação no produto." },
        { text: "A", correct: false, rationale: "O termo B permanece na expressão final." },
        { text: "B", correct: false, rationale: "A variável A não é eliminada." },
        { text: "1", correct: false, rationale: "Não há elementos suficientes para garantir uma tautologia." }
    ]
},
{
    id: 19,
    difficulty: "medium",
    q: "Qual porta lógica produz uma saída 0 APENAS quando todas as suas entradas são 1?",
    options: [
        { text: "NAND", correct: true, rationale: "A NAND é o inverso da AND; se todas forem 1 (AND=1), o resultado é 0." },
        { text: "NOR", correct: false, rationale: "A NOR produz 0 se QUALQUER entrada for 1." },
        { text: "AND", correct: false, rationale: "A AND produziria 1 nessa condição." },
        { text: "XOR", correct: false, rationale: "XOR produz 0 se as entradas forem iguais (1 e 1 ou 0 e 0)." }
    ]
},
{
    id: 20,
    difficulty: "hard",
    q: "Sobre circuitos sequenciais, o que define um 'latch' em comparação a um 'flip-flop'?",
    options: [
        { text: "O latch é sensível ao nível do sinal, enquanto o flip-flop é sensível à borda.", correct: true, rationale: "Latches mudam com o estado do nível lógico; flip-flops sincronizam na transição (borda) do clock." },
        { text: "O latch possui memória e o flip-flop não.", correct: false, rationale: "Ambos são dispositivos de memória." },
        { text: "O flip-flop é assíncrono e o latch é síncrono.", correct: false, rationale: "A distinção principal é o método de disparo (nível vs borda)." },
        { text: "Latches só podem ser feitos com portas NOR.", correct: false, rationale: "Podem ser feitos com NAND ou NOR." }
    ]
},
{
    id: 21,
    difficulty: "hard",
    q: "A propriedade da Involução afirma que ~(~A) é igual a:",
    options: [
        { text: "A", correct: true, rationale: "A dupla negação de uma variável retorna ao seu valor original." },
        { text: "0", correct: false, rationale: "A negação dupla não anula a lógica para zero." },
        { text: "1", correct: false, rationale: "A negação dupla não gera uma tautologia fixa." },
        { text: "~A", correct: false, rationale: "Uma das negações foi esquecida." }
    ]
},
{
    id: 22,
    difficulty: "medium",
    q: "Qual é o valor da saída de uma porta NOR se as entradas forem A=0 e B=0?",
    options: [
        { text: "1", correct: true, rationale: "NOR é o inverso de OR. Se 0+0=0, então o inverso é 1." },
        { text: "0", correct: false, rationale: "0 seria a saída de uma porta OR convencional." },
        { text: "Indeterminado", correct: false, rationale: "Lógica digital binária é sempre determinada." },
        { text: "-1", correct: false, rationale: "Não existem valores negativos na lógica booleana básica." }
    ]
},
{
    id: 23,
    difficulty: "hard",
    q: "Qual teorema de De Morgan descreve a porta NOR?",
    options: [
        { text: "~(A + B) = ~A . ~B", correct: true, rationale: "A negação da soma (NOR) equivale ao produto das negações individuais." },
        { text: "~(A . B) = ~A + ~B", correct: false, rationale: "Este teorema descreve a porta NAND." },
        { text: "A + B = B + A", correct: false, rationale: "Esta é a propriedade comutativa." },
        { text: "A . 0 = 0", correct: false, rationale: "Esta é a propriedade do elemento nulo." }
    ]
},
{
    id: 24,
    difficulty: "hard",
    q: "Em um circuito comutador 2:4, se as entradas de controle forem A=1 e B=1, qual saída será ativada?",
    options: [
        { text: "A quarta saída (S3)", correct: true, rationale: "Em binário, 11 corresponde ao número 3 (contando de S0 a S3)." },
        { text: "A primeira saída (S0)", correct: false, rationale: "S0 é ativada quando as entradas são 00." },
        { text: "Nenhuma saída", correct: false, rationale: "Um comutador sempre ativa uma saída correspondente à entrada." },
        { text: "Todas as saídas", correct: false, rationale: "Apenas uma saída é selecionada por vez." }
    ]
},
{
    id: 25,
    difficulty: "hard",
    q: "Simplificando a expressão (A + B) . (A + ~B), obtemos:",
    options: [
        { text: "A", correct: true, rationale: "Pela distributiva inversa: A + (B . ~B). Como B . ~B = 0, resta A + 0 = A." },
        { text: "B", correct: false, rationale: "B é eliminado pela contradição com sua negação." },
        { text: "A + B", correct: false, rationale: "A expressão permite uma simplificação maior." },
        { text: "1", correct: false, rationale: "Não resulta em tautologia fixa." }
    ]
},
{
    id: 26,
    difficulty: "medium",
    q: "A propriedade da Identidade na Disjunção afirma que A + 0 é igual a:",
    options: [
        { text: "A", correct: true, rationale: "Zero é o elemento neutro da operação OR." },
        { text: "0", correct: false, rationale: "Zero seria o resultado se fosse uma porta AND (A . 0)." },
        { text: "1", correct: false, rationale: "A saída depende do valor de A." },
        { text: "~A", correct: false, rationale: "Somar zero não inverte o sinal." }
    ]
},
{
    id: 27,
    difficulty: "hard",
    q: "Qual o resultado de uma operação XOR entre três entradas onde todas são 1 (1 XOR 1 XOR 1)?",
    options: [
        { text: "1", correct: true, rationale: "1 XOR 1 = 0. Então, 0 XOR 1 = 1. O XOR de um número ímpar de '1s' é sempre 1." },
        { text: "0", correct: false, rationale: "O resultado seria 0 se houvesse um número par de entradas em nível alto." },
        { text: "Indeterminado", correct: false, rationale: "O XOR é uma operação associativa e determinada." },
        { text: "3", correct: false, rationale: "Lógica booleana só admite 0 ou 1." }
    ]
},
{
    id: 28,
    difficulty: "hard",
    q: "A propriedade Tautologia na Disjunção (A + ~A) resulta sempre em:",
    options: [
        { text: "1", correct: true, rationale: "Como uma das variáveis será obrigatoriamente 1, o resultado da soma lógica é sempre verdadeiro." },
        { text: "0", correct: false, rationale: "Isso ocorreria na contradição (A . ~A)." },
        { text: "A", correct: false, rationale: "O resultado é independente de A, sendo sempre 1." },
        { text: "~A", correct: false, rationale: "A expressão simplifica para o valor constante 1." }
    ]
},
{
    id: 29,
    difficulty: "hard",
    q: "O que acontece com a saída de um circuito combinacional se as entradas mudarem de 01 para 10?",
    options: [
        { text: "A saída muda instantaneamente de acordo com a nova combinação, ignorando o estado anterior.", correct: true, rationale: "Circuitos combinacionais não têm memória; a saída é função direta e exclusiva das entradas atuais." },
        { text: "A saída mantém o estado anterior até o próximo pulso de clock.", correct: false, rationale: "Isso ocorreria em um circuito sequencial síncrono." },
        { text: "O circuito entra em estado de alta impedância.", correct: false, rationale: "Mudança de entrada não causa alta impedância por padrão." },
        { text: "A saída será sempre 0 durante a transição.", correct: false, rationale: "A saída depende da lógica implementada entre os estados." }
    ]
},
{
    id: 30,
    difficulty: "hard",
    q: "Um meio-somador (half-adder) é composto por quais portas lógicas básicas para gerar a Soma (S) e o Vai-um (Cout)?",
    options: [
        { text: "XOR para a Soma e AND para o Vai-um.", correct: true, rationale: "XOR detecta a diferença (soma binária) e AND detecta quando ambos são 1 (gerando o carry)." },
        { text: "OR para a Soma e NAND para o Vai-um.", correct: false, rationale: "OR falha em 1+1 (daria 1, mas a soma de 1+1 é 0 com carry)." },
        { text: "AND para a Soma e XOR para o Vai-um.", correct: false, rationale: "As funções estão invertidas." },
        { text: "Apenas portas NOR.", correct: false, rationale: "Embora possível com portas universais, a forma básica usa XOR e AND." }
    ]
}

];