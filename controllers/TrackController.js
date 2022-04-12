const { Track } = require('../models')

const GetTracksByAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    const albumTracks = await Track.findAll({ where: { albumId: albumId } })
    res.send(albumTracks)
  } catch (error) {
    throw error
  }
}

const CreateTrack = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let artistId = parseInt(req.params.artist_id)
    let newTrack = {
      albumId,
      artistId,
      ...req.body
    }
    let track = await Track.create(newTrack)
    res.send(track)
  } catch (error) {
    throw error
  }
}

const UpdateTrack = async (req, res) => {
  try {
    let trackId = parseInt(req.params.track_id)
    let updatedTrack = await Track.update(req.body, {
      where: { id: trackId },
      returning: true
    })
    res.send(updatedTrack)
  } catch (error) {
    throw error
  }
}

const DestroyTrack = async (req, res) => {
  try {
    let trackId = parseInt(req.params.track_id)
    await Track.destroy({ where: { id: trackId } })
    res.send({
      message: `TRACK WITH AN ID OF ${trackId} HAS BEEN DESTORYED!!!!`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetTracksByAlbum,
  CreateTrack,
  UpdateTrack,
  DestroyTrack
}
