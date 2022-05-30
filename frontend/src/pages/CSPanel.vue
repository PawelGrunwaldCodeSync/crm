<template>
  <div class="cs-panel">
    <CSHeader :title="title" />
    <div class="cs-panel-body">
<!--      <div class="columns mt-2">-->
<!--        <div class="column col-3">-->
<!--          <div class="datepicker-box">-->
<!--            <cs-date-picker-->
<!--                v-model="filters.dateFrom"-->
<!--                mode="date"-->
<!--                :masks="dateMask"-->
<!--                :max-date="filters.maxDateFrom"-->
<!--            >-->
<!--              <template v-slot="{ inputValue, inputEvents, togglePopover }">-->
<!--                <div class="datepicker-template">-->
<!--                  <input-->
<!--                      class="datepicker-input"-->
<!--                      :value="inputValue"-->
<!--                      @click="togglePopover()"-->
<!--                  />-->
<!--                </div>-->
<!--              </template>-->
<!--            </cs-date-picker>-->
<!--            <cs-date-picker-->
<!--                v-model="filters.dateTo"-->
<!--                mode="date"-->
<!--                :masks="dateMask"-->
<!--                :max-date="new Date()"-->
<!--                :min-date="filters.minDateTo"-->
<!--            >-->
<!--              <template v-slot="{ inputValue, inputEvents, togglePopover }">-->
<!--                <div class="datepicker-template">-->
<!--                  <input-->
<!--                      class="datepicker-input"-->
<!--                      :value="inputValue"-->
<!--                      @click="togglePopover()"-->
<!--                  />-->
<!--                </div>-->
<!--              </template>-->
<!--            </cs-date-picker>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="columns mt-2">
        <div class="column col-3">
          <div class="cs-income-box card">
            <div class="card-header">
              <div class="card-title">
                <div class="card-title-with-icon">
                  <div>
                    <mdicon name="currency-usd" class="mr-1" size="30"></mdicon>
                  </div>
                  <div class="text-left">
                    Przychód
                  </div>
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
                <div class="card-title-with-icon">
                  <div>
                    <mdicon name="currency-eur" class="mr-1" size="30"></mdicon>
                  </div>
                  <div class="text-left">
                    Dochód
                  </div>
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
                <div class="card-title-with-icon">
                  <div>
                    <mdicon name="folder-open-outline" class="mr-1" size="30"></mdicon>
                  </div>
                  <div class="text-left">
                    Projektów
                  </div>
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
                <div class="card-title-with-icon">
                  <div>
                    <mdicon name="receipt-outline" class="mr-1" size="30"></mdicon>
                  </div>
                  <div class="text-left">
                    Faktur
                  </div>
                </div>
                <div class="text-right">
                  {{ invoicesNumber }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns" style="margin-top: 30px;">
        <div class="column col-6">
          <Bar
              :chart-options="chartOptions"
              :chart-data="chartData"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
          />
        </div>
        <div class="column col-6">
          <Bar
              :chart-options="chartOptions"
              :chart-data="chartData"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoneyFormat from 'vue-money-format';
import moment from 'moment';
import CSHeader from "@/components/body/header/CSHeader";
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'CSPanel',
  components: {
    CSHeader,
    MoneyFormat,
    Bar,
  },
  data() {
    return {
      chartData: {
        labels: [ 'Styczeń', 'Luty', 'Marzec', 'Kwiecień' ],
        datasets: [
            {
              label: 'PLN',
              backgroundColor: '#0d47a1',
              data: [160, 40, 20, 12]
            }
        ]
      },
      chartOptions: {
        responsive: true
      },
      chartId: 'bar-chart',
      datasetIdKey: 'label',
      width: 400,
      height: 0,
      cssClasses: '',
      styles: {},
      plugins: [],
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

<style lang="scss" src="../assets/pages/cs-panel.scss" scoped></style>
