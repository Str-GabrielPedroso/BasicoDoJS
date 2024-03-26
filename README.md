### Exercício 1: Pegando dados do usuário

1. Exiba com um alert a seguinte mensagem de boas-vindas ao usuário: "Bem-vindo! A seguir pediremos que informe alguns dados."
   
2. Peça que o usuário informe seu nome.
   
3. Peça que o usuário informe sua idade.
   
4. Peça que ele confirme a idade.
   
5. Exiba um alert com o nome do usuário, idade e se confirmou a idade.

---

### Exercício 2: Calculando a diferença de idades

1. Peça o nome e a idade da pessoa mais velha.
   
2. Peça o nome e a idade da pessoa mais nova.
   
3. Calcule a diferença de idade.
   
4. Exiba com um alert contendo:
    - Nome e idade da pessoa mais velha.
    - Nome e idade da pessoa mais nova.
    - Diferença entre as duas idades.

---

### Exercício 3: Condicionais

1. Inicie perguntando o nome do piloto da nave.
   
2. A velocidade inicial é 0.
   
3. Pergunte a qual velocidade o piloto deseja acelerar a nave.
   
4. Pedir uma confirmação informando que a nave está indo para a velocidade X km/s. Caso confirme, a velocidade deve ser atualizada.
   
5. Exibir uma das seguintes mensagens com base na velocidade atual da nave:
    - Velocidade menor ou igual a 0 km/s: "A nave está parada. Considere partir aumentando a velocidade."
    - Velocidade menor que 40 km/s: "Muito devagar, considere aumentar a velocidade."
    - Velocidade maior que 40 km/s e menor que 80 km/s: "Parece uma boa velocidade."
    - Velocidade maior a 80 km/s: "Velocidade muito alta."

---

### Exercício 4: Conversor de distâncias espaciais.

1. O objetivo é colocar uma distancia em anos-luz(l.y.) e converter para a unidade desejada.
   
2. Pergunte a distancia em anos luz a ser calculada.
   
3. Oferecer uma lista de opções de conversão contendo:
    - Parsec(pc)
    - Unidade astrononima(AU)
    - Quilometros(km)
   
4. Utilize o switch para verificar a opção, armazenar o nome e o valor convertido e imprimir na tela com um alerta contendo:
    - A distancia que foi calculada.
    - Qual tipo de conversão foi escolhida.
    - O valor convertido.

---

### Exercício 5: Dobra espacial com While

1. Pedir o nome da nave.
   
2. Perguntar se deseja entrar em dobra espacial com a seguinte mensagem:
    - Deseja entrar em dobra espacial? 
    1- Sim
    2- Não
   
3. Caso a resposta seja sim, contabilize uma dobra.
   
4. Quando a resposta for NÃO, exibir na tela o nome da nave e a quantidade de dobras espaciais ela entrou.

---

### Exercício 6: Ocultando o nome real de uma nave

1. Peça o nome da nave.
   
2. Pergunte o caractere que deseja substituir.
   
3. Perguntar por qual caractere deseja substituir.
   
4. Utilizar o FOR para resolver o problema.
   
5. Para cada caractere igual o informado, substituir pelo novo caractere.
   
6. Exibir um alerta com o novo nome da nave.

---

### Exercício 7: Invertendo o nome da nave com caractere sensível

1. Peça o nome da nave que vai ser invertido.
   
2. Utilizar uma estrutura de repetição para inverter o nome da nave percorrendo da ultima letra até a primeira.
   
3. Durante a inversão, procurar pelo caractere proibido (caractere a sua escolha).
   
4. Caso encontre, a inversão deve ser parada onde estiver e deve ser impresso o nome da nave invertido até o caractere sensível.

---

### Exercício 8: Funções de controle de navegação

1. Criar uma função para acelerar a nave em 5km/s.
   
2. Criar uma função pra desacelerar a nave em 5kms (a velocidade não pode ser menor que 0km/s).
   
3. Opção de imprimir dados de bordo com o nome da nave e sua velocidade atual.
   
4. Sair do programa.
   
5. Fazer isso com uma função de menu que retorna uma resposta do prompt.

---

### Exercício 9: Função para desacelerar

1. Considere que a nave esta a 150km/s inicialmente.
   
2. Crie uma função para desacelerar 20km/s por segundo (considere cada interação de um laço de repetição é um segundo).
   
3. Cada vez que diminuir deve imprimir a velocidade atual da nave. Essa impressão deve ser feita por uma função de callback.
   
4. No final exiba uma mensagem informando que a nave esta parada e as comportas podem ser abertas.

---

### Exercício 10: Array bidimensional de naves

1. Considere um array bidimensional de naves que estão engatadas na estação espacial:
    ```javascript
    const hitchedSpaceships = [
        ["Fenix", 8, true],
        ["Golias", 10, true],
        ["Helmet", 5, false],
        ["Elemental", 3, true],
        ["Darwin", 15, false],
    ]
    ```

2. Para cada sub-array, a primeira posição é o nome da nave, a segunda é a quantidade de tripulantes e a terceira informa se o processo de engate já foi concluido ou não.
   
3. Com base no array, filtrar o nome das naves que tem mais de 9 tripulantes.
   
4. Informar o numero da plataforma que a primeira nave que ainda esta com engate pendente (false).
   
5. Destacar o nome de todas as naves colocando-as em caixa alta.
   
6. Exibir um alerta com todas estas informações.