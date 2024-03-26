let currentSpeed = 150;

function slowDown(currentSpeed, printCurrentSpeed) {
    while (currentSpeed > 0) {
        printCurrentSpeed(currentSpeed);
        currentSpeed -= 20;
    }

    console.log('A nave está a parada e as comportas podem ser abertas ');
};

function printCurrentSpeed(currentSpeed) {
    console.log(`A nave esta a ${currentSpeed}km/s`);
};

slowDown(currentSpeed, printCurrentSpeed);