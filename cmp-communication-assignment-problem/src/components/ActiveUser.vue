<template>
  <section>
    <h2>User Name: {{ username }}</h2>
    <h3>User Age: {{ userage }}</h3>
  </section>
</template>

<script>
export default {
  // NOTE
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
