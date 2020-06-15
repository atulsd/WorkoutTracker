const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    console.log("Inside api.js add exercise function.....");
    const id = location.search.split("=")[1];
    let res;
    if (id === undefined) {
      value = "/api/workouts/undefined";
      console.log("it is undefined");
      debugger;
    } else value = "/api/workouts/" + id;
    console.log("value is", value);
    try {
      res = await fetch(value, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    let res;
    try {
      console.log("Trying to create workout......");
      debugger;
      res = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();
    return json;
  },

  async getWorkoutsInRange() {
    let res;
    try {
      res = await fetch(`/api/workouts/range`);
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();
    return json;
  },
};
