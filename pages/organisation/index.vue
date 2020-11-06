<template>
  <div>
    <Login />
  </div>
</template>
<script>
import Login from "../../components/static/Login";
export default {
  components: {
    Login
  },
  middleware: "guest"
};
</script>
