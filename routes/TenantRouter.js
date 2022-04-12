const Router = require('express').Router()
const controller = require('../controllers/TenantController')

Router.get('/', controller.GetTenants)
Router.get('/:tenant_id', controller.GetTenantProfile)
Router.post

module.exports = Router