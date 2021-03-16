/*
* Hanya gabut:v
* Don't be a script kidde:)
*/

// MODULE
const readline = require('readline');
const BrainlySearch = require('./brainly')
const chalk = require('chalk');

// INPUT OUTPUT
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// COLOR
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
// BANNER
console.clear()
console.log(color("..............", 'red'))
console.log(color("            ..,;:ccc,.", 'red'))
console.log(color("          ......''';lxO.", 'red'))
console.log(color(".....''''..........,:ld;", 'red'))
console.log(color("           .';;;:::;,,.x,", 'red'))
console.log(color("      ..'''.            0Xxoc:,.  ...", 'red'))
console.log(color("  ....                ,ONkc;,;cokOdc',.", 'red'))
console.log(color(" .                   OMo           ':ddo.", 'red'))
console.log(color("                    dMc               :OO;", 'red'))
console.log(color("                    0M.                 .:o.", 'red'))
console.log(color("                    ;Wd", 'red'))
console.log(color("                     ;XO,", 'red'))
console.log(color("                       ,d0Odlc;,..", 'red'))
console.log(color("                           ..',;:cdOOd::,.", 'red'))
console.log(color("                                    .:d;.':;.", 'red'))
console.log(color("                                       'd,  .'", 'red'))
console.log(color("                                         ;l   ..", 'red'))
console.log(color("                                          .o", 'red'))
console.log(color("    [=] Made by : X - MrG3P5 [=]            ", 'cyan'), color("c", "red"))
console.log(color("    [=] Version : 1.0        [=]             ", 'cyan'), color(".'", "red"))
console.log(color("                                              ", 'cyan'), color(".'", "red"))
console.log('')
console.log('')

// USER INPUT QUESTION
var recursiveAsyncReadLine = function () {
    rl.question('Pertanyaan: ', function (userInput) {
        if (userInput == 'exit' || userInput == 'Exit' || userInput == 'EXIT') {
            console.log(`See you...`)
            process.exit();
        }                          // 5 = Jumlah result
    BrainlySearch(userInput, Number(5), function (res) {
            res.forEach(x => {
                console.log(color(`${x.pertanyaan.replace("Pertanyaan:", "")}\n`, 'green'), color(`Jawaban:`, 'white'), color(`${x.jawaban.judulJawaban.replace("Jawaban:", "")}\n\n`, 'green'))
                recursiveAsyncReadLine();// CALLBACK INPUT
            })
        })
    })
} // CALLBACK INPUT
recursiveAsyncReadLine();
