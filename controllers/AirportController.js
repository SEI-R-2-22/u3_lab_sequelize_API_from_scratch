const { Airport, Plane, Ticket } = require("../models");


const GetAllAirport = async (req, res) => {
  try {
    const recents = await Airport.findAll();
    res.send(recents);
  } catch (error) {
    throw error;
  }
};

const newAirport = async (req, res) => {
  try {
    let airportBody = {
      ...req.body,
    };
    let airport = await Airport.create(airportBody);
    res.send(airport);
  } catch (error) {
    throw error;
  }
};

const UpdateAirport = async (req, res) => {
  try {
   let AirportId = parseInt(req.params._id)
   let updateAirport = await Airport.update(req.body, {
       where: {id: AirportId},
       returning: true
   })   
   res.send(updateAirport)
  } catch (error) {
      throw error 
  }
}
const DeleteAirport = async (req, res) => {
  try {
    let airport_Id = parseInt(req.params.airport_id);
    await Airport.destroy({
      where: { id: airport_Id },
    });
    res.send({ message: " DESTROYED " + airport_Id });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newAirport,
  UpdateAirport,
  DeleteAirport,
  GetAllAirport,
}
