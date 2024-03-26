alert('Bem vindo, A seguir pediremos que informem alguns dados.');
const personName = prompt(`Infomre seu nome:`);
const age = prompt(`Informe sua idade:`);
const confirmAge = confirm(`Você confirma que sua idade é ${age}?`);

alert(`
    - Informações -
    Nome: ${personName}
    Idade: ${age}
    Confirma idade: ${confirmAge}
`);