const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    // NOTE whenever name changes, this watcher function will be executed
    // name(value) {
    //   if (!value) {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (!value) {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  // NOTE use computed as data properties
  computed: {
    fullname() {
      console.log("Running again...");
      if (!this.name || !this.lastName) {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    // outputFullname() {
    //   if (!this.name) return "";
    //   return this.name + " Ma";
    // },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
