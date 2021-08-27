
const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
/**
 * @description Root Route
 * @method GET /
 */

route.get('/', services.homeRoutes);

/**
 * @description add animal
 * @method GET /
 */

route.get('/add-animal',services.add_animal)

/**
 * @description update animal
 * @method GET /
 */

route.get('/update-animal', services.update_animal)

//API
route.post('/api/animals', controller.create)
route.get('/api/animals', controller.find)
route.put('/api/animals/:id', controller.update)
route.delete('/api/animals/:id', controller.delete)

module.exports = route