"use strict"

// Array Lista Spesa
const lista = [
    'Yogurt',
    'Brioche',
    'Olio',
    'Pasta',
    'Cereali',
    'Affettati',
    'Pane',
    'Latte'
];

// A differenza del ciclo For dove dichiariamo la var index all'interno delle parentesi, nel ciclo while lo scriviamo prima, fuori dal ciclo
let i = 0
while (i < lista.length) {
    console.log(lista[i]);
    i++;
};