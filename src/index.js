const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    let morseArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '**********') {
            morseArr[i] = ' '; 
        } else {
            morseArr[i] = arr[i].replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
        }
    }
    let result = [];
    for (let i = 0; i < morseArr.length; i++) {
        if (morseArr[i] === ' ') {
            result[i] = ' ';
        } else {
            for (let key in MORSE_TABLE) {
                if (morseArr[i] === key) {
                    result[i] = MORSE_TABLE[key];
                }
            }   
        }
        
    }
    return result.join('');
}

module.exports = {
    decode
};