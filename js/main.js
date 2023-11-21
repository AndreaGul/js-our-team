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
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
  },
];

// console.log(persone);

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

// const elementBody = document.querySelector('body');

// for (let i = 0; i < persone.length; i++) {
//   for (let key in persone[i]) {
//     elementBody.innerHTML += `<div>${key}: ${persone[i][key]}</div>`;
//   }
//   elementBody.innerHTML += `<br>`;
// }

// Trasmite un inner html possiamo stampare nel main gli elementi stampati in console

//aggiunta degli elementi nel dom tramite il clonamento del template
//accediamo all'elemento con classe persona del dom
const elementPersone = document.querySelector('.persone');

//accediamol al template con id template-persone
const tempaltePersone = document.getElementById('template-persone');

//grazie a un cilco for andiamo a inseirire tutti gli elementi nel dom
for (let i = 0; i < persone.length; i++) {
  //definiamo una variabile che ha come valore l'oggetto nell'array
  const persona = persone[i];

  // ci andiamo a clocare utto il contenuto del frammento nel template Personae
  const elementTemplatePersona = tempaltePersone.content.cloneNode(true);
  console.log(elementTemplatePersona);

  //grazie  a querySelecontor e le classi ci andiamo a prendere l'elemento da modificare es. 'elementTemplatePersona.querySelector('.persona .foto img')' rapresenta l'elemento nel dom
  elementTemplatePersona.querySelector(
    '.persona .foto img'
  ).src = `img/${persona.foto}`;

  //se non c'e il nome dell persona nell'oggetto non viene aggiunta
  if (persona.nome !== undefined) {
    elementTemplatePersona.querySelector('.persona .nome').innerText =
      persona.nome;
  }

  elementTemplatePersona.querySelector('.persona .ruolo').innerText =
    persona.ruolo;

  elementPersone.append(elementTemplatePersona);
}
