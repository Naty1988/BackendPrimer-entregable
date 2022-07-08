const fs = require('fs')
let productos = JSON.parse(fs.readFileSync('./src/productos.txt', 'utf-8'))


// Controlador de router.post('/', agregarProducto)

const agregarProducto = (req, res) => {
    console.log('agregarProducto')

    const { nombre, descripcion, codigo, foto, precio, stock } = req.body
    id = Number(productos.length + 1)
    timestamp = Date.now()
    productos.push({ id, timestamp, nombre, descripcion, codigo, foto, precio, stock })
    fs.writeFileSync('./src/productos.txt', JSON.stringify(productos))
    res.json(productos)
}

// Controlador de router.put('/:id', actualizarProducto)

const actualizarProducto = (req, res) => {
    console.log('actualizarProducto')

    const { id } = req.params
    let productoActualizar = productos.filter(product => {
        return product.id === id
    })

    console.log('Se actualizará el producto: ', productoActualizar)

    if (req.body.nombre) {
        productos[id - 1].nombre = req.body.nombre
        console.log('Se modifico el campo nombre')
    } else {
        console.log('Campo nombre sin actualizar')
    }

    if (req.body.descripcion) {
        productos[id - 1].descripcion = req.body.descripcion
        console.log('Se modifico el campo descripcion')
    } else {
        console.log('Campo descripcion sin actualizar')
    }

    if (req.body.codigo) {
        productos[id - 1].codigo = req.body.codigo
        console.log('Se modifico el campo codigo')
    } else {
        console.log('Campo codigo sin actualizar')
    }

    if (req.body.foto) {
        productos[id - 1].foto = req.body.foto
        console.log('Se modifico el campo foto')
    } else {
        console.log('Campo foto sin actualizar')
    }

    if (req.body.precio) {
        productos[id - 1].precio = req.body.precio
        console.log('Se modifico el campo precio')
    } else {
        console.log('Campo precio sin actualizar')
    }

    if (req.body.stock) {
        productos[id - 1].stock = req.body.stock
        console.log('Se modifico el campo stock')
    } else {
        console.log('Campo stock sin actualizar')
    }
    console.log('Vista del producto actualizado: ', productos[id - 1])
    fs.writeFileSync('./src/productos.txt', JSON.stringify(productos))
    res.sendStatus(200)
}

// Controlador de router.get('/id?', mostrarProducto)

const mostrarProducto = (req, res) => {

    console.log('Ejecutando mostrarProducto')

    const { id } = req.query

    const producto = productos.filter(product => {
        return product.id === id
    })

    if (id > productos.length) {
        console.log('El id no existe. Mostrando todos los productos')
        res.json(productos)

    } else {
        console.log(producto)
        res.json(producto)
    }
}

// / Controlador de router.delete('/:id', borrarProducto)

const borrarProducto = (req, res) => {
    console.log('borrarProducto')

    const idBorrar = Number(req.params.id)
    productos.splice((idBorrar - 1), 1)
    console.log(idBorrar)
    fs.writeFileSync('./src/productos.txt', JSON.stringify(productos))
    res.sendStatus(200)
    console.log(productos)
}

module.exports = { agregarProducto, actualizarProducto, mostrarProducto, borrarProducto }