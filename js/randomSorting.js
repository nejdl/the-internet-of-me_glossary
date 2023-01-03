let originalTerms = document.getElementsByClassName('term');
let termsInRandomOrder = [...originalTerms];
shuffle(termsInRandomOrder);

const recommendations1 = document.getElementById('recommendations-1');
const recommendations2 = document.getElementById('recommendations-2');
const recommendations3 = document.getElementById('recommendations-3');
const recommendations4 = document.getElementById('recommendations-4');
const recommendations5 = document.getElementById('recommendations-5');

// 2 terms
const termSection1 = [
  termsInRandomOrder[0].cloneNode(true),
  termsInRandomOrder[1].cloneNode(true),
];
// 3 or 6 terms
const termSection2 = [
  termsInRandomOrder[2].cloneNode(true),
  termsInRandomOrder[3].cloneNode(true),
  termsInRandomOrder[4].cloneNode(true),
];
// 2 or 4 terms
const termSection3 = [
  termsInRandomOrder[5].cloneNode(true),
  termsInRandomOrder[6].cloneNode(true),
  termsInRandomOrder[7].cloneNode(true),
];
const termSection4 = [
  termsInRandomOrder[8].cloneNode(true),
  termsInRandomOrder[9].cloneNode(true),
  termsInRandomOrder[10].cloneNode(true),
  termsInRandomOrder[11].cloneNode(true),
];
// 5 terms +
const termSection5 = [
  // termsInRandomOrder[12].cloneNode(true),
  // termsInRandomOrder[13].cloneNode(true),
  // termsInRandomOrder[14].cloneNode(true),
  // termsInRandomOrder[15].cloneNode(true),
];

recommendations1.append(...termSection1);
recommendations2.append(...termSection2);
recommendations3.append(...termSection3);
recommendations4.append(...termSection4);
// recommendations5.append(...termSection5);

// https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(random(seedNumber) * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    ++seedNumber;
  }

  return array;
}

function random(seedNumber) {
  var x = Math.sin(seedNumber++) * 10000;
  return x - Math.floor(x);
}
