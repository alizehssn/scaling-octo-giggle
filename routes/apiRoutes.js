//Import Models and Express
const db = require("../models/exercise");
const app = require("express").Router();

//Routes needed: 
//page loads to option to create new workout or continue
//Add exercise to previous workout
//Create new exercise to new workout plan
//view combined weight of multiple exercises on stats

//Returning all previous workouts
app.get("/api/workouts", (req, res) => {
    db.exercise.find({})
        .then((exercise) => {
            res.json(exercise);
        })

});

//Creating new exercise in new workout
app.post("/api/workouts", (req, res) => {
    db.exercise.create({}).then((newWorkout) => {
        res.json(newWorkout);
    })
});

//Adding exercise to previous workout
app.put("api/workouts/:id", ({ params, body }, res) => {
    db.exercise.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } }).then((updatedWorkout) => {
        res.json(updatedWorkout)
    })
});

//Updating workout
app.post("/api/workouts/range", (req, res) => {
    db.exercise.create({})
        .then((data) => res.json((data)))
});



module.exports = app;