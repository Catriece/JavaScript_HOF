console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function(plusNumber) {
        return plusNumber + number
    }
}

let plus15 = plus(15)
console.log(plus15(10))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  console.log(users)

  users.forEach((element) => {
    console.log(element["name"]);
  });

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const namesScores = users.map(({name, age, score, isActive}) => ({name, score}))

console.log(namesScores)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const online = users.filter(function (item) {
    return item.isActive == true;
})

console.log(online)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let sorted = users.sort((a, b) => b.score - a.score)

console.log(sorted)



// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let total = users.reduce((pv, cv) => {
  return pv + cv.score
}, 0);

console.log(`Average: ${total/users.length}`)

