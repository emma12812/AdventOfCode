import * as fs from 'fs';
const data =  fs.readFileSync('1.txt','utf8');

const elves = data.split(/\n\s*\n/)

let highest = 0;
let second = 0;
let third = 0;
elves.forEach(elf => {
    const values = elf.split(/\r?\n/);
    let total=0;
    values.forEach(value =>{
        total = Number(value) + Number(total); 
    })
    if (total>highest){
        third= second;
        second = highest;
        highest=total;
        
    }
    else if(total>second){
        third=second;
        second=total;
    }
    else if (total>third){
        third=total;
    }

});
console.log(highest + second + third) 
console.log(second)