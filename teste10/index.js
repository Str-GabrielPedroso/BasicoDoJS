const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
];

let crew = [];
let spaceshipNames = [];

for (let i = 0; i < hitchedSpaceships.length; i++) {
    if (hitchedSpaceships[i][1] >= 10) {
        crew.push(hitchedSpaceships[i]);
    };
};

for (let i = 0; i < hitchedSpaceships.length; i++) {
    spaceshipNames.push(hitchedSpaceships[i][0].toUpperCase());
};


const index = hitchedSpaceships.findIndex((elemento) => elemento[2] === false);

alert(`
    Nome de todas as naves:
    ${spaceshipNames}
    Naves com mais de 10 tripulantes:
    ${crew}
    Número da plataforma que contem nave com engate pendente:
    ${index}, nave: ${hitchedSpaceships[index]}
`)