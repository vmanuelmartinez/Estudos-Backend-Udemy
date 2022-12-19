const { CriarTabuada } = require('../helpers/Tablas-de-multiplicar')
const argv = require('./config/yargs')

console.clear();

  CriarTabuada ( argv.b, argv.l, argv.a )

  .then(nomeArquivo => console.log(nomeArquivo, 'criado'))
  .catch(err => console.log(err) );


