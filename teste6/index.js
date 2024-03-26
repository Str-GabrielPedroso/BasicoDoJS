const spaceshipName = prompt(`Qual o nome da espaçonave?`);
const char = prompt(`Qual caractere deseja substituir?`);
const newChar = prompt(`Por qual caractere vai substituir?`);

let newSpaceshipName = '';

for (let i = 0; i < spaceshipName.length; i++) {
    if (char === spaceshipName[i]) {
        newSpaceshipName += newChar;
    } else {
        newSpaceshipName += spaceshipName[i];
    }
};

alert(`O novo nome da nave é: ${newSpaceshipName}`);