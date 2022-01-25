<template>
  <div>
    <h1>Show ofccc</h1>
    <flash-message></flash-message>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="tasks icon"></i> Type</div>
      <input type="text" readonly :value="ofccc.ofccc_Type" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Lat</div>
      <!-- <label>{{ ofccc.ofccc_Lat }}</label> -->
      <input type="number" step="0.000000000000001" readonly :value="ofccc.ofccc_Lat" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Lng</div>
      <input type="number" step="0.000000000000001" readonly :value="ofccc.ofccc_Lng" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> OLT ID</div>
      <input type="text" readonly :value="ofccc.olt_id" />
    </div>
    <div class="actions">
      <router-link
        :to="{ name: 'edit-ofccc', params: { id: this.$route.params.id } }"
      >
        Edit ofccc
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/Helpers";
export default {
  name: "show-ofccc",
  data() {
    return {
      ofccc: "",
    };
  },
  async mounted() {
    this.ofccc = await api.getofccc(this.$route.params.id);
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