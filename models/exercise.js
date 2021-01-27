const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: true,
            enum: ["resistance", "cardio"]
    
        },
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
    
        },
        weight: Number,

        reps: Number,

        sets: Number,
        
        distance: Number,
    }]

    

})



const Exericse = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exericse


// type: "resistance",
// name: "Push Press",
// duration: 25,
// weight: 185,
// reps: 8,
// sets: 4
// }


// type: "cardio",
//         name: "Running",
//         duration: 25,
//         distance: 4