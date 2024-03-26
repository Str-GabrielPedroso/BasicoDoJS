const namePilot = prompt(`Olá, informe o nome do piloto!`);
const accelerate = Number(prompt(`Informe a velocidade que gostaria de acelerar a nave`));
const confirmSpeed = confirm(`A nave esta indo para ${accelerate} km/s, confirmar velocidade?`);

if (accelerate < 40) {
    alert('Você está devagar, podemos aumentar mais');
} else if (accelerate >= 40 && accelerate < 80) {
    alert('Parece uma boa velocidade para manter');
} else if (accelerate >= 80 && accelerate < 100) {
    alert('Velocidade alta, considere diminuir');
} else if (accelerate >= 100) {
    alert('Velocidade perigosa. Controle automático forçado');
} else {
    alert('Nave está parada. Considere partir e aumentar a velocidade');
}

alert(`Nome do piloto ${namePilot}, velocidade atual da nave em ${accelerate} Km/s`);