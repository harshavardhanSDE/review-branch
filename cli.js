// finding duplicate:
let array = [1, 2, 3, 3];

let duplicateArray = [];

for ( let item of array ) {
    if ( !duplicateArray.includes(item) ) {
        duplicateArray.push(item);
    }
}

console.log(duplicateArray);