const pass = document.getElementById('pass');
const copy = document.getElementById('copy');
const length = document.getElementById('length');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const create = document.getElementById('create');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';
const symbols = '!@#$%^&*()+_}{+=';

function getlowerCaseLetter() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getUpperCaseLetter() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function createPassword() {
    const len = length.value;

    let password = "";

    if (upper.check) {
        password += getUpperCaseLetter();
    }

    if (lower.check) {
        password += getlowerCaseLetter();
    }

    if (numbers.check) {
        password += getNumber();
    }

    if (symbols.check) {
        password += getSymbol();
    }

    for (let i = 0; i < len; i++) {
        const options = addOptions();

        password += options;
    }

    pass.innerText = password;
}

function addOptions() {
    const x = [];
    if (upper.checked) {
        x.push(getUpperCaseLetter())
    }
    if (lower.checked) {
        x.push(getlowerCaseLetter())
    }
    if (numbers.checked) {
        x.push(getNumber())
    }
    if (symbol.checked) {
        x.push(getSymbol());
    }
    if (x.length == 0) return "";

    return x[Math.floor(Math.random() * x.length)];
}

create.addEventListener('click', createPassword);