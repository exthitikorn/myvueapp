<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/olts" exact class="item">
            <i class="tasks icon"></i> OLT
          </router-link>
          <router-link to="/ofcccs" exact class="item">
            <i class="tasks icon"></i> ofccc
          </router-link>
          <router-link to="/sdps" exact class="item">
            <i class="tasks icon"></i> SDP
          </router-link>
          <router-link to="/users" exact class="item">
            <i class="tasks icon"></i> User
          </router-link>
        </div>
      </div>
    </div>
    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>