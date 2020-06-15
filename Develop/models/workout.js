const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: String,
    default: new Date().setDate(new Date().getDate()),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        default: "N/A",
        //required: "Enter name for workout",
      },
      type: {
        type: String,
        trim: true,
        default: "N/A",
        //required: "Enter type for workout",
      },
      weight: {
        type: Number,
        default: 0,
        //required: "Enter weight",
      },
      sets: {
        type: Number,
        default: 0,
        //required: "Enter sets",
      },
      reps: {
        type: Number,
        default: 0,
        //required: "Enter reps",
      },
      duration: {
        type: Number,
        default: 0,
        //required: "Enter duration",
      },
      distance: {
        type: Number,
        default: 0,
        //required: "Enter distance travelled",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
