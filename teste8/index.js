let speed = 0;
let spaceshipName = prompt('Informe o nome da nave:');
let res;

function menu() {
    return prompt(`
        1 - Acelerar a nave em 5km/s
        2 - Desacelerar em 5km/s
        3 - Imprimir dados de bordo
        4 - Sair do programa
    `);
};

do {
    res = menu()

    switch (res) {
        case '1':
            alert(`Acelerando nave em 5 km/s`);
            speed += 5;
            break;
        case '2':
            alert(`Desacelerando nave em 5 km/s`);
            if (speed > 0) { speed -= 5; };
            break;
        case '3':
            alert(`
            Nave ${spaceshipName}, está a ${speed}km/s`)
            break;
        case '4':
            alert('Saindo do programa ...');
            break;
        default: alert('Opção inválida!');
    }
} while (res !== '4');