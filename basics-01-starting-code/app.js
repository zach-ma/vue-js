const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue",
      //   courseGoalA: "<h2>Finish the course and learn Vue</h2>",
      courseGoalA: "Finish the course and learn Vue",
      //   courseGoalB: "<h2>Master Vue and build amazing apps</h2>",
      courseGoalB: "Master Vue and build amazing apps",
      vueLink: "https://vuejs.org/",
    }; // always return object
  },
  // NOTE methods have to be called in HTML
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // return "Learn Vue!";
        return this.courseGoalA;
      } else {
        // return "Master Vue!";
        return this.courseGoalB;
      }
    },
  },
});

// which html should be controled by vue app
// <section id="user-goal">
app.mount("#user-goal"); // NOTE css id selector, each vue app can only connect to one html element
