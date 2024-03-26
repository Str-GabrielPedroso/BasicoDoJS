const spaceshipName = prompt(`Qual o nome da espaçonave?`);
let reverseSpaceshipName = '';

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    reverseSpaceshipName += spaceshipName[i];

    if (spaceshipName[i] === 'e') {
        break;
    }
};

alert(`O nome da nave invertido até a primeira letra 'e' é: ${reverseSpaceshipName}`);