const fs = require('fs')

let carrito = JSON.parse(fs.readFileSync('./src/carrito.txt', 'utf-8'))
let productos = JSON.parse(fs.readFileSync('./src/productos.txt', 'utf-8'))


class Carrito {
    constructor(id, timestamp, productosArray) {
        this.id = id,
            this.timestamp = Date.now(),
            // this.productosArray = JSON.parse(productosArray)    
            this.productosArray = productosArray  
    }

    static agregarProductoClass(nuevoProductoACarrito) {
        return [nuevoProductoACarrito]
        // return console.log(productosArray)   
     }

     static agregarOtroProductoClass(Otroproducto) {
        // this.productosArray += Otroproducto
       this.productosArray.push(Otroproducto)
        console.log('hola desde agregarOtroProductoClass')
            }
    }
   

// POST: '/' - Crea un carrito y devuelve su id. router.post('/', crearCarrito)

const crearCarrito = (req, res) => {
    console.log('crearCarrito')
    
    let productosArrayNumber = req.body.productosCarritoBody
    let id = Number(carrito.length + 1)
    timestamp = Date.now()

    console.log(productosArrayNumber)

        const productosArray = productos.find(product => product.id === Number(productosArrayNumber)
    )
        console.log('prodcuto a agregar', productosArray)

        console.log(productosArray)
    const nuevoCarrito = new Carrito(id, timestamp, Carrito.agregarProductoClass(productosArray))
  
       fs.writeFileSync('./src/carrito.txt', JSON.stringify(carrito))
    res.json(nuevoCarrito)
    
}
// DELETE: '/:id' - Vacía un carrito y lo elimina. 
// router.delete('/:id', vaciarCarrito)

const vaciarCarrito = (req, res) => {
    console.log('vaciarCarrito')

    const idCarrito = Number(req.params.id)
    carrito.splice((idCarrito - 1), 1)
    fs.writeFileSync('./src/carrito.txt', JSON.stringify(carrito))
    res.sendStatus(200)
    console.log(carrito)
}

// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
// router.get('/:id/productos', listaProductosCarrito)

const listaProductosCarrito = (req, res) => {
    console.log('listaProductosCarrito')

    const { id } = req.params

    let listaProductosCarrito = carrito.filter(car => {
        return car.id === Number(id)
    })
    console.log(id)

    console.log(listaProductosCarrito)

    listaProductosCarrito.map((e) => {
        console.log(e.productosArray)
    })
}

// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
// router.post('/:id/productos', agregarProductoCarrito)

const agregarProductoCarrito = (req, res) => {
    console.log('agregarProductoCarrito')

    const { id } = req.params

    
    let carritoEncontrado = carrito.filter(car => {
        return car.id === Number(id)
    })
    console.log('id carritto por params', id)

    console.log('Carrito encontrado', carritoEncontrado)
    
    console.log(carrito)
  
    const productoId = req.body.agregarProducto
    console.log(productoId)

        const producto = productos.find(product => product.id === Number(productoId)
    )
        console.log('prodcuto a agregar', producto)

        // Carrito.agregarOtroProductoClass(producto)
// fs.writeFileSync('./src/carrito.txt', JSON.stringify(carrito))
}


// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
// router.delete('/:id/productos/:id_prod', eliminarProductoCarrito)

const eliminarProductoCarrito = (req, res) => {
    console.log('eliminarProductoCarrito')

}

module.exports = { crearCarrito, vaciarCarrito, listaProductosCarrito, agregarProductoCarrito, eliminarProductoCarrito }