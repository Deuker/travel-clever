const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    startpoint:String,
    endpoint:String,
    kilometre: String,
    co2emission:String,
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;