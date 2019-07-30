const db = require('./db')

// register models
require('./models')

module.exports = db

//  Schema:
//      User
//          ClimbingSession
//              Route
//      Location
