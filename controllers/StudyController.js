const { StudyResource } = require("../models")


const PostStudy = async (req, res) => {
    try {
        let certId = parseInt(req.params.cert_id)
        let study = {
            certId,
            ...req.body
        }
        let postComment = await StudyResource.create(study)
        res.send(postComment)
      } catch (error) {
        throw error
      }
    }


module.exports = {
    PostStudy
}