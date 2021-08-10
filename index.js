// Code your solutions in this file

function writeCards(name, event){
    let namesArray = [];
    for (let i = 0; i < name.length; i++){
        namesArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    console.log(namesArray);
    return namesArray;
}

function countDown(int){
    let count = int;
    while (count >= 0) {
        console.log(count--);
    }
}