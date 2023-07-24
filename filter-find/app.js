const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
  ];

const youngPeople=people.filter((person)=>{
  if(person.age<30){
    return person;
   

  }

})


const developers=people.filter((bananas)=>bananas.position==='developer');

console.log(developers);


const seniorDev=people.filter((bananas)=>bananas.position==='senior developer');

console.log(seniorDev);

const peter=people.find((p)=>p.name==='peter');

console.log(peter);

//with filter you can get an empty arrays in js but with find you will get undefined if there is not a match 
const randomPerson=people.find((bananas)=>bananas.age<35);

console.log(randomPerson);

