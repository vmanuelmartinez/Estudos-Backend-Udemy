const fs = require('fs');

const CriarTabuada = async (base = 5, listar = false, ate = 10 ) => {

    try {

        let saida = '';

        for (let i = 1; i <= ate; i++) {
            saida += `${base} X ${i} = ${base * i}\n`
        }

        if (listar){
            console.log('=================')
            console.log('Tabla del:', base)
            console.log('=================')
            console.log(saida)

        }

        
        fs.writeFileSync(`./salidas/Tablas-de-multiplicar.js.${base}.txt`, saida);

        return `tabla-${base}.txt creada`

    } catch (err) {
        throw (err);
    }

}

module.exports = {
    CriarTabuada
}