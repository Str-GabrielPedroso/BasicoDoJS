const spaceshipName = prompt('Informe o nome da Nave');
let cont = 0;

do {
    var condicao = prompt(`
     Deseja entrar em dobra espacial?
     1 - Sim
     2 - Não
    `);

    if (condicao === '1') {
        cont++;
    }

} while (condicao === '1');

alert(`Nave ${spaceshipName}, entrou em dobra ${cont}x`)