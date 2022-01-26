<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Name</div>
      <input type="text" placeholder="Enter Name..." v-model="olt.olt_Name" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Rack</div>
      <input type="text" placeholder="Enter Rack..." v-model="olt.olt_Rack" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Shelf</div>
      <input type="text" placeholder="Enter Shelf..." v-model="olt.olt_Shelf" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Slot</div>
      <input type="text" placeholder="Enter Slot..." v-model="olt.olt_Slot" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i>Port</div>
      <input type="text" placeholder="Enter Port..." v-model="olt.olt_Port" />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "olt-form",
  props: {
    olt: {
      type: Object,
      require: false,
      default: () => {
        return {
          olt_Name: "",
          olt_Rack: "",
          olt_Shelf: "",
          olt_Slot: "",
          olt_Port: "",
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
        this.olt.olt_Name === "" ||
        this.olt.olt_Rack === "" ||
        this.olt.olt_Shelf === "" ||
        this.olt.olt_Slot === "" ||
        this.olt.olt_Port === ""
      ) {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.olt);
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