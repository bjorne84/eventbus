<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Eventbus</h3>
    <div>
      <h1>Data to send</h1>

      <p>Value to be send: {{ this.sendString }}</p>
      <router-link v-bind:to="'/bus-stop'">
        <p @click="emitValue()">Click here to start the bus</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";

//import Receiver from "./Receiver.vue";
//import tes from './tes.vue';
export default {
  components: {},
  name: "Sender",
  props: {
    msg: String,
  },
  data() {
    return {
      sendString: "string to export",
    };
  },
  methods: {
    emitValue() {
      console.log("hello from emitValue");
      console.log(this.sendString);
      EventBus.$emit("string-send", sendString);
    },
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
