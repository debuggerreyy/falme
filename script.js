document.getElementById('flamesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let yourName = document.getElementById('yourName').value.toLowerCase();
    let crushName = document.getElementById('crushName').value.toLowerCase();

    let leftoverLetters = calculateLeftoverLetters(yourName, crushName);
    let result = flamesGame(leftoverLetters);

    document.getElementById('result').innerHTML = `The relationship type is: ${result}`;
});

function calculateLeftoverLetters(yourName, crushName) {
    let combinedNames = yourName + crushName;
    let leftoverLetters = combinedNames.split('');

    for (let i = 0; i < yourName.length; i++) {
        let index = leftoverLetters.indexOf(yourName[i]);
        if (index !== -1) leftoverLetters.splice(index, 1);
    }

    return leftoverLetters.length;
}

function flamesGame(count) {
    const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];
    return flames[count % flames.length];
}
