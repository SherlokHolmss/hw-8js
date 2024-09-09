const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (i = 0; i <= friends.length - 1; i++) {
    string = string + " " + friends[i];
}
console.log(string);

console.log(friends.join(" "));


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

const cardToRemove = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
    cards.splice(indexToRemove, 1);
}

const cardToInsert = 'Карточка-6';
const insertIndex = 3;

cards.splice(insertIndex, 0, cardToInsert);

const cardToUpdate = 'Карточка-4';
const updatedCard = 'Оновлена-Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
    cards.splice(indexToUpdate, 1, updatedCard);
}

console.log(cards);

