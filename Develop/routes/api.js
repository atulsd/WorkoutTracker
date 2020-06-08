const router = require("express").Router();
const db = require("../models");

// router.post("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ _id: -1 })
    .then((dbWorkout) => {
      console.log("inside the router /api/workouts....");
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    //.sort({ date: -1 })
    .then((dbWorkout) => {
      console.log("inside the router /api/workouts/range....");
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
