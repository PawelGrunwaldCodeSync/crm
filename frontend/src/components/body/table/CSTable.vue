<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th v-for="(header, index) in tableHeader" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(body, index) in tableBody" :key="index">
        <td v-for="(item, itemIndex) in body" :key="itemIndex">
          <template v-if="typeof item !== 'object'">
            {{ item }}
          </template>
          <template v-if="typeof item === 'object'">
            <a class="tooltip" :href="item.url" :data-tooltip="item.title">
              <mdicon :name="item.icon" :size="20"></mdicon>
            </a>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CSTable",
  props: {
    tableHeader: {
      type: Array,
      required: true,
    },
    tableBody: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style lang="scss" src="../../../assets/body/table/cs-table.scss" scoped></style>
