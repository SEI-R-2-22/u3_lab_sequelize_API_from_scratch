const Router = require('express').Router()

const CertificateRouter = require('./CertificateRouter')
const StudyRouter = require('./StudyRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/certificate', CertificateRouter)
Router.use('/study', StudyRouter)
Router.use('/comment', CommentRouter)


module.exports= Router