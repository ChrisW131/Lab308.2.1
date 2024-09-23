// plant requires a minimum space of 0.8 square meters
// doubles in number every week
// starting with 20 plants
//78.5375


const pi = 3.1415;
const radius = 5
const gardenArea = pi * radius * radius;
const plantSize = 0.8;
const startingPlants = 20

let week1 = startingPlants * 2
let week2 = week1 * 2**2
let week3 = week2 * 2**3

if (week1 > 0.8 * gardenArea) {
    console.log(`Pruned`)
} else if (0.5 < week1 <0.8 * gardenArea) {
    console.log(`Monitored`)
} else {
    console.log(`Planted`)
}

if (week2 > 0.8 * gardenArea) {
    console.log(`Pruned`)
} else if (0.5 < week2 < 0.8 * gardenArea) {
    console.log(`Monitored`)
} else {
    console.log(`Planted`)
}

if (week3 > 0.8 * gardenArea) {
    console.log(`Pruned`)
} else if (0.5 < week3 < 0.8 * gardenArea) {
    console.log(`Monitored`)
} else {
    console.log(`Planted`)
}
