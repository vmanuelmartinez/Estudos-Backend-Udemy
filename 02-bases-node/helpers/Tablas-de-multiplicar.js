const fs = require('fs'); 

const CriarTabuada = async (base = 5) => {

    try {
        
    console.log('=================')
    console.log('Tabla del:', base )
    console.log('=================')
    let saida = '';

    for (let i = 1; i <= 10; i++) {
        saida += `${base} X ${i} = ${base * i}\n`
    }

    console.log(saida)

    fs.writeFileSync(`tabla-${ base }.txt`, saida);
    
    return `tabla-${base}.txt creada`
        
    } catch (error) {
        throw (err);
    }

}

module.exports = {
    CriarTabuada
}