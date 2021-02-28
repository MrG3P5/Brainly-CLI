const readline = require('readline');
const brainly = require('brainly-scraper')
const figlet = require('figlet')
const chalk = require('chalk');

const rl = readline.createInterface({input : process.stdin,
                         output : process.stdout});

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const soal = 'SOAL: '
const author = 'X - MrG3P5'
const soal1 = soal;
console.clear()
console.log(color(figlet.textSync('  BrainlySearch', { horizontalLayout: 'full' }), 'red'))
console.log('')
console.log(color('                                      Made by : X - MrG3P5', 'white'))
console.log(color('                                      Version : 1.0', 'white'))
console.log('')
console.log('')

var recursiveAsyncReadLine = function () {
    rl.question('Pertanyaan: ', function (userInput) {
        if (userInput == 'exit' || userInput == 'Exit' || userInput == 'EXIT') {
            console.log(`See you...`)
            process.exit();
        }                         // angka 5 untuk berapa result yang ingin ditampilkan ke console
    brainly(userInput.toString(), Number(5)).then((res) => {
        const brainlyResult = []
        res.data.forEach((ask) => {
            const opt = {
                pertanyaan: ask.pertanyaan,
                fotoPertanyaan: ask.questionMedia
            }
            ask.jawaban.forEach(answer => {
                opt.jawaban = {
                    judulJawaban: answer.text,
                    Author: author
                }
            })
            brainlyResult.push(opt)
        })
        console.log(brainlyResult)
        recursiveAsyncReadLine();
    }).catch(err => {
        console.log(err.error)
                });
            });
        };

recursiveAsyncReadLine();