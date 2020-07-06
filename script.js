// What floor does santa end up on
// ( should go up a floor
// ) should go down a floor

//What step does santa enter the basement

//allows you to access your file system
const fs = require('fs');

let question1 = () => {
    fs.readFile('./floors.txt', (err, data) => {
        console.time('fun challenge 1');
        
        const arrayOfFloors = data.toString().split('');
    
        const floor = arrayOfFloors.reduce((acc, sym) => {
            if(sym === '(') {
                return acc += 1;
            } else if (sym === ')') {
                return acc -= 1;
            }
        }, 0);

        console.log('floor is', floor);
        console.timeEnd('fun challenge 1');
    });
}

question1();
    
let question2 = () => {
    fs.readFile('./floors.txt', (err, data) => {
        console.time('fun challenge 2');
        
        const arrayOfFloors = data.toString().split('');
        let accummlator = 0;
        let counter = 0;

        const enteredBasement = arrayOfFloors.some((sym) => {
            if(sym === '(') {
                accummlator += 1;
            } else if (sym === ')') {
                accummlator -= 1;
            }
            counter ++;
            return accummlator < 0;
        });

        console.log('counter is', counter);
        console.timeEnd('fun challenge 2');
    });
}

question2();


