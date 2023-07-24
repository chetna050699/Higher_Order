const people = [
    {
      name: 'bob',
      age: 20,
      position: 'developer',
    },
    {
      name: 'anna',
      age: 25,
      position: 'designer',
    },
    {
      name: 'susy',
      age: 30,
      position: 'the boss',
    },
    {
      name: 'john',
      age: 26,
      position: 'intern',
    },
  ];


const ages=people.map((person)=>
{
    return person.age
});

console.log(ages);


const newPeople=people.map((item)=>{
    return {
        firstName:item.name.toUpperCase(),
        oldAge:item.age+23
    }

})


console.log(newPeople);