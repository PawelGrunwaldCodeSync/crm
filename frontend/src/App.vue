<template>
  <div id="app" class="container">
    <div class="columns">
      <sidebar class="column col-2 pr-0" />
      <div class="column col-10">
        <transition name="router" mode="out-in" appear>
          <router-view class="main-router-view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar";

export default {
  name: 'App',
  components: {
    Sidebar
  },
}
</script>

<style lang="scss" src="./assets/app/cs-app.scss" scoped></style>
