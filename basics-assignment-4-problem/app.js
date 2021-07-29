const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      display: true,
      colorInput: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.display,
        hidden: !this.display,
      };
    },
    // userClasses() {
    //   return {
    //     user1: this.userInput === "user1",
    //     user2: this.userInput === "user2",
    //   };
    // },
    // displayClasses() {
    //   return { visible: this.display, hidden: !this.display };
    // },
  },
  methods: {
    toggle() {
      this.display = !this.display;
    },
  },
});

app.mount("#assignment");
