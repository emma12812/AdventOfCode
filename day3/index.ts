import * as fs from 'fs';
const data = fs.readFileSync('1.txt', 'utf8');

const bags = data.split(/\r?\n/)
let priority = 0;

for (let i = 0; i < bags.length; i+=3) {
    const elements = [bags[i], bags[i+1], bags[i+2]];
    let found = false;
    elements[0].split("").forEach((char) => {
        if (!found && elements[1].includes(char) && elements[2].includes(char)) {
            found = true;
            if (char.toUpperCase() === char) {
                priority += (char.charCodeAt(0) - 64) + 26
                return;
            } else {
                priority += char.charCodeAt(0) - 96
                return;
            }
        }
    })
    // elements.forEach(bag => {
    //     const first = bag.slice(0, bag.length / 2)
    //     const second = bag.slice(bag.length / 2, bag.length)
    //     for (let i = 0; i < first.length; i++) {
    //         if (second.includes(first[i])) {
    //             if (first[i].toUpperCase() === first[i]) {
    //                 priority += (first[i].charCodeAt(0) - 64) + 26
    //                 return;
    //             } else {
    //                 priority += first[i].charCodeAt(0) - 96
    //                 return;
    //             }
    //         }
    //     }
    // })
}


console.log(priority)