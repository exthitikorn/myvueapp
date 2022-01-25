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
const oltURL = 'http://localhost:3000/olts/';
const ofcccURL = 'http://localhost:3000/ofcccs/';
const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });
export const api = {
  //OLT api
  getolt: handleError(async id => {
    const res = await axios.get(oltURL + id);
    return res.data;
  }),
  getolts: handleError(async () => {
    const res = await axios.get(oltURL);
    return res.data;
  }),
  deleteolt: handleError(async id => {
    const res = await axios.delete(oltURL + id);
    return res.data;
  }),
  createolt: handleError(async payload => {
    const res = await axios.post(oltURL, payload);
    return res.data;
  }),
  updateolt: handleError(async payload => {
    const res = await axios.put(oltURL + payload._id, payload);
    return res.data;
  }),
  //ofccc api
  getofccc: handleError(async id => {
    const res = await axios.get(ofcccURL + id);
    return res.data;
  }),
  getofcccs: handleError(async () => {
    const res = await axios.get(ofcccURL);
    return res.data;
  }),
  deleteofccc: handleError(async id => {
    const res = await axios.delete(ofcccURL + id);
    return res.data;
  }),
  createofccc: handleError(async payload => {
    const res = await axios.post(ofcccURL, payload);
    return res.data;
  }),
  updateofccc: handleError(async payload => {
    const res = await axios.put(ofcccURL + payload._id, payload);
    return res.data;
  })
};