<template>
  <div class="cs-invoices">
    <CSHeader :title="title" />
    <div class="cs-invoices-body">
    </div>
  </div>
</template>

<script>
import CSHeader from "@/components/body/header/CSHeader";

export default {
  name: "CSInvoices",
  components: {
    CSHeader
  },
  data() {
    return {
      title: 'Faktury',
    };
  },
}
</script>

<style lang="scss" src="../assets/pages/cs-invoices.scss" scoped></style>
