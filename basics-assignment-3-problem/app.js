const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return this.number + " Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return this.number + " Too much!";
      }
    },
  },
  watch: {
    // Watch for changes in "result" and reset the value to 0 after 5 seconds
    result(value) {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 3000);
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
