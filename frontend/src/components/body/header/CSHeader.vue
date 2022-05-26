<template>
  <div class="cs-header">
    <div class="columns">
      <CSHeaderTitle :title="title" />
    </div>
    <hr>
  </div>
</template>

<script>
import CSHeaderTitle from "@/components/body/header/CSHeaderTitle";

export default {
  name: "CSHeader",
  components: {
    CSHeaderTitle
  },
  props: {
    title: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" src="../../../assets/body/header/cs-header.scss" scoped></style>
