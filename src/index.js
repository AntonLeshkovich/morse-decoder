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
    let wordsArray = expr.split('**********');
    let codeSymbolArray = [];
    let codeSymbolLength = 2;
        for ( let i = 0; i < wordsArray.length; i++) {
            while (wordsArray[i]) {
                codeSymbolArray.push(wordsArray[i].substr(0, codeSymbolLength));
                wordsArray[i] = wordsArray[i].substr(codeSymbolLength);
            }
        }
    let decodeSymbolArray = [];
        for (let i = 0; i < codeSymbolArray.length; i++) {
            if (codeSymbolArray[i] == '10') {
                decodeSymbolArray.push('.');
            } else if (codeSymbolArray[i] == '11') {
                decodeSymbolArray.push('-');
            } else {
                decodeSymbolArray.push('0');
            }
        }
    let symbolString  = decodeSymbolArray.join('');
    let symbolsLetterArray = [];
    let letterLength = 5;
        while (symbolString) {
            symbolsLetterArray.push(symbolString.substr(0, letterLength));
            symbolString = symbolString.substr(letterLength);
        }
       
    let symbolsMorseArray = []
        for (let i = 0; i < symbolsLetterArray.length; i++) {
            symbolsMorseArray.push(symbolsLetterArray[i].substr(symbolsLetterArray[i].lastIndexOf(0) + 1));
        }
    let lettersArray = [];
    for (let i = 0; i < symbolsMorseArray.length; i++) {
        lettersArray.push(MORSE_TABLE[symbolsMorseArray[i]])
    }
    let lettersString = lettersArray.join('');
    
    let wordsCount = expr.split('**********');
    
    let letterInWordCounter = [];
    for (let i = 0; i < wordsCount.length; i++) {
        letterInWordCounter.push(wordsCount[i].length / 10);
    }

    let decodeWordsArray = [];
    while (lettersString) {
        for (let i = 0; i < letterInWordCounter.length; i++) {
            decodeWordsArray.push(lettersString.substr(0, letterInWordCounter[i]));
            lettersString = lettersString.substr(letterInWordCounter[i]);
        }
    }

    let result = decodeWordsArray.join(' ');
    
    return result;
}

module.exports = {
    decode
}