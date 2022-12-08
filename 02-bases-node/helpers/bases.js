const { CriarTabuada } = require('../helpers/Tablas-de-multiplicar')

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    
})

    .argv;













console.clear();

console.log(process.argv);
console.log(argv)

console.log('base: yargs', argv.base);






// const base = 5;

// CriarTabuada ( base )

// .then(nomeArquivo => console.log(nomeArquivo, 'criado'))
// .catch(err => console.log(`Parece que há algo errado`))


