'use strict';

document.addEventListener('DOMContentLoaded', function start() {

    const incBtn = document.querySelector('#inc');
    const decBtn = document.querySelector('#dec');

    let counterDiv = document.querySelector('#count');
    let counterVal = Number(counterDiv.innerHTML);

    function newResult(calc) {
        if(calc == 'add') {
            counterDiv.innerHTML = counterVal+=10;
        } else {
            counterDiv.innerHTML = counterVal-=10;
        }
    }

    incBtn.addEventListener('click', function incValue() {
        newResult('add');
    });

    decBtn.addEventListener('click', function decValue() {
        newResult('subtract');
    });
});