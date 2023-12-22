const marvel_hero =["thor", "Ironman", "spiderman"]
const dc_hero =["superman", "flash", "batman"]

 const d =marvel_hero.push(dc_hero) // return size of new array
// console.log(marvel_hero)
// console.log(marvel_hero[3][1]);

 const all_hero = marvel_hero.concat(dc_hero)
// console.log(marvel_hero)
// console.log(d)
//console.log(all_hero)

const all_new_hero =[...marvel_hero, ...dc_hero]
//console.log(all_new_hero);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array =another_array.flat(Infinity)
//console.log(real_another_array)

console.log(Array.isArray("Hitesh"))


console.log(Array.from({name:"hitesh"})) // interseting


let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



