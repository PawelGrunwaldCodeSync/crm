<template>
  <div class="cs-invoices">
    <CSHeader :title="title" />
    <div class="cs-invoices-body">
      <div class="columns">
        <div class="column col-7">
          <CSTable :table-header="table.header" :table-body="table.body" />
        </div>
        <div class="column col-1">
          <div class="divider-vert" style="height: 100%;"></div>
        </div>
        <div class="column col-4">
          <div class="card cs-invoices-data">
            <div class="card-header">
              <div class="card-title h5">Dane do faktur</div>
            </div>
            <div class="card-body">
              <div class="data-container">
                <div class="data-title">
                  <p class="m-0">Nazwa Firmy</p>
                </div>
                <div class="data-box">
                  <p class="m-0">CodeSync</p>
                </div>
              </div>
              <div class="divider"></div>
              <div class="data-container">
                <div class="data-title">
                  <p class="m-0">Adres</p>
                </div>
                <div class="data-box">
                  <p class="m-0">ul. Uni 11/11</p>
                  <p class="m-0">24-277 Warszawa</p>
                </div>
              </div>
              <div class="divider"></div>
              <div class="data-container">
                <div class="data-title">
                  <p class="m-0">NIP</p>
                </div>
                <div class="data-box">
                  <p class="m-0">7154156780</p>
                </div>
              </div>
              <div class="divider"></div>
              <div class="data-container">
                <div class="data-title">
                  <p class="m-0">E-mail</p>
                </div>
                <div class="data-box">
                  <p class="m-0">jan.kowalski@gmail.com</p>
                </div>
              </div>
            </div>
<!--            <div class="card-footer">-->
<!--              <button class="btn btn-primary">...</button>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CSHeader from "@/components/body/header/CSHeader";
import CSTable from "@/components/body/table/CSTable";

export default {
  name: "CSInvoices",
  components: {
    CSHeader,
    CSTable,
  },
  data() {
    return {
      title: 'Faktury',
      table: {
        header: [
            'Numer faktury', 'Data wystawienia', 'Kontrahent', '',
        ],
        body: [
            [
                '0001/05/2022/PG', '2022-05-31', 'Test', { icon: 'download', title: 'Pobierz fakturę', 'url': '' },
            ],
            [
              '0001/05/2022/PG', '2022-05-31', 'Test', { icon: 'download', title: 'Pobierz fakturę', 'url': '' },
            ],
            [
              '0001/05/2022/PG', '2022-05-31', 'Test', { icon: 'download', title: 'Pobierz fakturę', 'url': '' },
            ],
        ]
      }
    };
  },
}
</script>

<style lang="scss" src="../assets/pages/cs-invoices.scss" scoped></style>
