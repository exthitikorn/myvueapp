<template>
  <div>
    <h1>OLT</h1>
    <a href="/olts/new" class="positive ui button">New</a>
    <flash-message></flash-message>
    <br>
    <div v-if="olts.length > 0">
      <table id="olts" class="ui celled compact table">
        <thead>
          <tr>
            <th><i class=""></i>Name</th>
            <th><i class=""></i>Rack</th>
            <th><i class=""></i>Shelf</th>
            <th><i class=""></i>Slot</th>
            <th><i class=""></i>Port</th>
            <th><i class="info circle icon"></i></th>
            <th><i class="edit icon"></i></th>
            <th><i class="trash icon"></i></th>
          </tr>
        </thead>
        <tr v-for="(olt, i) in olts" :key="i">
          <td>{{ olt.olt_Name }}</td>
          <td>{{ olt.olt_Rack }}</td>
          <td>{{ olt.olt_Shelf }}</td>
          <td>{{ olt.olt_Slot }}</td>
          <td>{{ olt.olt_Port }}</td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'show-olt', params: { id: olt._id } }"
              >Show</router-link>
          </td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'edit-olt', params: { id: olt._id } }"
              >Edit</router-link>
          </td>
          <td width="75" class="center aligned" @click.prevent="onDestroy(olt._id)">
            <a :href="`/olts/${olt._id}`">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>You don't have any OLT!.</div>
  </div>
</template>

<script>
import { api } from "../helpers/Helpers";
export default {
  name: "olts",
  data() {
    return {
      olts: [],
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deleteolt(id);
      this.flash("olt deleted sucessfully!", "success");
      const newolts = this.olts.filter((olt) => olt._id !== id);
      this.olts = newolts;
    },
  },
  async mounted() {
    this.olts = await api.getolts();
  },
};
</script>