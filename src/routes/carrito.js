const { Router } = require('express');
const router = Router()

const { crearCarrito, vaciarCarrito, listaProductosCarrito, agregarProductoCarrito, eliminarProductoCarrito } = require('../controllers/carritoController')

// El router base '/api/carrito' implementará tres rutas disponibles para usuarios y administradores:

// POST: '/' - Crea un carrito y devuelve su id.

router.post('/', crearCarrito)

// DELETE: '/:id' - Vacía un carrito y lo elimina.

router.delete('/:id', vaciarCarrito)

// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito

router.get('/:id/productos', listaProductosCarrito)

// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto

router.post('/:id/productos', agregarProductoCarrito)

// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

router.delete('/:id/productos/:id_prod', eliminarProductoCarrito)

module.exports = router