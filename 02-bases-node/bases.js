// 5 x 1 = 5;
// 5 x 2 = 10;
// 5 x 3 = 15;

console.clear();
console.log(`=================`)
console.log(`   Tabla del 5`)
console.log(`=================`)

const base = 5;

for ( let i = 1; i <= 10; i++ ){
    console.log(` ${ base } X ${ i } = ${ base * i }`)
}