<template>
  <div class="cs-panel">
    <CSHeader :title="title" />
    <div class="cs-panel-body">
      <div class="columns mt-2">
        <div class="column col-3">
          <div class="datepicker-box">
            <cs-date-picker
                v-model="filters.dateFrom"
                mode="date"
                :masks="dateMask"
                :max-date="filters.maxDateFrom"
            >
              <template v-slot="{ inputValue, inputEvents, togglePopover }">
                <div style="display: flex; justify-content: space-between">
                  <div style="width: 46%;">
                    <input
                        class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                        :value="inputValue"
                        @click="togglePopover()"
                        style="width: 100%;"
                    />
                  </div>
                </div>
              </template>
            </cs-date-picker>
            <cs-date-picker
                v-model="filters.dateTo"
                mode="date"
                :masks="dateMask"
                :max-date="new Date()"
                :min-date="filters.minDateTo"
            >
              <template v-slot="{ inputValue, inputEvents, togglePopover }">
                <div style="display: flex; justify-content: space-between">
                  <div style="width: 46%;">
                    <input
                        class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                        :value="inputValue"
                        @click="togglePopover()"
                        style="width: 100%;"
                    />
                  </div>
                </div>
              </template>
            </cs-date-picker>
          </div>
        </div>
      </div>
      <div class="columns mt-2">
        <div class="column col-3">
          <div class="cs-income-box card">
            <div class="card-header">
              <div class="card-title" style="display: flex; justify-content: space-between">
                <div class="text-left">
                  Przychód
                </div>
                <div class="text-right">
                  <money-format
                      :value="income"
                      locale="pl"
                      currency-code="PLN"
                      :subunits-value=true
                      :hide-subunits=true
                  >
                  </money-format>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-3">
          <div class="cs-profit-box card">
            <div class="card-header">
              <div class="card-title">
                <div class="text-left">
                  Dochód
                </div>
                <div class="text-right">
                  <money-format
                      :value="profit"
                      locale="pl"
                      currency-code="PLN"
                      :subunits-value=true
                      :hide-subunits=true
                  >
                  </money-format>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-3">
          <div class="cs-project-realizations-box card">
            <div class="card-header">
              <div class="card-title">
                <div class="text-left">
                  Ilość projektów
                </div>
                <div class="text-right">
                  {{ projectRealizations }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-3">
          <div class="cs-invoices-number-box card">
            <div class="card-header">
              <div class="card-title">
                <div class="text-left">
                  Ilość faktur
                </div>
                <div class="text-right">
                  {{ invoicesNumber }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoneyFormat from 'vue-money-format';
import CSHeader from "@/components/body/header/CSHeader";
import moment from 'moment';

export default {
  name: 'CSPanel',
  components: {
    CSHeader,
    MoneyFormat,
  },
  data() {
    return {
      title: 'Panel',
      income: 1000000,
      profit: 1000000,
      projectRealizations: 15,
      invoicesNumber: 10,
      filters: {
        dateFrom: '',
        dateTo: new Date(),
        maxDateFrom: null,
        minDateTo: null,
      },
      dateMask: {
        input: 'YYYY-MM-DD',
      },
    };
  },
  watch: {
    'filters.dateFrom': function (value) {
      moment(value).format('YYYY-MM-DD');

      this.filters.minDateTo = value;
    },
    'filters.dateTo': function (value) {
      moment(value).format('YYYY-MM-DD');

      this.filters.dateFrom = value;
      this.filters.maxDateFrom = value;
    }
  }
}
</script>

<style lang="scss" src="../assets/pages/cs-panel.scss" scoped>

</style>
