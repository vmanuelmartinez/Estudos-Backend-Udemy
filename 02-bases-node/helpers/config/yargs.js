const argv = require('yargs') // Yarg: Intérprete da consola :)

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'É a base da tabuada de multiplicação'
    })
    .option('a', {
        alias: 'ate', 
        type: 'number',
        default: 10,
        describe: 'Esse aqui é o numero ate onde eu quero a tabuada'
        
    })
    .option('l', {
        alias: 'listar', 
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Mostra a tabuada na consola'
        
    })
    .check((argv, options) => {
        if ( isNaN ( argv.b )){
            throw 'A base tem que ser um número'
        } else return true;
    }).argv;


    module.exports = argv;