const { Router } = require('express');
const router = Router()
const { agregarProducto, mostrarProducto, actualizarProducto, borrarProducto } = require('../controllers/productosController')

// El router base '/api/productos' implementará cuatro funcionalidades:

// GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)

router.get('/id?', mostrarProducto)

// POST: '/' - Para incorporar productos al listado (disponible para administradores)

router.post('/', agregarProducto)

// PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)

router.put('/:id', actualizarProducto)

// DELETE: '/:id' - Borra un producto por su id (disponible para administradores)

router.delete('/:id', borrarProducto)

module.exports = router