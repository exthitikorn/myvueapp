<template>
  <div>
    <h1>Show OLT</h1>
    <flash-message></flash-message>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i> OLT ID</div>
      <input type="text" readonly :value="olt.olt_id" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i> Name</div>
      <input type="text" readonly :value="olt.olt_Name" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i> Rack</div>
      <input type="text" readonly :value="olt.olt_Rack" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i> Shelf</div>
      <input type="text" readonly :value="olt.olt_Shelf" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i> Slot</div>
      <input type="text" readonly :value="olt.olt_Slot" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class=""></i> Port</div>
      <input type="text" readonly :value="olt.olt_Port" />
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit-olt', params: { id: this.$route.params.id } }"> Edit OLT</router-link>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/Helpers";
export default {
  name: "show",
  data() {
    return {
      olt: "",
    };
  },
  async mounted() {
    this.olt = await api.getolt(this.$route.params.id);
  },
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>