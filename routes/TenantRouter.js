const Router = require('express').Router()
const controller = require('../controllers/TenantController')

Router.get('/', controller.GetTenants)
Router.get('/:tenant_id', controller.GetTenantProfile)

module.exports = Router
