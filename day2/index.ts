import * as fs from 'fs';
const data =  fs.readFileSync('1.txt','utf8');

const rounds = data.split(/\r?\n/)
let score = 0;

rounds.forEach(round =>{
    const gos = round.split(' ')
    if(gos[0] === 'A'){
        if(gos[1] === 'X'){
            score += 3
        }if(gos[1] === 'Y'){
            score += 4

        }if(gos[1] === 'Z'){
            score += 8
        }
    }
    if(gos[0] === 'B'){
        if(gos[1] === 'X'){
            score += 1

        }if(gos[1] === 'Y'){
            score += 5

        }if(gos[1] === 'Z'){
            score += 9
        }
    }
    if(gos[0] === 'C'){
        if(gos[1] === 'X'){
            score += 2
        }if(gos[1] === 'Y'){
            score += 6

        }if(gos[1] === 'Z'){
            score += 7

        }
    }

})
console.log(score)