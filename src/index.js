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
    let words = expr.split('**********');
    let finalPhrase = '';
    for (let word of words) {
        let lettersEncoded = word.match(/.{10}/g);
        let finalWord = '';
        for (let letterEncoded of lettersEncoded) {
            let letterMorse = '';
            for (let i = 0; i < letterEncoded.length; i+=2) {
                let temp = `${letterEncoded[i]}${letterEncoded[i+1]}`;
                if (temp === '10') {
                    letterMorse += '.';
                } else if (temp === '11') {
                    letterMorse += '-'
                }
            }
            finalWord += MORSE_TABLE[letterMorse];
        }
        finalPhrase += finalWord + ' ';
    }
    return finalPhrase.slice(0, finalPhrase.length - 1);
}

module.exports = {
    decode
}