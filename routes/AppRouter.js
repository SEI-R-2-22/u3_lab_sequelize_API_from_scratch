const Router = require('express').Router()
const PropertyRouter = require('./PropertyRouter')
const AddressRouter = require('./AddressRouter')
const TenantRouter = require('./TenantRouter')
Router.use('/property', PropertyRouter)
Router.use('/address', AddressRouter)
Router.use('/tenant', TenantRouter)

module.exports = Router