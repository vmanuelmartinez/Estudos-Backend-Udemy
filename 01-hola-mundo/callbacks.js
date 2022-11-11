const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Chachita'
    }

    setTimeout(() => {
        callback(usuario)
    }, 5000)
}

getUsuarioByID(10, (usuario) => {
    console.log(usuario);
})

