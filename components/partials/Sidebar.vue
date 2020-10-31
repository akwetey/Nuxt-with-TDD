<template>
  <div class="left-sidebar">
    <div class="slimscroll-menu">
      <div class="list-group list-group-transparent mb-0">
        <span class="list-group-items disabled">
          Welcome!
        </span>
        <nuxt-link
          to="/organisation/dashboard"
          exact
          class="list-group-items list-group-item-action"
        >
          <span class="ml-3 align">Dashboard</span>
        </nuxt-link>
        <nuxt-link
          to="/organisation/dashboard/branches"
          exact
          class="list-group-items list-group-item-action"
        >
          <span class="ml-3 align">Branches</span>
        </nuxt-link>
        <nuxt-link
          to="/organisation/dashboard/users"
          exact
          class="list-group-items list-group-item-action"
        >
          <span class="ml-3 align">Users</span>
        </nuxt-link>

        <nuxt-link
          to="/organisation/dashboard/sms-setup"
          exact
          class="list-group-items list-group-item-action"
        >
          <span class="ml-3 align">SMS Setup</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  }
};
</script>

<style scoped>
div .router-link-active {
  z-index: 2;
  color: #fff;
  background-color: #71b6f9;
  border-color: #007bff;
}
</style>
