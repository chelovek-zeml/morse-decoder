const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };

function decode(expr) {
  // write your solution here
  let res = '';
  let arr = array_morze(expr);
  for (let i = 0; i < arr.length; i++) {
    for (var key in MORSE_TABLE) {
      if (arr[i] === key) {
        res = res + MORSE_TABLE[key];
      }
    }
    if (arr[i] === ' ') {
      res = res + ' ';
    }
  }
  console.log(res);
  return res;
}

function array_new(array) {
  let arr = [];
  let temp_arr = [];
  let str = '';

  for (let i = 0; i < array.length; i++) {
    str = str + array[i];
    if (str.length === 2) {
      temp_arr.push(str);
      str = '';
      if (temp_arr.length === 5) {
        arr.push(temp_arr);
        temp_arr = [];
      }
    }
  }

  return arr;
}

function array_morze(array) {
  array = array_new(array);
  let arr = [];
  let str = '';

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] - 10 === 0) {
        str = str + '.';
      } else if (array[i][j] - 11 === 0) {
        str = str + '-';
      } else if (array[i][j] === '**') {
        str = ' ';
      }
    }
    arr.push(str);
    str = '';
  }
  return arr;
}

module.exports = {
  decode,
};
