<template>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <user-data @set-data="setUserData"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Zach",
        age: 20,
      },
    };
  },
  methods: {
    setUserData(userName, userAge) {
      this.user = {
        name: userName,
        age: +userAge,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
