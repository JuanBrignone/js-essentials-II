// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2) 
function getTotal(inventory){
    let total = 0;
    inventory.forEach(article => {
        total += (article.price)*(article.quantity)
    });
    return "El total es: " + total;
}
getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
console.log(getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]));

// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(inventory){
    let count = 0;
    for(let i = 0; i < inventory.length; i ++){
        if(inventory[i] === '🍌'){
            count ++
        }
    }
    return count;
}
console.log("Hay " + countBanana(['🥑','🍌','🥭', '🍌']) +" bananas");

// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
function filterEvenNumbers(numbers){
    let numbers2 = [];
    for(let i = 0; i < numbers.length; i ++){
        if(numbers[i] % 2 === 0){
            numbers2.push(numbers[i]);
        }
    }
    return numbers2;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers));

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
function squareNumbers(numbers1){
    let numbers2 = [];
    for(let i = 0; i < numbers1.length; i ++){
        numbers2.push(numbers1[i]**2);
    }
    return numbers2;
}
const numbers1 = [1, 2, 3, 4, 5];
console.log(squareNumbers(numbers1));

// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5
function findMax(numbers2){
    const max=Math.max(...numbers2);
    return max;
}
const numbers2 = [1, 2, 3, 4, 5];
console.log(findMax(numbers2));

// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 32.5
function calculateAverageAge(people){
    let totalAge = 0;
    for(let i = 0; i < people.length; i ++){
        totalAge +=people[i].age;
    }
    let average = totalAge / people.length;
    return average;
}
const people = [
    { name: "Juan", age: 25 },
    { name: "Carla", age: 30 },
    { name: "Lucia", age: 35 },
    { name: "El Chengue", age: 49 }
    ];
console.log(calculateAverageAge(people));

// 07 - function  combinedHobbies(persons)
// Function to combine hobbies from all persons

// const persons = [
//     {
//       name: 'Paula',
//       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
//     },
//     {
//       name: 'Martin',
//       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
//     },
//     {
//       name: 'Juan',
//       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
//     },
//     {
//       name: 'Veronica',
//       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
//     }
//   ];

// combinedHobbies(persons)
// Expected output:
// [
//   'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️'
// ]
function combinedHobbies(persons) {
    let allHobbies = [];
    persons.forEach(person => {
        allHobbies = allHobbies.concat(person.hobbies);
    });
    return allHobbies;
}
const persons = [
     {
       name: 'Paula',
       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
    },
    {
       name: 'Martin',
       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
     },
     {
      name: 'Juan',
       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
    },
   {
       name: 'Veronica',
       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
     }
];
console.log(combinedHobbies(persons));


// 08 - function printChemicalInfo(chemicals)
// const chemicals = [
//     {
//       compoundId: 'CHEM001',
//       name: 'Aspirin',
//       formula: 'C9H8O4',
//       description: 'Aspirin is a common medication used to reduce pain and inflammation.',
//       molecularWeight: '180.16 g/mol',
//       meltingPoint: '135°C',
//       boilingPoint: '140°C',
//       solubility: 'Slightly soluble in water'
//     },
//     {
//       compoundId: 'CHEM002',
//       name: 'Caffeine',
//       formula: 'C8H10N4O2',
//       description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
//       molecularWeight: '194.19 g/mol',
//       meltingPoint: '238°C',
//       boilingPoint: '178°C',
//       solubility: 'Freely soluble in water'
//     },
//     {
//       compoundId: 'CHEM003',
//       name: 'Ethanol',
//       formula: 'C2H6O',
//       description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
//       molecularWeight: '46.07 g/mol',
//       meltingPoint: '-114.1°C',
//       boilingPoint: '78.37°C',
//       solubility: 'Miscible with water'
//     }
//   ];

//printChemicalInfo(chemicals)
//Expected output

// +-------------------------------------------------------+
// | Compound ID: CHEM001                                 |
// | Name: Aspirin                                        |
// | Formula: C9H8O4                                      |
// | Description: Aspirin is a common medication used to  |
// | reduce pain and inflammation.                        |
// | Molecular Weight: 180.16 g/mol                       |
// | Melting Point: 135°C                                 |
// | Boiling Point: 140°C                                 |
// | Solubility: Slightly soluble in water                |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM002                                 |
// | Name: Caffeine                                       |
// | Formula: C8H10N4O2                                   |
// | Description: Caffeine is a stimulant found in coffee,|
// | tea, and various energy drinks.                      |
// | Molecular Weight: 194.19 g/mol                       |
// | Melting Point: 238°C                                 |
// | Boiling Point: 178°C                                 |
// | Solubility: Freely soluble in water                  |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM003                                 |
// | Name: Ethanol                                        |
// | Formula: C2H6O                                       |
// | Description: Ethanol, also known as alcohol, is      |
// | commonly used as a solvent and in alcoholic beverages|
// | Molecular Weight: 46.07 g/mol                        |
// | Melting Point: -114.1°C                              |
// | Boiling Point: 78.37°C                               |
// | Solubility: Miscible with water                      |
// +-------------------------------------------------------+

