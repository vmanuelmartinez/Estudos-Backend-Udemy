const fs = require('fs');

const CriarTabuada = async (base = 5, listar = false ) => {

    try {

        let saida = '';

        for (let i = 1; i <= 10; i++) {
            saida += `${base} X ${i} = ${base * i}\n`
        }

        if (listar){
            console.log('=================')
            console.log('Tabla del:', base)
            console.log('=================')
            console.log(saida)

        }

         
        fs.writeFileSync(`tabla-${base}.txt`, saida);

        return `tabla-${base}.txt creada`

    } catch (err) {
        throw (err);
    }

}

module.exports = {
    CriarTabuada
}