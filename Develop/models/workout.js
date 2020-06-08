const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name for workout",
  },
  type: {
    type: String,
    trim: true,
    required: "Enter type for workout",
  },
  weight: {
    type: Number,
    required: "Enter weight",
  },
  sets: {
    type: Number,
    required: "Enter sets",
  },
  reps: {
    type: Number,
    required: "Enter reps",
  },
  duration: {
    type: Number,
    required: "Enter duration",
  },
  distance: {
    type: Number,
    required: "Enter distance travelled",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
