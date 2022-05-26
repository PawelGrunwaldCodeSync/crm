<template>
  <div>
    <div class="cs-sidebar">
      <div class="cs-sidebar-logo">
        <h4 class="cs-sidebar-logo-text">CodeSync</h4>
      </div>
      <hr>
      <profile />
      <hr>
      <navigation />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/sidebar/navigation/Navigation";
import Profile from "@/components/sidebar/profile/Profile";

export default {
  name: "Sidebar",
  components: {Profile, Navigation},
}
</script>

<style lang="scss" src="../../assets/sidebar/cs-sidebar.scss"></style>
