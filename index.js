const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

// задаём число
let secretNumber = Math.floor(Math.random() * 1000)
console.log(`Загадано число ${secretNumber}`)


let counter = 0;

function guessNumber() {
    rl.question("Введите цифру от 0 до 999 или введите q для выхода:", (cmd) => {
        let userNumber = cmd

    // сравниваем результаты 
        if (userNumber === 'q') {
        console.log('Спасибо за участие!')
        rl.close();
        return;
        }

        if (isNaN(userNumber) || +userNumber < 0 || +userNumber > 999) {
            console.log("Введите, пожалуйста, ЧИСЛО от 0 до 999:")        
        }

        else if (+userNumber === secretNumber) {
            counter++
            console.log(`Вы угадали! Число попыток: ${counter}`)
            rl.close();
            return;
        } 

        else if (+userNumber >= secretNumber) {
            counter++            
            console.log(`Вы ввели: ${userNumber}. Введенное число больше загаданного, попробуйте ещё раз. Потрачено попыток: ${counter}`)           
        }

        else if (userNumber <= secretNumber) { 
            counter++           
            console.log(`Вы ввели: ${userNumber}. Введенное число меньше загаданного, попробуйте ещё раз. Потрачено попыток: ${counter}`)
        }   

        guessNumber();

        })
    
}

guessNumber();