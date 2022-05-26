<template>
  <div class="cs-navigation">
    <div class="cs-navigation-title">
      <span>Navigation</span>
    </div>
    <div class="cs-navigation-items">
      <router-link
          v-for="(link, index) in links"
          :to="{ name: link.name }"
          :key="index"
          class="text-left"
      >
        <mdicon :name="link.icon" class="mr-1" :size="20"></mdicon>
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>

<script>

import routes from '../../../router/routes';

export default {
  name: "Navigation",
  data() {
    return {
      links: routes,
    };
  }
}
</script>

<style lang="scss" src="../../../assets/sidebar/navigation/cs-navigation.scss" scoped></style>
