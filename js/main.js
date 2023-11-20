'use strict';

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// Wayne Barnett Founder & CEO wayne-barnett-founder-ceo.jpg
// Angela Caroll Chief Editor angela-caroll-chief-editor.jpg
// Walter Gordon Office Manager walter-gordon-office-manager.jpg
// Angela Lopez Social Media Manager angela-lopez-social-media-manager.jpg
// Scott Estrada Developer scott-estrada-developer.jpg
// Barbara Ramos Graphic Designer barbara-ramos-graphic-designer.jpg
// Dichiaro una varibile persone e la definisco come un array, gli lementi enll'array sarranno a loro volta degli oggetti che saranno definiti con le key nome, ruolo, e foto.

const persone = [
  {
    nome: 'Wayne Barnett Founder',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Wayne Barnett Founder',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Wayne Barnett Founder',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
];

console.log(persone);

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// per stampare tutti gli elementi nell'array, faremo un ciclo for e al suo interno faremo un console.log di tutti gli lementi dell-array e a sua volta gli oggetti stessi

for (let i = 0; i < persone.length; i++) {
  for (let key in persone[i]) {
    console.log(`${key}: ${persone[i][key]}`);
  }
  console.log('----');
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

// Trasmite un inner html possiamo stampare nel main gli elementi stampati in console
