const Router = require('express').Router()
const SchoolRouter = require('./SchoolRouter')
const ParentRouter = require('./ParentRouter')
const ChildrenRouter = require('./ChildrenRouter')
Router.use('/school', SchoolRouter)
Router.use('/parents', ParentRouter)
Router.use('/children', ChildrenRouter)
module.exports = Router
