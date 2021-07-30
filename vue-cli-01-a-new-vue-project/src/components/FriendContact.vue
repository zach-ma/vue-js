<template>
  <li>
    <header>
      <!-- <h1>{{ friend.name }}</h1> -->
      <!-- <h1>{{ name }} {{ isFavourate === "1" ? "(Favourate)" : "" }}</h1> -->
      <h1>{{ name }} {{ isFavourate === true ? "(Favourate)" : "" }}</h1>
    </header>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourate">
      Toggle Favourate
    </button>

    <button @click="$emit('delete', id)">
      Delete
    </button>
    <ul v-if="detailsAreVisible">
      <!-- <li><strong>Phone: </strong>{{ friend.phone }}</li> -->
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavourate"], // NOTE camel case, without - dash
  // NOTE provide more info: type or more
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourate: {
      type: Boolean,
      required: false,
      default: false,
      //   validator: function(value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  emits: ["toggle-favourate", "delete"],
  //   emits: {
  //     "toggle-favourate": function(id) {
  //       if (id) {
  //         return true;
  //       } else {
  //         console.warn("Id is missing");
  //         return false;
  //       }
  //     },
  //   },
  data() {
    return {
      detailsAreVisible: false,
      // NOTE set it to the received prop value, and then just use it

      //   friendIsFavourate: this.isFavourate, // no longer need it

      //   friend: {
      //     id: "Manuel",
      //     name: "Manuel Lorenz",
      //     phone: "01234 5678 991",
      //     email: "manuel@localhost.com",
      //   },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourate() {
      //   this.friendIsFavourate = !this.friendIsFavourate;
      this.$emit("toggle-favourate", this.id); // NOTE
    },
    // NOTE can not mutate prop
    // toggleFavourate() {
    //   if (this.isFavourate === "1") {
    //     this.isFavourate = "0";
    //   } else {
    //     this.isFavourate = "1";
    //   }
    // },
  },
};
</script>
