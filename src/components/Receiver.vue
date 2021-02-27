<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Eventbus - Receiver</h3>
    <div>
      <h1>Data Received:</h1>
      <p>{{ this.stringReceived }}</p>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";
export default {
  name: "Receiver",
  props: {
    msg: String,
  },
  data() {
    return {
      stringReceived: "",
    };
  },
  async created() {
    EventBus.$on("string-send", (value) => {
      this.stringReceived = value;
      console.log("inside created, next up value Received");
      console.log(value);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
