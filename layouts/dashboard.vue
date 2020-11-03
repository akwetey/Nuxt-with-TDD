<template>
  <div id="wrapper">
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
      <div class="content">
        <!-- Topbar Start -->
        <Header />
        <!-- end Topbar -->

        <!-- Start Content-->
        <div class="container-fluid">
          <div class="page-wrapper">
            <!-- Start left-sidebar-->
            <Sidebar />
            <!-- end left-sidebar-->
            <div class="page-content">
              <div class="card m-b-30 style-card" style="overflow-x: auto;">
                <div class="card-body">
                  <Nuxt />
                </div>
              </div>
            </div>
          </div>
          <!-- end page-wrapper-->
        </div>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
import Header from "@/components/partials/Header.vue";
export default {
  components: {
    Sidebar,
    Header
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.style-card {
  border: none;
  box-shadow: 0 0.75rem 6rem rgba(56, 65, 74, 0.03);
  margin-bottom: 30px;
}
</style>