function printChemicalInfo(chemicals){
    chemicals.forEach(chemical => {
        console.log('+-------------------------------------------------------+');
        console.log(`| Compound ID: ${chemical.compoundId.padEnd(48)}|`);
        console.log(`| Name: ${chemical.name.padEnd(52)}|`);
        console.log(`| Formula: ${chemical.formula.padEnd(50)}|`);
        console.log(`| Description: ${chemical.description.padEnd(46)}|`);
        console.log(`| Molecular Weight: ${chemical.molecularWeight.padEnd(39)}|`);
        console.log(`| Melting Point: ${chemical.meltingPoint.padEnd(42)}|`);
        console.log(`| Boiling Point: ${chemical.boilingPoint.padEnd(42)}|`);
        console.log(`| Solubility: ${chemical.solubility.padEnd(45)}|`);
        console.log('+-------------------------------------------------------+');
        console.log('');
    });
}
 const chemicals = [
     {
       compoundId: 'CHEM001',
       name: 'Aspirin',
       formula: 'C9H8O4',
       description: 'Aspirin is a common medication used to reduce pain and inflammation.',
       molecularWeight: '180.16 g/mol',
       meltingPoint: '135°C',
       boilingPoint: '140°C',
      solubility: 'Slightly soluble in water'
     },
     {
       compoundId: 'CHEM002',
       name: 'Caffeine',
       formula: 'C8H10N4O2',
       description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
       molecularWeight: '194.19 g/mol',
       meltingPoint: '238°C',
       boilingPoint: '178°C',
       solubility: 'Freely soluble in water'
     },
     {
       compoundId: 'CHEM003',
       name: 'Ethanol',
       formula: 'C2H6O',
       description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
       molecularWeight: '46.07 g/mol',
       meltingPoint: '-114.1°C',
       boilingPoint: '78.37°C',
       solubility: 'Miscible with water'
     }
   ];
printChemicalInfo(chemicals);

// 09 - function getGetUniqueGuestList(guestList)
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];

// Remove duplicated elements from the  guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']
function getGetUniqueGuestList(guestList){
    const Norep = new Set(guestList);
    return Norep;
}
const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];
console.log(getGetUniqueGuestList(guestList));

// 10 - function showUserProfiles(user)
// User data
//

// const user1 = {
//     id: 1,
//     name: 'Carol Smith',
//     profile: {
//       social: {
//          twitter: 'carol.smith',
//          facebook: 'carol.smith77'
//      }
//    }
//};

// const user2 = {
//     id: 2,
//     name: 'Jane Smith',
//     profile: {
//       email: 'jane.smith@example.com'
//     }
//};

//   showUserProfile(user1); // Expected output: 'carol.smith, carol.smith77'
//   showUserProfile(user2); // Expected output: 'jane.smith@example.com'
function showUserProfile(user){
    
    const { profile } = user;

    if (profile.social) {
        
        return Object.values(profile.social).join(', ');
    } 

    return profile.email || '';
}

 const user1 = {
     id: 1,
     name: 'Carol Smith',
     profile: {
       social: {
          twitter: 'carol.smith',
          facebook: 'carol.smith77'
      }
    }
};
 const user2 = {
     id: 2,
     name: 'Jane Smith',
     profile: {
            email: 'jane.smith@example.com',
        }
};
console.log(showUserProfile(user1)); // Expected output: 'carol.smith, carol.smith77'
console.log(showUserProfile(user2)); // Expected output: 'jane.smith@example.com'

// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output

// const leaderBoard = [
//   { player: "John", score: 80 },
//   { player: "Charlie", score: 20 },
//   { player: "Julio", score: 50 },
//   { player: "Bob", score: 80 },
//   { player: "Bobby", score: 11 },
//   { player: "Tommy", score: 43 },
//   { player: "Eric", score: 99 },
//   { player: "Alice", score: 100 },
//   { player: "Alfred", score: 30 },
// ];

// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]

function sortLeaderBoardByScoreDesc(leaderBoard){
    leaderBoard.sort((a, b) => b.score - a.score);
    leaderBoard.forEach((player, index) => {
        console.log(`${player.player}: ${player.score}`);
    });
}
 const leaderBoard = [
   { player: "John", score: 80 },
   { player: "Charlie", score: 20 },
   { player: "Julio", score: 50 },
   { player: "Bob", score: 80 },
   { player: "Bobby", score: 11 },
   { player: "Tommy", score: 43 },
   { player: "Eric", score: 99 },
   { player: "Alice", score: 100 },
   { player: "Alfred", score: 30 },
 ];
 sortLeaderBoardByScoreDesc(leaderBoard);


// 12 - function

// function getTopFiveWorstPlayers(leaderBoard)

// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]

// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.

function getGetUniqueGuestList(leaderBoard){
    leaderBoard.sort((a, b) => a.score - b.score);
    const worst = leaderBoard.slice(0,5);
    worst.forEach((player, index) => {
        console.log(`${player.player}: ${player.score}`);
    });
}
console.log("PEORES 5: ")
getGetUniqueGuestList(leaderBoard);

// 13 - function safeCopy()
// const companyHierarchy = {
//     name: 'Company',
//     departments: [
//       {
//         name: 'Engineering',
//         head: 'Alice',
//         subDepartments: [
//           {
//             name: 'Backend',
//             head: 'Bob',
//             employees: ['Charlie', 'David']
//           },
//           {
//             name: 'Frontend',
//             head: 'Eve',
//             employees: ['Frank', 'Grace']
//           }
//         ]
//       },
//       {
//         name: 'Sales',
//         head: 'Henry',
//         employees: ['Isaac', 'Jane']
//       }
//     ]
//   };

// Deep copy function
// function safeCopy(obj) {
//      ToDo (complete the function here...)
//  }

//   // Example usage
//   const copiedHierarchy = safeCopy(companyHierarchy);

//   // Modify the copied hierarchy
//   copiedHierarchy.departments.push({
//     name: 'Marketing',
//     head: 'Karen',
//     employees: ['Liam', 'Mia']
//   });

//   // Verify independence
//   console.log('Original Company Hierarchy:');
//   console.log(companyHierarchy);

//   console.log('Copied Company Hierarchy with Modifications:');
//   console.log(copiedHierarchy);
