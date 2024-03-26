function ageDiference() {
    const
        nameOlderPerson = document.getElementById('nameOlderPerson').value,
        nameYoungerPerson = document.getElementById('nameYoungerPerson').value,
        ageOlderPerson = Number(document.getElementById('ageOlderPerson').value),
        ageYoungerPerson = Number(document.getElementById('ageYoungerPerson').value),
        ageDiference = ageOlderPerson - ageYoungerPerson

    alert(`
        Pessoa mais velha: ${nameOlderPerson}, idade: ${ageOlderPerson}
        Pessoa mais nova: ${nameYoungerPerson}, idade: ${ageYoungerPerson}
        Diferença entre as duas idades: ${ageDiference} anos
    `);
};