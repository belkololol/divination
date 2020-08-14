


function createDateBirth() {
    let dateBirth = document.querySelector('.data');

    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.innerText = i;
        dateBirth.appendChild(option);
    }
}

createDateBirth()

function createYears() {
    let dateYear = document.querySelector('.year');

    for (let i = 2015; i >= 1930; i--) {
        let option = document.createElement('option');
        option.innerText = i;
        dateYear.appendChild(option);
    }
}

createYears()