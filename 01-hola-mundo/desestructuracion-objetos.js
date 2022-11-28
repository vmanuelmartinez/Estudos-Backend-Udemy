const batman = {
    nombre: 'Christian',
    apellido: 'Bale',
    poder: 'oscuridad',
    getNombre () {
        return `${ this.nombre } ${ this.apellido } ${ this.poder}`
    }
} 
console.log(batman.getNombre()  );


// --> Primera Forma.

const { nombre, apellido, poder, edad = 10 } = batman;
console.log(nombre, apellido, poder, edad )

/* Segunda forma

const heroes = ['deadpool', 'superman', 'batman' ]

 const h1 = heroes[0];     
 const h2 = heroes[1];      
 const h3 = heroes[2];    
console.log(h1);  */

// También puede ser este caso:
const heroes = ['deadpool', 'superman', 'batman' ]
const [ , , h2] = heroes;
console.log( h2);