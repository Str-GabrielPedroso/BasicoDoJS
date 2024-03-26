const distance = Number(prompt('Qual a distancia em anos luz deseja calcular?'));

const pc = (dist) => dist * 0.306601;

const au = (dist) => dist * 63241.1;

const km = (dist) => dist * (9.5 * Math.pow(10, 12));

switch (
prompt(`
    Qual unidade de medida para o calculo?
    1 - Parsec(pc)
    2 - Unidade astônonima(AU)
    3 - Quilômetros(km)
    `)
) {
    case '1':
        alert(`
        Distancia em anos luz: 
        Distancia calculada: ${distance}
        Conversão desejada: Parsec(pc)
        Distancia convertida:${pc(distance)}
        `)
        break;
    case '2':
        alert(`
        Distancia em anos luz: 
        Distancia calculada: ${distance}
        Conversão desejada: Unidade astônonima(AU)
        Distancia convertida:${au(distance)}
        `)
        break;
    case '3':
        alert(`
        Distancia em anos luz: 
        Distancia calculada: ${distance}
        Conversão desejada: Quilômetros(km)
        Distancia convertida:${km(distance)}
        `)
        break;
    default:
        alert(`
        Distancia em Anos-luz: ${distance}.
        Unidade não identificada: Conversão fora do escopo.
    `);
};

