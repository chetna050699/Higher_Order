const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;

console.log(restOfTheFruits);


// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const {job,...rest}=person
console.log(job,rest);



const {name,...bananas}=person
console.log(name,bananas);



