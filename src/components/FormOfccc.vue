<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Type</div>
      <input
        type="text"
        placeholder="Enter Type..."
        v-model="ofccc.ofccc_Type"
      />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Latitude</div>
      <input
        type="number"
        step="0.000000000000001"
        placeholder="Enter Latitude..."
        v-model="ofccc.ofccc_Lat"
      />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Longitude</div>
      <input
        type="number"
        step="0.000000000000001"
        placeholder="Enter Longitude..."
        v-model="ofccc.ofccc_Lng"
      />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>OLT ID</div>
      <input type="text" placeholder="Enter OLT ID..." v-model="ofccc.olt_id" />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ofccc-form",
  props: {
    ofccc: {
      type: Object,
      require: false,
      default: () => {
        return {
          ofccc_Type: "",
          ofccc_Lat: "",
          ofccc_Lng: "",
          olt_id: "",
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
        this.ofccc.ofccc_Type === "" ||
        this.ofccc.ofccc_Lat === "" ||
        this.ofccc.ofccc_Lng === "" ||
        this.ofccc.olt_id === ""
      ) {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.ofccc);
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