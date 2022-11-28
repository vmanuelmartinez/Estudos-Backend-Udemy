const empleados = [  
    
    { id: 1, nombre: 'Fernando' }, { id: 2, nombre: 'Anastacia'}, { id: 3,nombre: 'Carol',
id: 6, nombre: 'Víctor' }
];

const salarios = [
    {   id: 1, salario: 1000 }, { id: 2, salario: 1500, id: 3, salario: 8000000000, id: 6, salario: 'Guardando dinero :) :) :) ' }];


const GetEmpleadosByID = (id, callback) => {

    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        callback( null, empleado.nombre);

    } else {
        callback (`Empleado con ID ${ id } no existe`);
    }

}

const id = 6;

GetEmpleadosByID( id, (err, empleado) => {

    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

const GetSalarioByID = (id, callback) => {
    const salario = salarios.find( s => s.id === id)?.salario

    if (salario){
        callback( null, salario);

    } else{
        callback (`No existe salario para el ID ${ id } informado`)
    }
}


    GetSalarioByID( id, (err, salario) => {

        if (err ){
            return console.log(err);
        }

                    console.log( 'El empleado:', empleado, 'tiene un salario de:', salario  )
        } )
})














