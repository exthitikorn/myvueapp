<template>
  <div>
    <h1>SDP</h1>
    <a href="/sdps/new" class="positive ui button">New</a>
    <flash-message></flash-message>
    <br />
    <div v-if="sdps.length > 0">
      <table id="sdps" class="ui celled compact table">
        <thead>
          <tr>
            <th><i class=""></i>SDP ID</th>
            <th><i class=""></i>Type</th>
            <th><i class=""></i>Lattitude</th>
            <th><i class=""></i>Longitude</th>
            <th><i class=""></i>ofccc ID</th>
            <th><i class="info circle icon"></i></th>
            <th><i class="edit icon"></i></th>
            <th><i class="trash icon"></i></th>
          </tr>
        </thead>
        <tr v-for="(sdp, i) in sdps" :key="i">
          <td>{{ sdp.sdp_id }}</td>
          <td>{{ sdp.sdp_Type }}</td>
          <td>{{ sdp.sdp_Lat }}</td>
          <td>{{ sdp.sdp_Lng }}</td>
          <td>{{ sdp.ofccc_id }}</td>
          <!-- <td width="75" class="center aligned">
            <router-link :to="{ name: 'show-ofccc', params: { id: sdp.ofccc_id } }"
              >{{ sdp.ofccc_id }}</router-link>
          </td> -->
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'show-sdp', params: { id: sdp._id } }"
              >Show</router-link>
          </td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'edit-sdp', params: { id: sdp._id } }"
              >Edit</router-link>
          </td>
          <td width="75" class="center aligned" @click.prevent="onDestroy(sdp._id)">
            <a :href="`/sdps/${sdp._id}`">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>You don't have any SDP!.</div>
  </div>
</template>

<script>
import { api } from "../helpers/Helpers";
export default {
  name: "sdps",
  data() {
    return {
      sdps: [],
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deletesdp(id);
      this.flash("SDP deleted sucessfully!", "success");
      const newsdps = this.sdps.filter((sdp) => sdp._id !== id);
      this.sdps = newsdps;
    },
  },
  async mounted() {
    this.sdps = await api.getsdps();
  },
};
</script>
