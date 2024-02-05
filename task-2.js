let numbers = [12, 98, 5, 41, 23, 78, 46];

const evens = [];

for(let i = 0; i < numbers.length; i++){

    const num = numbers[i];
    
    if (num % 2 === 0) {
        evens.push(num);
        // console.log(evens);
}
}

console.log(evens);