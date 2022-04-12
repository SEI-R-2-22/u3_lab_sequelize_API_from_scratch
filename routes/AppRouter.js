const Router = require('express').Router()
const AddressRouter = require('./AddressRouter')
const PropertyRouter = require('./PropertyRouter')
const TenantRouter = require('./TenantRouter')
Router.use('/property', PropertyRouter)
Router.use('/address', AddressRouter)
Router.use('/tenant', TenantRouter)

module.export = Router