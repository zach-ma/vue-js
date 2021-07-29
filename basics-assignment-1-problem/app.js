const app = Vue.createApp({
  data() {
    return {
      name: "Zach M",
      age: 20,
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    };
  },
  methods: {
    randomNum() {
      return Math.random();
    },
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
