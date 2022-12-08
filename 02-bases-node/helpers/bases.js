const { CriarTabuada } = require('../helpers/Tablas-de-multiplicar')
const argv = require('yargs') // Yarg: Intérprete da consola :)

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        
    })
    .check((argv, options) => {
        if ( isNaN ( argv.b )){
            throw 'A base tem que ser um número'
        } else return true;
    }).argv;


console.clear();

console.log(argv)

  CriarTabuada ( argv.b, argv.l )

  .then(nomeArquivo => console.log(nomeArquivo, 'criado'))
  .catch(err => console.log(err) );


