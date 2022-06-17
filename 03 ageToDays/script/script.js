const display = document.getElementById('days');

const btnCalc = document.getElementById('calculate');
btnCalc.addEventListener('click', (dob) => {
    dob = new Date(document.getElementById('DOB').value);
    let days = (new Date() - new Date(dob)) / (1000 * 60 * 60 * 24);
    display.innerHTML = `${Math.round(days)} days from birth`;
})

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    document.getElementById('DOB').value = '';
    display.innerHTML = '';
    document.getElementById('DOB').focus()
})

// copyright
const Year = new Date().getFullYear();
document.getElementById('footer').innerHTML = `
&copyAbdus-Samad Charles ${Year}
`;