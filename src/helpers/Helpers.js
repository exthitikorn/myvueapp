import axios from "axios";
import Vue from "vue";
import VueFlashMessage from "vue-flash-message";
import "vue-flash-message/dist/vue-flash-message.min.css";
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true,
  },
});
const vm = new Vue();
const oltURL = "http://localhost:3000/olts/";
const ofcccURL = "http://localhost:3000/ofcccs/";
const sdpURL = "http://localhost:3000/sdps/";
const userURL = "http://localhost:3000/users/";

const handleError = (fn) => (...params) =>
  fn(...params).catch((error) => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, "error");
  });
export const api = {
  //OLT api
  getolt: handleError(async (id) => {
    const res = await axios.get(oltURL + id);
    return res.data;
  }),
  getolts: handleError(async () => {
    const res = await axios.get(oltURL);
    return res.data;
  }),
  deleteolt: handleError(async (id) => {
    const res = await axios.delete(oltURL + id);
    return res.data;
  }),
  createolt: handleError(async (payload) => {
    const res = await axios.post(oltURL, payload);
    return res.data;
  }),
  updateolt: handleError(async (payload) => {
    const res = await axios.put(oltURL + payload._id, payload);
    return res.data;
  }),
  //ofccc api
  getofccc: handleError(async (id) => {
    const res = await axios.get(ofcccURL + id);
    return res.data;
  }),
  getofcccs: handleError(async () => {
    const res = await axios.get(ofcccURL);
    return res.data;
  }),
  deleteofccc: handleError(async (id) => {
    const res = await axios.delete(ofcccURL + id);
    return res.data;
  }),
  createofccc: handleError(async (payload) => {
    const res = await axios.post(ofcccURL, payload);
    return res.data;
  }),
  updateofccc: handleError(async (payload) => {
    const res = await axios.put(ofcccURL + payload._id, payload);
    return res.data;
  }),
  //SDP api
  getsdp: handleError(async (id) => {
    const res = await axios.get(sdpURL + id);
    return res.data;
  }),
  getsdps: handleError(async () => {
    const res = await axios.get(sdpURL);
    return res.data;
  }),
  deletesdp: handleError(async (id) => {
    const res = await axios.delete(sdpURL + id);
    return res.data;
  }),
  createsdp: handleError(async (payload) => {
    const res = await axios.post(sdpURL, payload);
    return res.data;
  }),
  updatesdp: handleError(async (payload) => {
    const res = await axios.put(sdpURL + payload._id, payload);
    return res.data;
  }),
  //User api
  getuser: handleError(async (id) => {
    const res = await axios.get(userURL + id);
    return res.data;
  }),
  getusers: handleError(async () => {
    const res = await axios.get(userURL);
    return res.data;
  }),
  deleteuser: handleError(async (id) => {
    const res = await axios.delete(userURL + id);
    return res.data;
  }),
  createuser: handleError(async (payload) => {
    const res = await axios.post(userURL, payload);
    return res.data;
  }),
  updateuser: handleError(async (payload) => {
    const res = await axios.put(userURL + payload._id, payload);
    return res.data;
  }),
};
