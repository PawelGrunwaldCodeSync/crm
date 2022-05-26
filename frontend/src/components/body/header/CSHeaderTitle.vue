<template>
  <div class="column col-4">
    <div class="cs-header-title">
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSHeaderTitle",
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" src="../../../assets/body/header/cs-header-title.scss" scoped></style>
