<template>
  <div class="container">
    <b-overlay
      :show="show"
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
      rounded="sm"
      style="max-width: 420px;"
    >
      <div class="card px-4 py-4 shadow-sm">
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>{{
          error
        }}</b-alert>
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
              placeholder="Enter your email"
            />
          </div>

          <div class="form-group mb-3">
            <label for="password" class="float-left">Password</label>
            <input
              class="form-control"
              type="password"
              v-model="password"
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
                >Forgot Password?</nuxt-link
              >
            </div>
            <div class="ml-3">
              Don't have an account?
              <nuxt-link to="/organisation/register">Sign up</nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      show: false,
      email: "",
      password: "",
      showDismissibleAlert: false,
      error: ""
    };
  },
  methods: {
    async login() {
      try {
        let data = {
          email: this.email,
          password: this.password
        };
        this.show = true;
        const res = await this.$auth.loginWith("local", { data });
        this.$auth.setUser(res.data.data);
      } catch (e) {
        this.error = e.response.data.message;
        this.show = false;
        this.showDismissibleAlert = true;
      }
    }
  }
};
</script>

<style scoped>
.card {
  border-color: #edf2f9;
}
.container {
  margin: 100px auto;
  overflow: hidden;
  position: relative;
  min-height: 50vh;
  width: 474px;
  max-width: 100%;
}
</style>
