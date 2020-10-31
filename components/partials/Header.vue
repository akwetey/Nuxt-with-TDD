<template>
  <div class="navbar-custom">
    <!-- <a href="index.html" class="logo text-center d-none d-md-inline-block mr-2">
      <span class="logo-lg">
        <img src="assets/images/logo-light.png" alt="" height="16" />
      </span>
    </a> -->

    <button
      type="button"
      class="btn btn-sm btn-dark d-inline-block d-lg-none button-menu-mobile"
    >
      Menu
    </button>

    <ul class="list-unstyled topnav-menu float-right mb-0">
      <li class="dropdown notification-list" ref="showId">
        <a
          class="nav-link dropdown-toggle nav-user mr-0 waves-effect"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <font-awesome-icon :icon="['fas', 'user']" class="text-light" />
          <span class="pro-user-name ml-1 text-light">
            <i class="mdi mdi-chevron-down"></i>
          </span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-right profile-dropdown"
          ref="showDiv"
        >
          <!-- item-->
          <router-link
            :to="{ name: 'profile' }"
            class="dropdown-item notify-item"
          >
            <span class="ml-2 small">My Account</span>
          </router-link>
          <div class="dropdown-divider"></div>
          <a href="javascript:void(0);" class="dropdown-item notify-item">
            <span class="ml-2 small">Logout</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style scoped>
.dropdown-toggle::after {
  color: #fff;
}
.dropdown-item.active,
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #71b6f9;
}
</style>
