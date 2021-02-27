import Sender from "./components/Sender.vue";
import Receiver from "./components/Receiver.vue";

// adds routingspathways
export default [
  { path: "/", component: Sender },
  { path: "/bus-stop", component: Receiver },
];
