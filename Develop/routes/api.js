const router = require("express").Router();
const db = require("../models");
const mongojs = require("mongojs");

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    {
      $set: {
        exercises: [
          {
            name: req.body.name,
            type: req.body.type,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps,
            duration: req.body.duration,
            distance: req.body.distance,
          },
        ],
      },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

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
    .sort({ _id: 1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
