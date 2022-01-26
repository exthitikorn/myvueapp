<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>SDP ID</div>
      <input type="text" placeholder="Enter SDP ID..." v-model="sdp.sdp_Type" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Type</div>
      <input type="text" placeholder="Enter Type..." v-model="sdp.sdp_Type" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Latitude</div>
      <input
        type="number"
        step="0.000000000000001"
        placeholder="Enter Latitude..."
        v-model="sdp.sdp_Lat"
      />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Longitude</div>
      <input
        type="number"
        step="0.000000000000001"
        placeholder="Enter Longitude..."
        v-model="sdp.sdp_Lng"
      />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>ofccc ID</div>
      <input
        type="text"
        placeholder="Enter ofccc ID..."
        v-model="sdp.ofccc_id"
      />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "sdp-form",
  props: {
    sdp: {
      type: Object,
      require: false,
      default: () => {
        return {
          sdp_id: "",
          sdp_Type: "",
          sdp_Lat: "",
          sdp_Lng: "",
          ofccc_id: "",
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
    };
  },
  methods: {
    onSubmit: function () {
      if (
        this.sdp.sdp_id === "" ||
        this.sdp.sdp_Type === "" ||
        this.sdp.sdp_Lat === "" ||
        this.sdp.sdp_Lng === "" ||
        this.sdp.ofccc_id === ""
      ) {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.sdp);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
