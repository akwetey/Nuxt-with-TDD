<template>
  <div class="container">
    <div class="card px-5 py-4 shadow-sm">
      <div class="text-center mb-2">
        <h4 class="text-uppercase mt-0">Sign In</h4>
      </div>
      <form @submit.prevent="login">
        <div class="form-group mb-3">
          <label for="emailaddress" class="float-left">Email</label>
          <input
            class="form-control"
            type="email"
            id="emailaddress"
            v-model="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group mb-3">
          <label for="password" class="float-left">Password</label>
          <input
            class="form-control"
            type="password"
            v-model="password"
            required
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div class="form-group mb-0 text-center mb-3">
          <button
            class="btn btn-primary btn-block"
            type="submit"
            id="loginBtn"
            style="background-color:#409df7; border-color:#409df7"
            ref="loginBtn"
          >
            Log In
          </button>
        </div>
        <div class="d-flex">
          <div>
            <nuxt-link to="/organisation/forgot-password"
              >Forgot Password</nuxt-link
            >
          </div>
          <div class="ml-auto">
            <nuxt-link to="/organisation/register"
              >Don't have an account? Register</nuxt-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showDismissibleAlert: false
    };
  },
  methods: {
    ...mapActions(["auth"]),
    login() {
      const btn = this.$refs.loginBtn;
      console.log(this.email, this.password, btn);
    }
  },
  computed: mapGetters(["message"])
};
</script>

<style scoped>
.card {
  border-color: #edf2f9;
}
.container {
  margin: 100px auto;
  overflow: hidden;
  width: 400px;
  position: relative;
  min-height: 50vh;
}
</style>
