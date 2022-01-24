import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});
const vm = new Vue();
const baseURL = 'http://localhost:3000/olts/';
const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });
export const api = {
  getolt: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getolts: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteolt: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createolt: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updateolt: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};