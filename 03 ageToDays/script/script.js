const display = document.getElementById('days');

const btnCalc = document.getElementById('calculate');
btnCalc.addEventListener('click', (dob) => {
    dob = new Date(document.getElementById('DOB').value);

    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    console.log('Month ' + month_diff)
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);
    console.log('agedt ' + age_dt)

    //extract year from date
    var year = age_dt.getFullYear();
    console.log('year ' + year)

    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    console.log('age ' + age)

    var days = age * 365;
    console.log('days ' + days)

    //display the calculated age
    return (display.innerHTML =
        "You are " + age + " years" + " and " + days + " days old");
})

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    document.getElementById('DOB').value = '';
    display.innerHTML = '';
})


// copyright
const Year = new Date().getFullYear();
document.getElementById('footer').innerHTML = `
&copyAbdus-Samad Charles ${Year}
`;