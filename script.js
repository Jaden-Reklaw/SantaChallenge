//allows you to access your file system
const fs = require('fs');

//Used to read data from a text file
//asynchronous runs second
fs.readFile('./floors.txt', (err, data) => {
    console.time('fun challenge');
    if(err) {
        console.log('error');
    }

    const arrayOfFloors = data.toString().split('');

    const upLevels = arrayOfFloors.filter(sym => sym === ')' );

    const downLevels = arrayOfFloors.filter(sym => sym === '(' );

    console.log('Santa is on floor', upLevels.length - downLevels.length);
    console.timeEnd('fun challenge');
});

