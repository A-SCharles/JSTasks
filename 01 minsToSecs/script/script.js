
const mins = document.getElementById('minutes');
const secs = document.getElementById('seconds');

const btnConvert = document.getElementById('convert');
btnConvert.addEventListener('click', (n) => {
    n = mins.value;
    secs.value = (n * 60);
})

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', (n) => {
    mins.value = '';
    secs.value = '';
})


// copyright
const Year = new Date().getFullYear(); 
document.getElementById('footer').innerHTML = `
&copyAbdus-Samad Charles ${Year}
`;