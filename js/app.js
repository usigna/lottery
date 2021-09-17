// Polecenia:
// 1. Znajdź sposób na generowanie losowej liczby
// 2. Stwórz funkcję, do losowania liczb z podanego przedziału
// 3. Stwórz funkcję, która wylosuje 6 liczb z przedziału 1-49
// 4. Wyświetl wylosowane liczby
// 5. Dodaj mechanizm, który nie pozwoli wylosować drugi raz tej samej liczby

const minNumber = 1;
const maxNumber = 49;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumbers() {
  const numbers = [];
  let random;

  for (let i = 0; i < 6; i++) {
    random = getRandomNumber(minNumber, maxNumber);

    while(numbers.includes(random)) {
      random = getRandomNumber(minNumber, maxNumber);
      console.log(`powtórzyła się liczba ${random}`);
    }
    numbers.push(random);
  }
  return numbers;
}

function addContent(array) {
  const resultItems = document.querySelectorAll('.result__item');
  const numbers = array;

  for (let i = 0; i < resultItems.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      resultItems[i].textContent = numbers[i];
    }
  }
}

const init = function () {
  addContent(getRandomNumbers());
};

document.addEventListener('DOMContentLoaded', init);