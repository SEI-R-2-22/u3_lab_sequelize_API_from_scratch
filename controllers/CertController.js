const { Certificate, StudyResource, Comment } = require("../models")



const GetAllCert = async (req, res) => {
    try {
      const cert = await Certificate.findAll({
        include: [
          {model: StudyResource, as: 'study', attributes: ['displayname', 'url']},
          {model: Comment, as: 'comments', attributes: ['text', 'likes']}
        ]
      })
        res.send({cert})
    } 
      catch (error) {
          throw error
      }
    }

module.exports = {
    GetAllCert
}
